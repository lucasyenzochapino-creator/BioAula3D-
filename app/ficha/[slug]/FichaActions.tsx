"use client";
import { useState } from "react";

interface Props {
  title: string;
  slug: string;
}

// Encuentra la fila más cercana al límite de página que sea espacio en blanco,
// para nunca cortar en medio de un texto o una tarjeta.
function findSafeBreak(
  ctx: CanvasRenderingContext2D,
  pageEnd: number,
  pageStart: number,
  width: number
): number {
  const minSearch = Math.floor(pageStart + (pageEnd - pageStart) * 0.6);
  for (let y = pageEnd; y >= minSearch; y--) {
    const row = ctx.getImageData(0, y, width, 1).data;
    let isLight = true;
    // Sampleamos cada 8px para no frenar el browser
    for (let x = 0; x < row.length; x += 32) {
      if (row[x] < 235 || row[x + 1] < 235 || row[x + 2] < 235) {
        isLight = false;
        break;
      }
    }
    if (isLight) return y;
  }
  return pageEnd; // fallback: cortar donde toca
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

      const ctx = canvas.getContext("2d")!;
      const A4_W_MM = 210;
      const A4_H_MM = 297;
      const imgW = A4_W_MM;
      const imgH = (canvas.height * A4_W_MM) / canvas.width;

      // Altura de una página A4 en píxeles del canvas
      const pageHpx = Math.floor((A4_H_MM * canvas.width) / A4_W_MM);

      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

      let y = 0;
      let page = 0;

      while (y < canvas.height) {
        if (page > 0) pdf.addPage();

        // Límite natural de la página
        const naturalEnd = Math.min(y + pageHpx, canvas.height);

        // Buscamos un corte seguro (fila blanca entre tarjetas)
        const cutAt =
          naturalEnd < canvas.height
            ? findSafeBreak(ctx, naturalEnd, y, canvas.width)
            : canvas.height;

        // Creamos un canvas parcial solo con la franja de esta página
        const slice = document.createElement("canvas");
        slice.width = canvas.width;
        slice.height = cutAt - y;
        const sliceCtx = slice.getContext("2d")!;
        sliceCtx.drawImage(canvas, 0, y, canvas.width, cutAt - y, 0, 0, canvas.width, cutAt - y);

        const sliceH = ((cutAt - y) * A4_W_MM) / canvas.width;
        pdf.addImage(slice.toDataURL("image/jpeg", 0.92), "JPEG", 0, 0, imgW, sliceH);

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
