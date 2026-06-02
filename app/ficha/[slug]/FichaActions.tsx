"use client";
import { useState } from "react";

interface Props {
  title: string;
  slug: string;
}

export default function FichaActions({ title, slug }: Props) {
  const [loading, setLoading] = useState(false);

  const generatePDF = async (): Promise<Blob | undefined> => {
    setLoading(true);
    try {
      const [{ default: jsPDF }, { default: html2canvas }] = await Promise.all([
        import("jspdf"),
        import("html2canvas"),
      ]);

      const el = document.getElementById("ficha-content");
      if (!el) return;

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        logging: false,
      });

      // Escala entre píxeles del canvas y píxeles del DOM
      const scaleY = canvas.height / el.scrollHeight;

      // Puntos de corte seguros: justo debajo de cada tarjeta (data-structure)
      // Así nunca cortamos dentro de una tarjeta
      const fichaRect = el.getBoundingClientRect();
      const cards = Array.from(el.querySelectorAll("[data-structure]")) as HTMLElement[];

      const breakPoints: number[] = [0];
      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        // Posición del fondo de la tarjeta relativa al tope del contenido
        const bottomRelative = cardRect.bottom - fichaRect.top + el.scrollTop;
        // +8px para caer en el gap (space-y-5 = 20px) y no en el borde
        breakPoints.push(Math.floor((bottomRelative + 8) * scaleY));
      });
      breakPoints.push(canvas.height);

      // A4 en píxeles del canvas
      const A4_W = 210; // mm
      const A4_H = 297; // mm
      const pageHpx = Math.floor((A4_H * canvas.width) / A4_W);

      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      let y = 0;
      let page = 0;

      while (y < canvas.height) {
        if (page > 0) pdf.addPage();

        const naturalEnd = Math.min(y + pageHpx, canvas.height);
        let cutAt: number;

        if (naturalEnd >= canvas.height) {
          cutAt = canvas.height;
        } else {
          // Último breakPoint que cabe en esta página
          const fitting = breakPoints.filter((bp) => bp > y && bp <= naturalEnd);
          cutAt = fitting.length > 0 ? fitting[fitting.length - 1] : naturalEnd;
          if (cutAt <= y) cutAt = naturalEnd; // no hay breakpoint que entre: cortar igual
        }

        // Slice del canvas para esta página
        const slice = document.createElement("canvas");
        slice.width = canvas.width;
        slice.height = cutAt - y;
        const ctx = slice.getContext("2d")!;
        ctx.drawImage(canvas, 0, y, canvas.width, cutAt - y, 0, 0, canvas.width, cutAt - y);

        const sliceHmm = ((cutAt - y) * A4_W) / canvas.width;
        pdf.addImage(slice.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, A4_W, sliceHmm);

        y = cutAt;
        page++;
      }

      return pdf.output("blob");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    const blob = await generatePDF();
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `BioAula3D-${slug}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const blob = await generatePDF();
    if (!blob) return;
    const file = new File([blob], `BioAula3D-${slug}.pdf`, { type: "application/pdf" });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file], title: `Ficha: ${title} — BioAula3D` });
    } else {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `BioAula3D-${slug}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handleDownload}
        disabled={loading}
        className="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-all flex items-center gap-2 disabled:opacity-60"
      >
        {loading ? "⏳" : "📥"} {loading ? "Generando..." : "Descargar PDF"}
      </button>
      <button
        onClick={handleShare}
        disabled={loading}
        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold transition-all flex items-center gap-2 disabled:opacity-60"
      >
        {loading ? "⏳" : "📤"} {loading ? "Generando..." : "Compartir PDF"}
      </button>
    </div>
  );
}
