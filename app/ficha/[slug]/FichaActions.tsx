"use client";
import { useState } from "react";

interface Props {
  title: string;
  slug: string;
}

export default function FichaActions({ title, slug }: Props) {
  const [loading, setLoading] = useState(false);

  const generatePDF = async () => {
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

      const A4_W = 210;
      const A4_H = 297;
      const imgW = A4_W;
      const imgH = (canvas.height * A4_W) / canvas.width;

      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      let y = 0;
      let page = 0;
      while (y < imgH) {
        if (page > 0) pdf.addPage();
        pdf.addImage(canvas.toDataURL("image/jpeg", 0.92), "JPEG", 0, -y, imgW, imgH);
        y += A4_H;
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
      // Fallback: descargar si el device no soporta compartir archivos
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
