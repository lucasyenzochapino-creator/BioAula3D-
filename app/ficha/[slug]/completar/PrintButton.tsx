"use client";
export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-4 py-1.5 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-all"
    >
      🖨️ Imprimir
    </button>
  );
}
