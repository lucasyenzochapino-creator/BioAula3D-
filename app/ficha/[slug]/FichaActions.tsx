"use client";

interface Props {
  title: string;
  slug: string;
}

export default function FichaActions({ title, slug }: Props) {
  const handlePrint = () => window.print();

  const handleShare = async () => {
    const url = `${window.location.origin}/${slug}`;
    const text = `Ficha de estudio: ${title} en BioAula3D`;
    if (navigator.share) {
      await navigator.share({ title: `BioAula3D — ${title}`, text, url });
    } else {
      await navigator.clipboard.writeText(url);
      alert("¡Link copiado al portapapeles!");
    }
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={handlePrint}
        className="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-all flex items-center gap-2"
      >
        🖨️ Imprimir / PDF
      </button>
      <button
        onClick={handleShare}
        className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold transition-all flex items-center gap-2"
      >
        📤 Compartir
      </button>
    </div>
  );
}
