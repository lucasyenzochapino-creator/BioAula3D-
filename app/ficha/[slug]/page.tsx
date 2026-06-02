import { notFound } from "next/navigation";
import Link from "next/link";
import { getModule, MODULES } from "@/lib/modules";
import FichaActions from "./FichaActions";

export async function generateStaticParams() {
  return MODULES.map(m => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const mod = getModule(params.slug);
  return { title: mod ? `Ficha: ${mod.title} | BioAula3D` : "Ficha" };
}

export default function FichaPage({ params }: { params: { slug: string } }) {
  const mod = getModule(params.slug);
  if (!mod) notFound();

  const today = new Date().toLocaleDateString("es-AR", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Barra de acciones — oculta al imprimir */}
      <div className="no-print sticky top-0 z-10 bg-slate-900 text-white px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
        <Link href={`/${mod.slug}`} className="text-slate-300 hover:text-white text-sm transition-colors">
          ← Volver al visor 3D
        </Link>
        <FichaActions title={mod.title} slug={mod.slug} />
      </div>

      {/* Contenido de la ficha */}
      <div id="ficha-content" className="max-w-3xl mx-auto px-6 py-8 print-content">
        {/* Encabezado */}
        <div className="border-b-2 border-slate-200 pb-6 mb-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">BioAula3D · Ficha de Estudio</p>
              <h1 className="text-3xl font-bold text-slate-900">{mod.title}</h1>
              <p className="text-slate-500 mt-1">{mod.subtitle}</p>
            </div>
            <div className="text-right text-xs text-slate-400">
              <p>Fecha: {today}</p>
              <p>Estructuras: {mod.structures.length}</p>
            </div>
          </div>
          <p className="mt-4 text-slate-600 text-sm leading-relaxed border-l-4 pl-4" style={{ borderColor: mod.accent }}>
            {mod.intro}
          </p>
        </div>

        {/* Estructuras */}
        <div className="space-y-5">
          {mod.structures.map((s, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 bg-slate-50 border-b border-slate-200">
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: s.color }} />
                {s.emoji && <span className="text-lg leading-none">{s.emoji}</span>}
                <h2 className="text-base font-bold text-slate-900">{s.name}</h2>
                <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: s.color }}>
                  #{i + 1}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
                <div className="p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2">🌱 Primaria</p>
                  <p className="text-sm text-slate-700 leading-relaxed">{s.simple}</p>
                </div>
                <div className="p-4 bg-slate-50/50">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">🔬 Secundaria</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.full}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pie de página */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2">
          <span>BioAula3D · Recurso educativo de biología 3D</span>
          <span>Modelo 3D interactivo: <strong className="text-slate-600">bio-aula3-d.vercel.app/{mod.slug}</strong></span>
        </div>
      </div>

      {/* Estilos de impresión */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; font-size: 11pt; }
          .print-content { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
          .border { border: 1px solid #e2e8f0 !important; }
          .bg-slate-50 { background: #f8fafc !important; }
        }
        @page { margin: 1.5cm; size: A4; }
      `}</style>
    </div>
  );
}
