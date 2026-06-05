"use client";
import Link from "next/link";

function BioIcon({ name, size = 18 }: { name: string; size?: number }) {
  const s = size;
  const icons: Record<string, JSX.Element> = {
    cell: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="9" ry="7" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="3" ry="2.5" fill="currentColor"/><line x1="3" y1="12" x2="5.5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="18.5" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="5" x2="12" y2="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="16.5" x2="12" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    plant: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><ellipse cx="12" cy="12" rx="4" ry="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>,
    dna: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M4 4c5 6 11 6 16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 20c5-6 11-6 16 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 8c3.5 3 8.5 3 12 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity=".5"/><path d="M6 16c3.5-3 8.5-3 12 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity=".5"/></svg>,
    genetics: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2.5" fill="currentColor"/><circle cx="6" cy="19" r="2" fill="currentColor" fillOpacity=".6"/><circle cx="18" cy="19" r="2" fill="currentColor" fillOpacity=".6"/><line x1="12" y1="7.5" x2="12" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 11L6.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 11L17.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    division: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="7" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="17" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="7" cy="12" r="1.8" fill="currentColor"/><circle cx="17" cy="12" r="1.8" fill="currentColor"/></svg>,
    microbe: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="2" fill="currentColor"/><line x1="12" y1="7" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="17" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="7" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="17" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="9" x2="7" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="15" y1="9" x2="17" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    tree: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M5 14h14l-7-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 10h8l-4-6z" fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><line x1="12" y1="22" x2="12" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>,
    body: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2.5" fill="currentColor"/><line x1="12" y1="7.5" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M9.5 10.5l-2.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M14.5 10.5l2.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M7 22v-2a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    bone: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M8.5 5.5a2 2 0 0 0-3 3L13 16a2 2 0 0 0 3-3L8.5 5.5z" stroke="currentColor" strokeWidth="1.5"/><circle cx="6" cy="7" r="2" fill="currentColor"/><circle cx="18" cy="17" r="2" fill="currentColor"/></svg>,
    muscle: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M4 13c0-4 3-8 8-8 2.5 0 4 2 4 4s-1.5 4-1.5 6 2 4 4.5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M4 13c0 3 2 5 5 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeOpacity=".4"/></svg>,
    heart: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 3 15 3 8.5a4.5 4.5 0 0 1 9 0 4.5 4.5 0 0 1 9 0C21 15 12 21 12 21z" stroke="currentColor" strokeWidth="1.5"/></svg>,
    lung: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 3v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 8C5.5 9.5 4 12.5 4 16c0 2.5 1.5 4 3.5 4S11 18.5 11 17v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 8c2.5 1.5 4 4.5 4 8 0 2.5-1.5 4-3.5 4S13 18.5 13 17v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    stomach: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M9 4C6 4 4 7 4 11c0 5 3.5 9 8 9s8-4 8-9c0-3-.5-5-2.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 4h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    kidney: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M7 5C4 5 3 8 3 12s1.5 7 4 7c2 0 3-1.5 3-3 0 1.5 1 3 3 3 2.5 0 4-3 4-7s-1-7-4-7c-2 0-3 1.5-3 3 0-1.5-1-3-3-3H7z" stroke="currentColor" strokeWidth="1.5"/></svg>,
    neuron: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="currentColor"/><path d="M12 9V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 11L5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 13L5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 15v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 11l4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 13l4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    brain: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M9.5 3.5c-2.5 0-4.5 2-4.5 4.5 0 1 .4 2 1 2.7C5.4 11.4 5 12.4 5 13.5c0 2 1.5 3.5 3.5 3.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M14.5 3.5c2.5 0 4.5 2 4.5 4.5 0 1-.4 2-1 2.7.6.7 1 1.7 1 2.8 0 2-1.5 3.5-3.5 3.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    eye: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.2"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/></svg>,
    flask: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M9 3h6M10 3v6L5 17c-.8 1.2.2 3 2 3h10c1.8 0 2.8-1.8 2-3L14 9V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="7" y1="17" x2="10" y2="17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>,
    shield: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 3L4 7v5c0 4.5 3.5 8.7 8 10 4.5-1.3 8-5.5 8-10V7L12 3z" stroke="currentColor" strokeWidth="1.5"/><path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    female: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.5"/><line x1="12" y1="13" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="18" x2="15" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    male: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="10" cy="14" r="5" stroke="currentColor" strokeWidth="1.5"/><line x1="14.5" y1="9.5" x2="21" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><polyline points="16 3 21 3 21 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>,
    evolve: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><line x1="12" y1="20" x2="12" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 14L6 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 14L18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="6" cy="8" r="2" fill="currentColor" fillOpacity=".5"/><circle cx="18" cy="8" r="2" fill="currentColor" fillOpacity=".5"/><circle cx="12" cy="20" r="2" fill="currentColor"/></svg>,
    taxonomy: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="4" r="2.5" fill="currentColor"/><line x1="12" y1="6.5" x2="12" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="7" y1="9" x2="7" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="17" y1="9" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="7" cy="14" r="2" fill="currentColor" fillOpacity=".6"/><circle cx="17" cy="14" r="2" fill="currentColor" fillOpacity=".6"/></svg>,
    tissue: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><rect x="13" y="3" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/><rect x="13" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.3"/></svg>,
    trophy: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M7 4h10c0 5-2 9.5-5 9.5S7 9 7 4z" stroke="currentColor" strokeWidth="1.5"/><path d="M7 4H5v3c0 2.5 2 4.5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 4h2v3c0 2.5-2 4.5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    book: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5"/><line x1="9" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><line x1="9" y1="11" x2="12" y2="11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    clipboard: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="1.5"/><rect x="8" y="2" width="8" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.2"/><line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><line x1="9" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    exam: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5"/><polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><line x1="9" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
    notes: <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5"/><polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/><line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/><line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  };
  return icons[name] ?? <svg width={s} height={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/></svg>;
}

// ── Data ──────────────────────────────────────────────────────────────────────
type Mod = { slug: string; title: string; desc: string; icon: string; parts: number };

const cellular: Mod[] = [
  { slug: "celula",    title: "Célula Animal",     icon: "cell",     parts: 12, desc: "Núcleo, mitocondrias y organelas en 3D." },
  { slug: "planta",    title: "Célula Vegetal",    icon: "plant",    parts: 11, desc: "Pared celular, cloroplastos y vacuola." },
  { slug: "adn",       title: "ADN y Genética",    icon: "dna",      parts: 8,  desc: "Doble hélice, codones y replicación." },
  { slug: "herencia",  title: "Herencia Genética", icon: "genetics", parts: 8,  desc: "Leyes de Mendel y cuadro de Punnett." },
  { slug: "mitosis",   title: "Mitosis y Meiosis", icon: "division", parts: 8,  desc: "Fases de la división celular." },
];

const ecology: Mod[] = [
  { slug: "microbiologia", title: "Microbiología",             icon: "microbe",  parts: 8, desc: "Estructura bacteriana y resistencia antibiótica." },
  { slug: "ecosistemas",   title: "Ecosistemas",               icon: "tree",     parts: 8, desc: "Cuatro biomas en 3D." },
  { slug: "evolucion",     title: "Evolución",                 icon: "evolve",   parts: 8, desc: "Caminata de la evolución humana." },
  { slug: "clasificacion", title: "Clasificación de Seres Vivos", icon: "taxonomy", parts: 8, desc: "Los 5 reinos y árbol filogenético." },
  { slug: "tejidos",       title: "Tejidos",                   icon: "tissue",   parts: 8, desc: "Tejido epitelial, conectivo y muscular." },
];

const body: Mod[] = [
  { slug: "cuerpo-humano",         title: "Cuerpo Humano",            icon: "body",    parts: 15, desc: "Vista completa de todos los sistemas." },
  { slug: "oseo",                  title: "Sistema Óseo",             icon: "bone",    parts: 10, desc: "206 huesos: cráneo, columna y articulaciones." },
  { slug: "muscular",              title: "Sistema Muscular",         icon: "muscle",  parts: 10, desc: "Sarcómero, actina y miosina." },
  { slug: "corazon",               title: "Corazón",                  icon: "heart",   parts: 9,  desc: "Ventrículos, aurículas y válvulas." },
  { slug: "pulmones",              title: "Sistema Respiratorio",     icon: "lung",    parts: 8,  desc: "Pulmones, bronquios y alvéolos." },
  { slug: "digestivo",             title: "Sistema Digestivo",        icon: "stomach", parts: 8,  desc: "Boca, estómago e intestinos." },
  { slug: "excretor",              title: "Sistema Excretor",         icon: "kidney",  parts: 8,  desc: "Riñones, nefrona y vejiga." },
  { slug: "sistema-nervioso",      title: "Sistema Nervioso",         icon: "neuron",  parts: 9,  desc: "Neurona 3D con axón y sinapsis." },
  { slug: "cerebro",               title: "Cerebro",                  icon: "brain",   parts: 8,  desc: "Lóbulos, cerebelo e hipocampo." },
  { slug: "sentidos",              title: "Órganos de los Sentidos",  icon: "eye",     parts: 9,  desc: "Ojo, oído, nariz, lengua y piel." },
  { slug: "endocrino",             title: "Sistema Endócrino",        icon: "flask",   parts: 8,  desc: "Hipotálamo, hipófisis y tiroides." },
  { slug: "inmunologico",          title: "Sistema Inmunológico",     icon: "shield",  parts: 9,  desc: "Linfocitos, anticuerpos y macrófagos." },
  { slug: "reproductor",           title: "Reproductor Femenino",     icon: "female",  parts: 8,  desc: "Ovarios, útero y ciclo menstrual." },
  { slug: "reproductor-masculino", title: "Reproductor Masculino",    icon: "male",    parts: 8,  desc: "Testículos, epidídimo y espermatozoide." },
];

type Tool = { slug: string; title: string; icon: string; desc: string };
const tools: Tool[] = [
  { slug: "quiz",         title: "Quiz 3D",         icon: "trophy",    desc: "10 preguntas con explicación y puntaje." },
  { slug: "glosario",     title: "Glosario",         icon: "book",      desc: "65+ términos biológicos con PDF." },
  { slug: "tareas",       title: "Banco de Tareas",  icon: "clipboard", desc: "24 tareas listas por nivel." },
  { slug: "evaluaciones", title: "Evaluaciones",     icon: "exam",      desc: "28 evaluaciones. PDF alumno y docente." },
  { slug: "notas",        title: "Notas",            icon: "notes",     desc: "Anotaciones con exportación a PDF." },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ background: "#0b1120", minHeight: "100vh" }}>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-8 border-b border-white/[0.06]">
        <h1
          className="text-[32px] md:text-[44px] font-extrabold text-white leading-tight mb-2"
          style={{ fontFamily: "var(--font-display, inherit)", letterSpacing: "-0.025em" }}
        >
          BioAula3D
        </h1>
        <p className="text-slate-400 text-[14px] md:text-[15px] max-w-md leading-relaxed mb-6">
          Modelos 3D interactivos de células, órganos y sistemas del cuerpo humano.
          Para primaria y secundaria.
        </p>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => document.getElementById("celular")?.scrollIntoView({ behavior: "smooth" })}
            className="px-5 py-2.5 text-[13px] font-semibold text-white rounded-lg transition-colors"
            style={{ background: "#16a34a" }}
          >
            Explorar modelos
          </button>
          <Link
            href="/quiz"
            className="px-5 py-2.5 text-[13px] font-medium text-slate-300 rounded-lg border border-white/[0.12] hover:border-white/[0.22] hover:bg-white/[0.04] transition-all"
          >
            Comenzar quiz
          </Link>
        </div>
      </div>

      {/* Módulos */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-4 space-y-10">

        <section id="celular">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-4 rounded-full bg-green-600 block" />
            <h2 className="text-[13px] font-semibold text-slate-400 uppercase tracking-widest">Célula y Genética</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {cellular.map(m => <ModCard key={m.slug} m={m} />)}
          </div>
        </section>

        <section id="ecologia">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-4 rounded-full bg-green-600 block" />
            <h2 className="text-[13px] font-semibold text-slate-400 uppercase tracking-widest">Microbiología y Ecología</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {ecology.map(m => <ModCard key={m.slug} m={m} />)}
          </div>
        </section>

        <section id="cuerpo">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-4 rounded-full bg-green-600 block" />
            <h2 className="text-[13px] font-semibold text-slate-400 uppercase tracking-widest">Cuerpo Humano</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {body.map(m => <ModCard key={m.slug} m={m} />)}
          </div>
        </section>
      </div>

      {/* Herramientas */}
      <section id="herramientas" className="max-w-6xl mx-auto px-4 pt-4 pb-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1 h-4 rounded-full bg-green-600 block" />
          <h2 className="text-[13px] font-semibold text-slate-400 uppercase tracking-widest">Herramientas educativas</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {tools.map(t => (
            <Link key={t.slug} href={`/${t.slug}`}>
              <div className="flex items-center gap-3 rounded-xl border border-[#1e293b] hover:border-[#2d3f57] bg-[#111827] p-4 transition-all card-hover cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-green-600/10 text-green-500 flex items-center justify-center flex-shrink-0">
                  <BioIcon name={t.icon} size={16} />
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-slate-100">{t.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 hidden sm:block">{t.desc}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function ModCard({ m }: { m: Mod }) {
  return (
    <Link href={`/${m.slug}`}>
      <div className="h-full bg-[#111827] border border-[#1e293b] hover:border-[#2d3f57] rounded-xl p-3.5 transition-all card-hover cursor-pointer flex flex-col gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-green-600/10 text-green-500 flex items-center justify-center">
          <BioIcon name={m.icon} size={16} />
        </div>
        <div>
          <div className="text-[12.5px] font-semibold text-slate-100 leading-snug">{m.title}</div>
          <div className="text-[10.5px] text-slate-500 mt-1 leading-snug hidden sm:block">{m.desc}</div>
        </div>
        <div className="text-[10px] text-slate-600 font-medium mt-auto">{m.parts} estructuras</div>
      </div>
    </Link>
  );
}
