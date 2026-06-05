"use client";
import Link from "next/link";
import { motion } from "framer-motion";

// ── SVG icon system ──────────────────────────────────────────────────────────
function BioIcon({ name, className = "w-[18px] h-[18px]" }: { name: string; className?: string }) {
  const p: Record<string, JSX.Element> = {
    cell: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <ellipse cx="12" cy="12" rx="9" ry="7"/><ellipse cx="12" cy="12" rx="3" ry="2.5"/>
        <line x1="3" y1="12" x2="5.5" y2="12"/><line x1="18.5" y1="12" x2="21" y2="12"/>
        <line x1="12" y1="5" x2="12" y2="7.5"/><line x1="12" y1="16.5" x2="12" y2="19"/>
      </svg>
    ),
    plant: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <ellipse cx="12" cy="12" rx="4" ry="3"/>
        <circle cx="12" cy="12" r="1.5"/>
      </svg>
    ),
    dna: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M4 4c5 6 11 6 16 0"/><path d="M4 20c5-6 11-6 16 0"/>
        <line x1="4" y1="12" x2="20" y2="12"/>
        <path d="M6 8c3.5 3 8.5 3 12 0" strokeOpacity=".45"/>
        <path d="M6 16c3.5-3 8.5-3 12 0" strokeOpacity=".45"/>
      </svg>
    ),
    genetics: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <circle cx="12" cy="5" r="2.5"/><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="19" r="2.5"/>
        <line x1="12" y1="7.5" x2="12" y2="11"/>
        <path d="M12 11L6.5 16.5"/><path d="M12 11L17.5 16.5"/>
      </svg>
    ),
    division: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <circle cx="7" cy="12" r="4.5"/><circle cx="17" cy="12" r="4.5"/>
        <path d="M11 12h2" strokeDasharray="2 1"/>
      </svg>
    ),
    microbe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="7" x2="12" y2="4"/><line x1="12" y1="17" x2="12" y2="20"/>
        <line x1="7" y1="12" x2="4" y2="12"/><line x1="17" y1="12" x2="20" y2="12"/>
        <line x1="9" y1="9" x2="7" y2="7"/><line x1="15" y1="9" x2="17" y2="7"/>
        <line x1="9" y1="15" x2="7" y2="17"/><line x1="15" y1="15" x2="17" y2="17"/>
      </svg>
    ),
    tree: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <line x1="12" y1="22" x2="12" y2="14"/>
        <path d="M5 14h14l-7-10z"/><path d="M8 10h8l-4-6z"/>
      </svg>
    ),
    body: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <circle cx="12" cy="5" r="2.5"/>
        <path d="M7 22v-2a5 5 0 0 1 10 0v2"/>
        <line x1="12" y1="7.5" x2="12" y2="13"/>
        <path d="M9.5 10.5l-2.5 5"/><path d="M14.5 10.5l2.5 5"/>
      </svg>
    ),
    bone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M8.5 5.5a2 2 0 0 0-3 3L13 16a2 2 0 0 0 3-3L8.5 5.5z"/>
        <circle cx="6" cy="7" r="2"/><circle cx="18" cy="17" r="2"/>
      </svg>
    ),
    muscle: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M4 13c0-4 3-8 8-8 2.5 0 4 2 4 4s-1.5 4-1.5 6 2 4 4.5 3"/>
        <path d="M4 13c0 3 2 5 5 6" strokeOpacity=".4"/>
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M12 21C12 21 3 15 3 8.5a4.5 4.5 0 0 1 9 0 4.5 4.5 0 0 1 9 0C21 15 12 21 12 21z"/>
      </svg>
    ),
    lung: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M12 3v8"/>
        <path d="M8 8C5.5 9.5 4 12.5 4 16c0 2.5 1.5 4 3.5 4S11 18.5 11 17v-3"/>
        <path d="M16 8c2.5 1.5 4 4.5 4 8 0 2.5-1.5 4-3.5 4S13 18.5 13 17v-3"/>
        <path d="M10 18c0 1.5 1 2.5 2 2.5s2-1 2-2.5" strokeOpacity=".5"/>
      </svg>
    ),
    stomach: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M9 4C6 4 4 7 4 11c0 5 3.5 9 8 9s8-4 8-9c0-3-.5-5-2.5-5"/>
        <path d="M9 4h7"/>
      </svg>
    ),
    kidney: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M7 5C4 5 3 8 3 12s1.5 7 4 7c2 0 3-1.5 3-3 0 1.5 1 3 3 3 2.5 0 4-3 4-7s-1-7-4-7c-2 0-3 1.5-3 3 0-1.5-1-3-3-3H7z"/>
      </svg>
    ),
    neuron: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 9V4"/><path d="M9 11L5 8"/><path d="M9 13L5 16"/>
        <path d="M12 15v5"/><path d="M15 11l4-3"/><path d="M15 13l4 3"/>
      </svg>
    ),
    brain: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M9.5 3.5c-2.5 0-4.5 2-4.5 4.5 0 1 .4 2 1 2.7C5.4 11.4 5 12.4 5 13.5c0 2 1.5 3.5 3.5 3.5H12"/>
        <path d="M14.5 3.5c2.5 0 4.5 2 4.5 4.5 0 1-.4 2-1 2.7.6.7 1 1.7 1 2.8 0 2-1.5 3.5-3.5 3.5H12"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    eye: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    flask: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M9 3h6M10 3v6L5 17c-.8 1.2.2 3 2 3h10c1.8 0 2.8-1.8 2-3L14 9V3"/>
        <line x1="7" y1="17" x2="10" y2="17" strokeOpacity=".5"/>
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M12 3L4 7v5c0 4.5 3.5 8.7 8 10 4.5-1.3 8-5.5 8-10V7L12 3z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    female: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <circle cx="12" cy="8" r="5"/>
        <line x1="12" y1="13" x2="12" y2="21"/>
        <line x1="9" y1="18" x2="15" y2="18"/>
      </svg>
    ),
    male: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <circle cx="10" cy="14" r="5"/>
        <line x1="14.5" y1="9.5" x2="21" y2="3"/>
        <polyline points="16 3 21 3 21 8"/>
      </svg>
    ),
    trophy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M8 21h8M12 17v4M7 4H5v3c0 2.5 2 4.5 5 5"/>
        <path d="M17 4h2v3c0 2.5-2 4.5-5 5"/>
        <path d="M7 4h10c0 5-2 9.5-5 9.5S7 9 7 4z"/>
      </svg>
    ),
    book: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="12" y2="11"/>
      </svg>
    ),
    clipboard: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        <rect x="8" y="2" width="8" height="4" rx="1"/>
        <line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/>
      </svg>
    ),
    exam: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="12" y2="17"/>
      </svg>
    ),
    notes: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/>
      </svg>
    ),
    evolve: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <line x1="12" y1="20" x2="12" y2="14"/>
        <path d="M12 14L6 8"/><path d="M12 14L18 8"/>
        <path d="M6 8L3 5"/><path d="M6 8L9 5"/>
        <path d="M18 8L15 5"/><path d="M18 8L21 5"/>
      </svg>
    ),
    taxonomy: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <circle cx="12" cy="4" r="2"/>
        <line x1="12" y1="6" x2="12" y2="9"/>
        <line x1="7" y1="9" x2="17" y2="9"/>
        <line x1="7" y1="9" x2="7" y2="12"/><line x1="17" y1="9" x2="17" y2="12"/>
        <circle cx="7" cy="14" r="2"/><circle cx="17" cy="14" r="2"/>
        <line x1="4" y1="16" x2="10" y2="16"/><line x1="14" y1="16" x2="20" y2="16"/>
        <line x1="5" y1="16" x2="5" y2="19"/><line x1="9" y1="16" x2="9" y2="19"/>
        <line x1="15" y1="16" x2="15" y2="19"/><line x1="19" y1="16" x2="19" y2="19"/>
      </svg>
    ),
    tissue: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={className}>
        <rect x="3" y="3" width="8" height="8" rx="1.5"/>
        <rect x="13" y="3" width="8" height="8" rx="1.5"/>
        <rect x="3" y="13" width="8" height="8" rx="1.5"/>
        <rect x="13" y="13" width="8" height="8" rx="1.5"/>
      </svg>
    ),
  };
  return p[name] ?? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="9"/>
    </svg>
  );
}

// ── Data ─────────────────────────────────────────────────────────────────────
type Mod = {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  ib: string; // icon bg class
  ic: string; // icon color class
  parts?: number;
};

const cellular: Mod[] = [
  { slug: "celula",       title: "Célula Animal",     icon: "cell",     ib: "bg-blue-500/12",    ic: "text-blue-400",    parts: 12, desc: "Núcleo, mitocondrias, retículo endoplasmático y organelas en 3D interactivo." },
  { slug: "planta",       title: "Célula Vegetal",    icon: "plant",    ib: "bg-blue-500/12",    ic: "text-blue-400",    parts: 11, desc: "Pared celular, cloroplastos y vacuola central. Comparala con la célula animal." },
  { slug: "adn",          title: "ADN y Genética",    icon: "dna",      ib: "bg-blue-500/12",    ic: "text-blue-400",    parts: 8,  desc: "Doble hélice del ADN, codones y replicación en 3D." },
  { slug: "herencia",     title: "Herencia Genética", icon: "genetics", ib: "bg-blue-500/12",    ic: "text-blue-400",    parts: 8,  desc: "Leyes de Mendel, cuadro de Punnett, dominancia y mutaciones." },
  { slug: "mitosis",      title: "Mitosis y Meiosis", icon: "division", ib: "bg-blue-500/12",    ic: "text-blue-400",    parts: 8,  desc: "Fases de la división celular: interfase, profase, metafase, anafase y telofase." },
];

const ecology: Mod[] = [
  { slug: "microbiologia", title: "Microbiología",  icon: "microbe", ib: "bg-emerald-500/12", ic: "text-emerald-400", parts: 8, desc: "Estructura bacteriana 3D: pared celular, nucleoide, flagelo y resistencia antibiótica." },
  { slug: "ecosistemas",   title: "Ecosistemas",    icon: "tree",    ib: "bg-emerald-500/12", ic: "text-emerald-400", parts: 8, desc: "Cuatro biomas en 3D: selva tropical, arrecife, desierto y Ártico." },
  { slug: "evolucion",     title: "Evolución",                 icon: "evolve",   ib: "bg-amber-500/12",  ic: "text-amber-400",  parts: 8, desc: "Selección natural, adaptación y árbol de la vida. Darwin y la teoría evolutiva." },
  { slug: "clasificacion", title: "Clasificación de Seres Vivos", icon: "taxonomy", ib: "bg-teal-500/12", ic: "text-teal-400",  parts: 8, desc: "Los 5 reinos, taxonomía linneana y árbol filogenético de la vida." },
  { slug: "tejidos",       title: "Tejidos",                   icon: "tissue",   ib: "bg-violet-500/12", ic: "text-violet-400", parts: 8, desc: "Tejido epitelial, conectivo, muscular y nervioso. Histología básica en 3D." },
];

const body: Mod[] = [
  { slug: "cuerpo-humano",        title: "Cuerpo Humano",            icon: "body",    ib: "bg-rose-500/12",   ic: "text-rose-400",   parts: 15, desc: "Vista completa del cuerpo con todos los sistemas en 3D." },
  { slug: "oseo",                 title: "Sistema Óseo",             icon: "bone",    ib: "bg-slate-400/12",  ic: "text-slate-400",  parts: 10, desc: "206 huesos en 3D: cráneo, columna vertebral, fémur y articulaciones." },
  { slug: "muscular",             title: "Sistema Muscular",         icon: "muscle",  ib: "bg-orange-500/12", ic: "text-orange-400", parts: 10, desc: "Más de 600 músculos. Sarcómero, actina, miosina y tendones." },
  { slug: "corazon",              title: "Corazón Humano",           icon: "heart",   ib: "bg-red-500/12",    ic: "text-red-400",    parts: 9,  desc: "Ventrículos, aurículas, válvulas y arterias coronarias." },
  { slug: "pulmones",             title: "Sistema Respiratorio",     icon: "lung",    ib: "bg-sky-500/12",    ic: "text-sky-400",    parts: 8,  desc: "Pulmones, bronquios, alvéolos y diafragma. Cómo respiramos en 3D." },
  { slug: "digestivo",            title: "Sistema Digestivo",        icon: "stomach", ib: "bg-amber-500/12",  ic: "text-amber-400",  parts: 8,  desc: "Recorrido del alimento: boca, estómago, intestinos e hígado." },
  { slug: "excretor",             title: "Sistema Excretor",         icon: "kidney",  ib: "bg-yellow-500/12", ic: "text-yellow-400", parts: 8,  desc: "Riñones, nefrona, vejiga y uretra. Filtración y formación de orina." },
  { slug: "sistema-nervioso",     title: "Sistema Nervioso",         icon: "neuron",  ib: "bg-violet-500/12", ic: "text-violet-400", parts: 9,  desc: "Neurona 3D con dendritas, axón, mielina y sinapsis." },
  { slug: "cerebro",              title: "Cerebro Humano",           icon: "brain",   ib: "bg-purple-500/12", ic: "text-purple-400", parts: 8,  desc: "Lóbulos cerebrales, cerebelo, tronco encefálico e hipocampo." },
  { slug: "sentidos",             title: "Órganos de los Sentidos",  icon: "eye",     ib: "bg-cyan-500/12",   ic: "text-cyan-400",   parts: 9,  desc: "Anatomía del ojo, oído, nariz, lengua y piel." },
  { slug: "endocrino",            title: "Sistema Endócrino",        icon: "flask",   ib: "bg-orange-400/12", ic: "text-orange-300", parts: 8,  desc: "Hipotálamo, hipófisis, tiroides, suprarrenales y gónadas." },
  { slug: "inmunologico",         title: "Sistema Inmunológico",     icon: "shield",  ib: "bg-teal-500/12",   ic: "text-teal-400",   parts: 9,  desc: "Linfocitos, anticuerpos, macrófagos, timo y bazo en 3D." },
  { slug: "reproductor",          title: "Reprod. Femenino",         icon: "female",  ib: "bg-pink-500/12",   ic: "text-pink-400",   parts: 8,  desc: "Ovarios, trompas de Falopio, útero, ciclo menstrual y fecundación." },
  { slug: "reproductor-masculino",title: "Reprod. Masculino",        icon: "male",    ib: "bg-indigo-500/12", ic: "text-indigo-400", parts: 8,  desc: "Testículos, epidídimo, conducto deferente, próstata y espermatozoide." },
];

type Tool = { slug: string; title: string; desc: string; icon: string; ib: string; ic: string; label: string };
const tools: Tool[] = [
  { slug: "quiz",         title: "Quiz 3D",         icon: "trophy",    ib: "bg-yellow-500/12", ic: "text-yellow-400", label: "Primaria y secundaria",  desc: "10 preguntas con explicación y puntaje final." },
  { slug: "glosario",     title: "Glosario",         icon: "book",      ib: "bg-slate-400/12",  ic: "text-slate-300",  label: "65+ términos",           desc: "Términos biológicos con explicación y PDF descargable." },
  { slug: "tareas",       title: "Banco de Tareas",  icon: "clipboard", ib: "bg-violet-500/12", ic: "text-violet-400", label: "24 tareas",              desc: "Tareas listas con actividades. Filtrá por nivel." },
  { slug: "evaluaciones", title: "Evaluaciones",     icon: "exam",      ib: "bg-amber-500/12",  ic: "text-amber-400",  label: "28 evaluaciones",        desc: "Opción múltiple, V/F, completar. PDF alumno y con respuestas." },
  { slug: "notas",        title: "Notas",            icon: "notes",     ib: "bg-emerald-500/12",ic: "text-emerald-400",label: "Herramienta docente",    desc: "Anotaciones con fecha, texto libre y exportación a PDF." },
];

// ── Card components ──────────────────────────────────────────────────────────
function ModCard({ m, i }: { m: Mod; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.04, duration: 0.35 }}
    >
      <Link href={`/${m.slug}`}>
        <div className="h-full bg-[#111827] border border-[#1e293b] hover:border-[#2d3f57] rounded-xl p-4 transition-all card-hover group cursor-pointer">
          <div className={`w-9 h-9 rounded-lg ${m.ib} ${m.ic} flex items-center justify-center mb-3 transition-transform group-hover:scale-105`}>
            <BioIcon name={m.icon} />
          </div>
          <h3 className="text-[13.5px] font-semibold text-slate-100 mb-1 leading-snug">{m.title}</h3>
          <p className="text-slate-500 text-[11.5px] leading-relaxed hidden sm:block line-clamp-2">{m.desc}</p>
          {m.parts && (
            <div className="mt-2.5 flex items-center gap-1">
              <span className="text-[10.5px] text-slate-600 font-medium">{m.parts} estructuras</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

function ToolCard({ t, i }: { t: Tool; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.06, duration: 0.35 }}
    >
      <Link href={`/${t.slug}`}>
        <div className="h-full bg-[#111827] border border-[#1e293b] hover:border-[#2d3f57] rounded-xl p-4 transition-all card-hover group cursor-pointer">
          <div className="flex items-start gap-3">
            <div className={`w-9 h-9 rounded-lg ${t.ib} ${t.ic} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105`}>
              <BioIcon name={t.icon} />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <h3 className="text-[13.5px] font-semibold text-slate-100 leading-snug">{t.title}</h3>
              </div>
              <p className="text-[10.5px] text-slate-600 font-medium mb-1">{t.label}</p>
              <p className="text-slate-500 text-[11.5px] leading-relaxed hidden sm:block">{t.desc}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function SectionHeader({ id, label, count, accent }: { id: string; label: string; count: number; accent: string }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-5 pt-2">
      <div className={`w-0.5 h-5 rounded-full ${accent}`} />
      <h2 className="text-[15px] font-semibold text-slate-200">{label}</h2>
      <span className="text-[11px] text-slate-600 font-medium">{count} módulos</span>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-bio-dark">

      {/* Hero */}
      <section className="pt-10 pb-9 md:pt-16 md:pb-12 px-4 border-b border-white/[0.06]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-[34px] md:text-[46px] font-bold text-white leading-[1.05] tracking-tight mb-3">
            Bio<span className="text-blue-400">Aula</span>3D
          </h1>

          <p className="text-slate-400 text-[15px] md:text-[16px] max-w-xl leading-relaxed mb-6">
            Modelos 3D interactivos de células, órganos, ADN y sistemas del cuerpo humano.
            Tocá cada estructura para conocer su función. Para primaria y secundaria.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => document.getElementById("celular")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[14px] font-semibold rounded-lg transition-colors"
            >
              Explorar modelos
            </button>
            <Link
              href="/quiz"
              className="px-5 py-2.5 bg-transparent hover:bg-white/5 border border-white/15 hover:border-white/25 text-slate-300 text-[14px] font-medium rounded-lg transition-all"
            >
              Comenzar quiz
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Modules */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-4 space-y-10">

        {/* Célula y Genética */}
        <section>
          <SectionHeader id="celular" label="Célula y Genética" count={cellular.length} accent="bg-blue-500" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {cellular.map((m, i) => <ModCard key={m.slug} m={m} i={i} />)}
          </div>
        </section>

        {/* Microbiología y Ecología */}
        <section>
          <SectionHeader id="ecologia" label="Microbiología y Ecología" count={ecology.length} accent="bg-emerald-500" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {ecology.map((m, i) => <ModCard key={m.slug} m={m} i={i} />)}
          </div>
        </section>

        {/* Cuerpo Humano */}
        <section>
          <SectionHeader id="cuerpo" label="Cuerpo Humano" count={body.length} accent="bg-rose-500" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {body.map((m, i) => <ModCard key={m.slug} m={m} i={i} />)}
          </div>
        </section>
      </div>

      {/* Tools */}
      <section id="herramientas" className="max-w-6xl mx-auto px-4 pt-6 pb-20">
        <div className="flex items-center gap-3 mb-5 pt-2">
          <div className="w-0.5 h-5 rounded-full bg-amber-500" />
          <h2 className="text-[15px] font-semibold text-slate-200">Herramientas educativas</h2>
          <span className="text-[10.5px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Docentes</span>
        </div>
        <p className="text-slate-600 text-[12px] mb-5">Quiz, glosario, tareas, evaluaciones y notas con exportación a PDF</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tools.map((t, i) => <ToolCard key={t.slug} t={t} i={i} />)}
        </div>
      </section>
    </div>
  );
}
