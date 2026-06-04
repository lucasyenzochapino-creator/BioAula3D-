import { notFound } from "next/navigation";
import Link from "next/link";
import { getModule, MODULES } from "@/lib/modules";
import PrintButton from "./PrintButton";

export async function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const mod = getModule(params.slug);
  return { title: mod ? `Completar: ${mod.title} | BioAula3D` : "Ficha" };
}

const LINES_SIMPLE = 3;
const LINES_FULL = 5;

function BlankLines({ count }: { count: number }) {
  return (
    <div className="space-y-3 mt-2">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="border-b border-slate-300 h-5" />
      ))}
    </div>
  );
}

export default function FichaCompletarPage({ params }: { params: { slug: string } }) {
  const mod = getModule(params.slug);
  if (!mod) notFound();

  const today = new Date().toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Barra superior — oculta al imprimir */}
      <div className="no-print sticky top-0 z-10 bg-slate-900 text-white px-4 py-3 flex items-center justify-between gap-3 flex-wrap">
        <Link href={`/ficha/${mod.slug}`} className="text-slate-300 hover:text-white text-sm transition-colors">
          ← Ficha completa
        </Link>
        <div className="flex gap-2">
          <Link
            href={`/ficha/${mod.slug}/completar`}
            className="px-3 py-1.5 bg-slate-700 text-slate-300 rounded-lg text-sm font-semibold"
          >
            ✏️ Para completar
          </Link>
          <Link
            href={`/ficha/${mod.slug}`}
            className="px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold transition-all"
          >
            📖 Con respuestas
          </Link>
          <PrintButton />
        </div>
      </div>

      <div id="completar-content" className="max-w-3xl mx-auto px-6 py-8">
        {/* Encabezado */}
        <div className="border-b-2 border-slate-200 pb-6 mb-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                BioAula3D · Ficha para Completar
              </p>
              <h1 className="text-3xl font-bold text-slate-900">{mod.title}</h1>
              <p className="text-slate-500 mt-1">{mod.subtitle}</p>
            </div>
            <div className="text-right text-xs text-slate-400">
              <p>Fecha: {today}</p>
              <p>Nombre: ___________________________</p>
            </div>
          </div>
          <p className="mt-4 text-slate-500 text-sm italic border-l-4 pl-4" style={{ borderColor: mod.accent }}>
            Completá cada estructura con tus palabras.
          </p>
        </div>

        {/* Estructuras con espacios en blanco */}
        <div className="space-y-6">
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
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">🌱 Primaria</p>
                  <BlankLines count={LINES_SIMPLE} />
                </div>
                <div className="p-4 bg-slate-50/50">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">🔬 Secundaria</p>
                  <BlankLines count={LINES_FULL} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pie */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400 flex-wrap gap-2">
          <span>BioAula3D · Recurso educativo de biología 3D</span>
          <span>
            Ver modelo 3D:{" "}
            <strong className="text-slate-600">bio-aula3-d.vercel.app/{mod.slug}</strong>
          </span>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; font-size: 11pt; }
          #completar-content { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
        }
        @page { margin: 1.5cm; size: A4; }
      `}</style>
    </div>
  );
}
