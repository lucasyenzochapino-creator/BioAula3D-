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

type Mod = { slug: string; title: string; desc: string; icon: React.ElementType };
type Tool = { slug: string; title: string; desc: string; icon: React.ElementType; label?: string };

const cellular: Mod[] = [
  { slug: "celula",   title: "Célula Animal",     desc: "Núcleo, mitocondrias y organelas en 3D", icon: FlaskConical },
  { slug: "planta",   title: "Célula Vegetal",    desc: "Cloroplastos, pared y vacuola",          icon: Leaf },
  { slug: "adn",      title: "ADN y Genética",    desc: "Doble hélice y replicación",             icon: Dna },
  { slug: "herencia", title: "Herencia Genética", desc: "Leyes de Mendel y Punnett",              icon: GitBranch },
  { slug: "mitosis",  title: "Mitosis y Meiosis", desc: "Fases de la división celular",           icon: Layers },
];

const ecology: Mod[] = [
  { slug: "microbiologia", title: "Microbiología",                desc: "Bacterias, virus y resistencia",  icon: Microscope },
  { slug: "ecosistemas",   title: "Ecosistemas",                  desc: "Cuatro biomas en 3D",             icon: TreePine },
  { slug: "evolucion",     title: "Evolución",                    desc: "Caminata de la evolución humana", icon: TrendingUp },
  { slug: "clasificacion", title: "Clasificación de Seres Vivos", desc: "Reinos y árbol filogenético",     icon: Globe },
  { slug: "tejidos",       title: "Tejidos",                      desc: "Epitelial, conectivo y muscular", icon: Grid2x2 },
];

/* Body grouped by subsystem */
const bodyFeatured: Mod = { slug: "cuerpo-humano", title: "Cuerpo Humano", desc: "Vista integrada de todos los sistemas del organismo", icon: User };

const bodyGroups: { label: string; mods: Mod[] }[] = [
  {
    label: "Estructura y movimiento",
    mods: [
      { slug: "oseo",     title: "Sistema Óseo",      desc: "206 huesos y articulaciones", icon: Bone },
      { slug: "muscular", title: "Sistema Muscular",   desc: "Sarcómero, actina y miosina", icon: Dumbbell },
    ],
  },
  {
    label: "Sistemas vitales",
    mods: [
      { slug: "corazon",   title: "Corazón",              desc: "Ventrículos, aurículas y válvulas", icon: Heart },
      { slug: "pulmones",  title: "Sistema Respiratorio", desc: "Pulmones, bronquios y alvéolos",    icon: Wind },
      { slug: "digestivo", title: "Sistema Digestivo",    desc: "Boca, estómago e intestinos",       icon: Utensils },
      { slug: "excretor",  title: "Sistema Excretor",     desc: "Riñones y nefrona",                 icon: Droplets },
    ],
  },
  {
    label: "Sistema nervioso",
    mods: [
      { slug: "sistema-nervioso", title: "Sistema Nervioso", desc: "Neurona 3D con axón y sinapsis",  icon: Zap },
      { slug: "cerebro",          title: "Cerebro",          desc: "Lóbulos, cerebelo e hipocampo",   icon: Brain },
      { slug: "sentidos",         title: "Órganos Sensoriales", desc: "Ojo, oído, nariz, lengua y piel", icon: Eye },
    ],
  },
  {
    label: "Regulación",
    mods: [
      { slug: "endocrino",    title: "Sistema Endócrino",   desc: "Hipotálamo, hipófisis y tiroides", icon: Activity },
      { slug: "inmunologico", title: "Inmunología",         desc: "Linfocitos y anticuerpos",          icon: Shield },
    ],
  },
  {
    label: "Reproducción",
    mods: [
      { slug: "reproductor",           title: "Reproductor Femenino",  desc: "Ovarios, útero y ciclo menstrual", icon: Baby },
      { slug: "reproductor-masculino", title: "Reproductor Masculino", desc: "Testículos y espermatozoide",      icon: TestTube },
    ],
  },
];

const tools: Tool[] = [
  { slug: "quiz",         title: "Quiz de Biología", desc: "80 preguntas con explicación detallada",      icon: BookOpen,     label: "80 preguntas" },
  { slug: "glosario",     title: "Glosario",          desc: "65+ términos biológicos con exportación PDF", icon: BookMarked,   label: "65+ términos" },
  { slug: "tareas",       title: "Banco de Tareas",   desc: "24 tareas organizadas por nivel educativo",  icon: ClipboardList, label: "24 tareas" },
  { slug: "evaluaciones", title: "Evaluaciones",      desc: "31 evaluaciones con clave docente incluida", icon: FileCheck,    label: "31 eval." },
  { slug: "notas",        title: "Notas",             desc: "Anotaciones personales con exportación PDF", icon: StickyNote,   label: "PDF" },
];

/* ─────────────────────────────────── PAGE ─────────────────────────────────── */
export default function Home() {
  return (
    <div style={{ background: "#080d1b", minHeight: "100vh" }}>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden border-b border-white/[0.05]" style={{ background: "#080d1b" }}>

        {/* Cell cross-section illustration — biology-specific, not generic tech */}
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[380px] h-[380px] hidden lg:block pointer-events-none select-none">
          <div className="absolute inset-0 rounded-full border border-green-500/[0.08]" />
          <div className="absolute inset-5 rounded-full border border-green-500/[0.06]" style={{ borderStyle: "dashed" }} />
          <div className="absolute inset-14 rounded-full" style={{ background: "radial-gradient(circle, rgba(34,197,94,0.04) 0%, transparent 70%)" }} />
          <div className="absolute inset-[90px] rounded-full border border-sky-400/[0.12]" />
          <div className="absolute inset-[110px] rounded-full" style={{ background: "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 100%)" }} />
          <div className="absolute inset-[148px] rounded-full border border-sky-400/[0.08]" />
          {/* Organelle dots */}
          <div className="absolute w-4 h-2.5 rounded-full border border-green-500/[0.18]" style={{ top: "22%", left: "12%" }} />
          <div className="absolute w-5 h-2.5 rounded-full border border-green-500/[0.14]" style={{ top: "62%", left: "16%" }} />
          <div className="absolute w-4 h-2.5 rounded-full border border-green-500/[0.18]" style={{ top: "28%", right: "22%" }} />
          <div className="absolute w-5 h-3 rounded-full border border-green-500/[0.14]" style={{ bottom: "22%", right: "14%" }} />
          <div className="absolute w-2 h-2 rounded-full" style={{ background: "rgba(34,197,94,0.12)", top: "45%", left: "10%" }} />
          <div className="absolute w-2 h-2 rounded-full" style={{ background: "rgba(34,197,94,0.10)", bottom: "40%", right: "10%" }} />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 pt-14 pb-12">
          <div className="max-w-xl">
            <p className="text-[11px] font-mono tracking-[0.2em] uppercase mb-5" style={{ color: "rgba(34,197,94,0.7)" }}>
              Biología · Modelos 3D · Interactivo
            </p>
            <h1
              className="text-[44px] md:text-[64px] font-black text-white leading-[0.95] mb-5"
              style={{ letterSpacing: "-0.04em", fontFamily: "var(--font-display, inherit)" }}
            >
              Explora<br />
              la vida<br />
              <span style={{ color: "#4ade80" }}>desde adentro</span>
            </h1>
            <p className="text-slate-400 text-[14px] leading-relaxed mb-8 max-w-sm">
              24 módulos 3D de células, órganos y sistemas del cuerpo humano.
              Para primaria y secundaria.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => document.getElementById("celular")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white rounded-lg transition-all hover:brightness-110"
                style={{ background: "#16a34a" }}
              >
                Explorar módulos
                <ArrowRight size={13} />
              </button>
              <Link
                href="/quiz"
                className="inline-flex items-center px-5 py-2.5 text-[13px] font-medium text-slate-300 rounded-lg border border-white/[0.1] hover:border-white/[0.2] hover:bg-white/[0.04] transition-all"
              >
                Comenzar quiz →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Módulos ── */}
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-4 space-y-16">

        {/* Célula y Genética — bento: featured large + 4 small */}
        <section id="celular">
          <SectionTag label="Célula y Genética" accent="#4ade80" />
          <BentoGrid mods={cellular} accent="#4ade80" hoverBg="rgba(74,222,128,0.06)" />
        </section>

        {/* Microbiología y Ecología — bento: featured large + 4 small */}
        <section id="ecologia">
          <SectionTag label="Microbiología y Ecología" accent="#34d399" />
          <BentoGrid mods={ecology} accent="#34d399" hoverBg="rgba(52,211,153,0.06)" />
        </section>

        {/* Cuerpo Humano — featured + grouped subsystems */}
        <section id="cuerpo">
          <SectionTag label="Cuerpo Humano" accent="#60a5fa" />

          {/* Featured: Cuerpo Humano card */}
          <Link href={`/${bodyFeatured.slug}`} className="block mb-3 group">
            <div
              className="rounded-2xl p-6 flex items-center gap-5 relative overflow-hidden transition-all"
              style={{ background: "rgba(96,165,250,0.07)", border: "1px solid rgba(96,165,250,0.14)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(96,165,250,0.11)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(96,165,250,0.07)"; }}
            >
              {/* Watermark icon */}
              <div className="absolute -right-6 -bottom-6 opacity-[0.04] pointer-events-none">
                <User size={120} />
              </div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(96,165,250,0.15)" }}>
                <User size={22} style={{ color: "#60a5fa" }} />
              </div>
              <div>
                <div className="text-[16px] font-bold text-white mb-0.5">{bodyFeatured.title}</div>
                <div className="text-[13px] text-slate-400">{bodyFeatured.desc}</div>
              </div>
              <ArrowRight size={16} className="ml-auto flex-shrink-0 text-slate-600 group-hover:text-slate-400 transition-colors" />
            </div>
          </Link>

          {/* Grouped subsystems */}
          <div className="space-y-4">
            {bodyGroups.map(group => (
              <div key={group.label}>
                <p className="text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-600 mb-2 pl-1">
                  {group.label}
                </p>
                <div className={`grid gap-px rounded-xl overflow-hidden border border-white/[0.05] bg-white/[0.04] ${
                  group.mods.length === 2 ? "grid-cols-2" :
                  group.mods.length === 3 ? "grid-cols-3" :
                  "grid-cols-2 sm:grid-cols-4"
                }`}>
                  {group.mods.map(m => (
                    <CompactCard key={m.slug} m={m} accent="#60a5fa" hoverBg="rgba(96,165,250,0.06)" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Herramientas — horizontal rows ── */}
      <section id="herramientas" className="max-w-6xl mx-auto px-4 pt-4 pb-10">
        <SectionTag label="Herramientas educativas" accent="#a78bfa" />
        <div className="rounded-2xl border border-white/[0.06] overflow-hidden divide-y divide-white/[0.04]">
          {tools.map(t => <ToolRow key={t.slug} t={t} />)}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="max-w-6xl mx-auto px-4 pb-8 pt-6 border-t border-white/[0.05]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-slate-600">
            © {new Date().getFullYear()} BioAula3D — Biología Interactiva
          </p>
          <div className="flex items-center gap-5 text-[12px] text-slate-600">
            <Link href="/terminos" className="hover:text-slate-400 transition-colors">
              Términos de uso
            </Link>
            <Link href="/privacidad" className="hover:text-slate-400 transition-colors">
              Privacidad
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* ─────────────────────── SECTION TAG ─────────────────────── */
function SectionTag({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
      <h2 className="text-[13px] font-semibold tracking-tight" style={{ color: accent }}>
        {label}
      </h2>
    </div>
  );
}

/* ─────────────────────── BENTO GRID ─────────────────────── */
function BentoGrid({ mods, accent, hoverBg }: { mods: Mod[]; accent: string; hoverBg: string }) {
  const [featured, ...rest] = mods;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
      {/* Featured card — 2 cols wide */}
      <Link href={`/${featured.slug}`} className="col-span-2 block group">
        <FeaturedCard m={featured} accent={accent} hoverBg={hoverBg} />
      </Link>
      {/* Remaining cards */}
      {rest.map(m => (
        <SmallCard key={m.slug} m={m} accent={accent} hoverBg={hoverBg} />
      ))}
    </div>
  );
}

/* ─────────────────────── FEATURED CARD ─────────────────────── */
function FeaturedCard({ m, accent, hoverBg }: { m: Mod; accent: string; hoverBg: string }) {
  const Icon = m.icon;
  return (
    <div
      className="h-full min-h-[110px] rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden transition-all"
      style={{ background: hoverBg, border: `1px solid ${accent}20` }}
      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = hoverBg.replace("0.06", "0.1"); }}
      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = hoverBg; }}
    >
      {/* Large watermark */}
      <div className="absolute -right-4 -bottom-4 opacity-[0.06] pointer-events-none">
        <Icon size={90} />
      </div>
      <div>
        <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${accent}20` }}>
          <Icon size={17} style={{ color: accent }} />
        </div>
        <div className="text-[15px] font-bold text-white mb-1 relative">{m.title}</div>
        <div className="text-[12px] text-slate-400 relative leading-snug">{m.desc}</div>
      </div>
      <div className="flex items-center gap-1 mt-4 relative" style={{ color: accent }}>
        <span className="text-[11px] font-semibold">Ver modelo 3D</span>
        <ArrowRight size={11} />
      </div>
    </div>
  );
}

/* ─────────────────────── SMALL CARD ─────────────────────── */
function SmallCard({ m, accent, hoverBg }: { m: Mod; accent: string; hoverBg: string }) {
  const Icon = m.icon;
  return (
    <Link href={`/${m.slug}`} className="block group">
      <div
        className="h-full rounded-2xl p-4 transition-all"
        style={{ background: "#0d1524", border: "1px solid rgba(255,255,255,0.05)" }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = hoverBg; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#0d1524"; }}
      >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2.5" style={{ background: `${accent}15` }}>
          <Icon size={15} style={{ color: accent }} />
        </div>
        <div className="text-[12px] font-semibold text-slate-100 group-hover:text-white leading-snug mb-1">{m.title}</div>
        <div className="text-[11px] text-slate-600 leading-snug">{m.desc}</div>
      </div>
    </Link>
  );
}

/* ─────────────────────── COMPACT CARD (body groups) ─────────────────────── */
function CompactCard({ m, accent, hoverBg }: { m: Mod; accent: string; hoverBg: string }) {
  const Icon = m.icon;
  return (
    <Link href={`/${m.slug}`} className="block group">
      <div
        className="h-full px-3.5 py-3 transition-colors"
        style={{ background: "#0c1220" }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = hoverBg; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#0c1220"; }}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${accent}12` }}>
            <Icon size={13} style={{ color: accent }} />
          </div>
          <div className="min-w-0">
            <div className="text-[12px] font-semibold text-slate-200 group-hover:text-white leading-tight truncate">{m.title}</div>
            <div className="text-[10px] text-slate-600 leading-tight truncate">{m.desc}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────── TOOL ROW ─────────────────────── */
function ToolRow({ t }: { t: Tool }) {
  const Icon = t.icon;
  return (
    <Link href={`/${t.slug}`} className="block group">
      <div
        className="flex items-center gap-4 px-5 py-4 transition-colors"
        style={{ background: "#0d1524" }}
        onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "#110d22"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "#0d1524"; }}
      >
        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#a78bfa18" }}>
          <Icon size={17} style={{ color: "#a78bfa" }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-semibold text-slate-100 group-hover:text-white transition-colors">{t.title}</div>
          <div className="text-[12px] text-slate-500 mt-0.5">{t.desc}</div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {t.label && (
            <span className="hidden sm:block text-[10px] font-semibold px-2 py-0.5 rounded-full text-violet-400 bg-violet-400/10 tracking-wide">
              {t.label}
            </span>
          )}
          <ArrowRight size={14} className="text-slate-700 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </Link>
  );
}
