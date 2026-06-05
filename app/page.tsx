"use client";
import Link from "next/link";
import {
  Dna, Leaf, FlaskConical, GitBranch, Layers,
  Microscope, Globe, TrendingUp, TreePine, Grid2x2,
  User, Bone, Dumbbell, Heart, Wind, Utensils, Droplets,
  Zap, Brain, Eye, Activity, Shield, Baby, TestTube,
  BookOpen, BookMarked, ClipboardList, FileCheck, StickyNote,
  ArrowRight,
} from "lucide-react";

type Mod = {
  slug: string;
  title: string;
  desc: string;
  icon: React.ElementType;
};
type Tool = {
  slug: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  label?: string;
};

const cellular: Mod[] = [
  { slug: "celula",    title: "Célula Animal",     desc: "Núcleo, mitocondrias y organelas", icon: FlaskConical },
  { slug: "planta",    title: "Célula Vegetal",    desc: "Cloroplastos, pared y vacuola",    icon: Leaf },
  { slug: "adn",       title: "ADN y Genética",    desc: "Doble hélice y replicación",       icon: Dna },
  { slug: "herencia",  title: "Herencia Genética", desc: "Leyes de Mendel y Punnett",        icon: GitBranch },
  { slug: "mitosis",   title: "Mitosis y Meiosis", desc: "Fases de la división celular",     icon: Layers },
];

const ecology: Mod[] = [
  { slug: "microbiologia", title: "Microbiología",                desc: "Bacterias, virus y resistencia",  icon: Microscope },
  { slug: "ecosistemas",   title: "Ecosistemas",                  desc: "Cuatro biomas en 3D",             icon: TreePine },
  { slug: "evolucion",     title: "Evolución",                    desc: "Caminata de la evolución humana", icon: TrendingUp },
  { slug: "clasificacion", title: "Clasificación de Seres Vivos", desc: "Reinos y árbol filogenético",     icon: Globe },
  { slug: "tejidos",       title: "Tejidos",                      desc: "Epitelial, conectivo y muscular", icon: Grid2x2 },
];

const body: Mod[] = [
  { slug: "cuerpo-humano",         title: "Cuerpo Humano",           desc: "Todos los sistemas integrados",    icon: User },
  { slug: "oseo",                  title: "Sistema Óseo",            desc: "206 huesos y articulaciones",      icon: Bone },
  { slug: "muscular",              title: "Sistema Muscular",        desc: "Sarcómero, actina y miosina",      icon: Dumbbell },
  { slug: "corazon",               title: "Corazón",                 desc: "Ventrículos, aurículas y válvulas",icon: Heart },
  { slug: "pulmones",              title: "Sistema Respiratorio",    desc: "Pulmones, bronquios y alvéolos",   icon: Wind },
  { slug: "digestivo",             title: "Sistema Digestivo",       desc: "Boca, estómago e intestinos",      icon: Utensils },
  { slug: "excretor",              title: "Sistema Excretor",        desc: "Riñones y nefrona",                icon: Droplets },
  { slug: "sistema-nervioso",      title: "Sistema Nervioso",        desc: "Neurona 3D con axón y sinapsis",   icon: Zap },
  { slug: "cerebro",               title: "Cerebro",                 desc: "Lóbulos, cerebelo e hipocampo",    icon: Brain },
  { slug: "sentidos",              title: "Órganos de los Sentidos", desc: "Ojo, oído, nariz, lengua y piel",  icon: Eye },
  { slug: "endocrino",             title: "Sistema Endócrino",       desc: "Hipotálamo, hipófisis y tiroides", icon: Activity },
  { slug: "inmunologico",          title: "Sistema Inmunológico",    desc: "Linfocitos y anticuerpos",         icon: Shield },
  { slug: "reproductor",           title: "Reproductor Femenino",    desc: "Ovarios, útero y ciclo menstrual", icon: Baby },
  { slug: "reproductor-masculino", title: "Reproductor Masculino",   desc: "Testículos y espermatozoide",      icon: TestTube },
];

const tools: Tool[] = [
  { slug: "quiz",         title: "Quiz de Biología", desc: "80 preguntas con explicación detallada",    icon: BookOpen,     label: "80 preguntas" },
  { slug: "glosario",     title: "Glosario",          desc: "65+ términos biológicos con exportación PDF", icon: BookMarked,   label: "65+ términos" },
  { slug: "tareas",       title: "Banco de Tareas",   desc: "24 tareas organizadas por nivel educativo", icon: ClipboardList, label: "24 tareas" },
  { slug: "evaluaciones", title: "Evaluaciones",      desc: "31 evaluaciones con clave docente incluida", icon: FileCheck,    label: "31 eval." },
  { slug: "notas",        title: "Notas",             desc: "Anotaciones personales con exportación PDF", icon: StickyNote,   label: "PDF" },
];

export default function Home() {
  return (
    <div style={{ background: "#0b1120", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden border-b border-white/[0.06]">
        {/* Dot grid background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Radial fade over dots */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 0%, #0b1120 80%)",
          }}
        />
        {/* Green glow accent top-left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)" }}
        />
        {/* Blue glow top-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 right-0 w-96 h-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 pt-12 pb-10">
          {/* Stat bar */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">Contenidos</span>
            <span className="w-px h-3 bg-white/10" />
            <StatPill value="24" label="módulos" />
            <span className="text-white/20">·</span>
            <StatPill value="80" label="preguntas" />
            <span className="text-white/20">·</span>
            <StatPill value="65+" label="términos" />
          </div>

          <h1
            className="text-[36px] md:text-[60px] font-extrabold text-white leading-[1.05] mb-4 max-w-xl"
            style={{ fontFamily: "var(--font-display, inherit)", letterSpacing: "-0.03em" }}
          >
            Biología<br />
            <span style={{ color: "#22c55e" }}>en tres</span>{" "}
            <span style={{ color: "#38bdf8" }}>dimensiones</span>
          </h1>

          <p className="text-slate-400 text-[14px] md:text-[15px] max-w-sm leading-relaxed mb-8">
            Modelos 3D interactivos de células, órganos y sistemas del cuerpo humano.
            Para primaria y secundaria.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => document.getElementById("celular")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white rounded-lg transition-all hover:brightness-110 active:scale-[0.98]"
              style={{ background: "linear-gradient(135deg, #16a34a, #15803d)" }}
            >
              Explorar modelos
              <ArrowRight size={13} />
            </button>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-slate-300 rounded-lg border border-white/[0.12] hover:border-white/[0.22] hover:bg-white/[0.04] transition-all"
            >
              Comenzar quiz
            </Link>
          </div>
        </div>
      </div>

      {/* ── Módulos ── */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-4 space-y-14">

        {/* Célula y Genética */}
        <section id="celular">
          <SectionHeader
            label="Célula y Genética"
            count={cellular.length}
            accent="#22c55e"
            description="Estructuras celulares y mecanismos de herencia"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
            {cellular.map(m => (
              <ModCard key={m.slug} m={m} accent="#22c55e" hoverBg="#0d1a12" />
            ))}
          </div>
        </section>

        {/* Microbiología y Ecología */}
        <section id="ecologia">
          <SectionHeader
            label="Microbiología y Ecología"
            count={ecology.length}
            accent="#10b981"
            description="Vida microscópica y ecosistemas del planeta"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
            {ecology.map(m => (
              <ModCard key={m.slug} m={m} accent="#10b981" hoverBg="#0d1a16" />
            ))}
          </div>
        </section>

        {/* Cuerpo Humano — wider grid, compact cards */}
        <section id="cuerpo">
          <SectionHeader
            label="Cuerpo Humano"
            count={body.length}
            accent="#3b82f6"
            description="Sistemas, órganos y anatomía en modelos 3D interactivos"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
            {body.map(m => (
              <ModCard key={m.slug} m={m} accent="#3b82f6" hoverBg="#0d1221" compact />
            ))}
          </div>
        </section>

      </div>

      {/* ── Herramientas — horizontal list layout ── */}
      <section id="herramientas" className="max-w-6xl mx-auto px-4 pt-4 pb-20">
        <SectionHeader
          label="Herramientas educativas"
          count={tools.length}
          accent="#a78bfa"
          description="Recursos para estudiantes y docentes"
        />
        <div className="rounded-2xl border border-white/[0.06] overflow-hidden divide-y divide-white/[0.04]">
          {tools.map(t => (
            <ToolRow key={t.slug} t={t} />
          ))}
        </div>
      </section>

    </div>
  );
}

/* ── Stat pill ── */
function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <span className="flex items-baseline gap-1">
      <span className="text-[13px] font-bold text-slate-200">{value}</span>
      <span className="text-[11px] text-slate-500">{label}</span>
    </span>
  );
}

/* ── Section header ── */
function SectionHeader({
  label,
  count,
  accent,
  description,
}: {
  label: string;
  count: number;
  accent: string;
  description: string;
}) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3 mb-1">
        <div className="w-[3px] h-5 rounded-full flex-shrink-0" style={{ background: accent }} />
        <h2
          className="text-[17px] font-bold text-slate-100 tracking-tight"
          style={{ fontFamily: "var(--font-display, inherit)", letterSpacing: "-0.02em" }}
        >
          {label}
        </h2>
        <span
          className="text-[11px] font-medium px-2 py-0.5 rounded-full"
          style={{ color: accent, background: `${accent}18` }}
        >
          {count} módulos
        </span>
      </div>
      <p className="text-[12px] text-slate-500 ml-[18px]">{description}</p>
    </div>
  );
}

/* ── Module card ── */
function ModCard({
  m,
  accent,
  hoverBg,
  compact = false,
}: {
  m: Mod;
  accent: string;
  hoverBg: string;
  compact?: boolean;
}) {
  const Icon = m.icon;
  return (
    <Link href={`/${m.slug}`} className="block group">
      <div
        className={`h-full transition-colors cursor-pointer ${compact ? "px-3 py-3" : "px-4 py-4"}`}
        style={{ background: "#0d1524" }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = hoverBg; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#0d1524"; }}
      >
        {/* Accent top-border */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, ${accent}14, transparent)` }}
        />
        <div className="relative flex items-start gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${accent}15` }}
          >
            <Icon size={16} style={{ color: accent }} />
          </div>
          <div className="min-w-0 pt-0.5">
            <div
              className={`font-semibold text-slate-100 group-hover:text-white transition-colors leading-snug ${compact ? "text-[12px]" : "text-[13px]"}`}
            >
              {m.title}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{m.desc}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Tool row (horizontal list layout) ── */
function ToolRow({ t }: { t: Tool }) {
  const Icon = t.icon;
  return (
    <Link href={`/${t.slug}`} className="block group">
      <div
        className="flex items-center gap-4 px-5 py-4 transition-colors cursor-pointer"
        style={{ background: "#0d1524" }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#120d1f"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#0d1524"; }}
      >
        {/* Large icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: "#a78bfa18" }}
        >
          <Icon size={19} style={{ color: "#a78bfa" }} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-semibold text-slate-100 group-hover:text-white transition-colors leading-tight">
            {t.title}
          </div>
          <div className="text-[12px] text-slate-500 mt-0.5">{t.desc}</div>
        </div>

        {/* Right: label + arrow */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {t.label && (
            <span className="hidden sm:block text-[11px] font-medium px-2 py-0.5 rounded-full text-violet-400 bg-violet-400/10">
              {t.label}
            </span>
          )}
          <ArrowRight
            size={15}
            className="text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all"
          />
        </div>
      </div>
    </Link>
  );
}
