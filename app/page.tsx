"use client";
import Link from "next/link";
import {
  Dna, Leaf, FlaskConical, GitBranch, Layers,
  Microscope, Globe, TrendingUp, TreePine, Grid2x2,
  User, Bone, Dumbbell, Heart, Wind, Utensils, Droplets,
  Zap, Brain, Eye, Activity, Shield, Baby, TestTube,
  BookOpen, BookMarked, ClipboardList, FileCheck, StickyNote,
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
  { slug: "quiz",         title: "Quiz de Biología", desc: "80 preguntas con explicación",     icon: BookOpen },
  { slug: "glosario",     title: "Glosario",          desc: "65+ términos biológicos con PDF",  icon: BookMarked },
  { slug: "tareas",       title: "Banco de Tareas",   desc: "24 tareas por nivel",              icon: ClipboardList },
  { slug: "evaluaciones", title: "Evaluaciones",      desc: "31 evaluaciones con clave docente",icon: FileCheck },
  { slug: "notas",        title: "Notas",             desc: "Anotaciones con exportación PDF",  icon: StickyNote },
];

const SECTION_COLOR: Record<string, string> = {
  celular:    "#22c55e",
  ecologia:   "#10b981",
  cuerpo:     "#3b82f6",
};

export default function Home() {
  return (
    <div style={{ background: "#0b1120", minHeight: "100vh" }}>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-8 border-b border-white/[0.06]">
        <h1
          className="text-[32px] md:text-[44px] font-extrabold text-white leading-tight mb-2"
          style={{ letterSpacing: "-0.025em" }}
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
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-4 space-y-12">

        <section id="celular">
          <SectionHeader label="Célula y Genética" accent={SECTION_COLOR.celular} />
          <ModGrid mods={cellular} accent={SECTION_COLOR.celular} cols="lg:grid-cols-3" />
        </section>

        <section id="ecologia">
          <SectionHeader label="Microbiología y Ecología" accent={SECTION_COLOR.ecologia} />
          <ModGrid mods={ecology} accent={SECTION_COLOR.ecologia} cols="lg:grid-cols-3" />
        </section>

        <section id="cuerpo">
          <SectionHeader label="Cuerpo Humano" accent={SECTION_COLOR.cuerpo} />
          <ModGrid mods={body} accent={SECTION_COLOR.cuerpo} cols="lg:grid-cols-4" />
        </section>
      </div>

      {/* Herramientas */}
      <section id="herramientas" className="max-w-6xl mx-auto px-4 pt-4 pb-20">
        <SectionHeader label="Herramientas educativas" accent="#a78bfa" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-xl overflow-hidden border border-white/[0.05]">
          {tools.map(t => (
            <ToolCard key={t.slug} t={t} />
          ))}
        </div>
      </section>

    </div>
  );
}

function SectionHeader({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="w-1 h-5 rounded-full flex-shrink-0" style={{ background: accent }} />
      <h2 className="text-[15px] font-semibold text-slate-200 tracking-tight">{label}</h2>
    </div>
  );
}

function ModGrid({ mods, accent, cols }: { mods: Mod[]; accent: string; cols: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-px bg-white/[0.05] rounded-xl overflow-hidden border border-white/[0.05]`}>
      {mods.map(m => <ModCard key={m.slug} m={m} accent={accent} />)}
    </div>
  );
}

function ModCard({ m, accent }: { m: Mod; accent: string }) {
  const Icon = m.icon;
  return (
    <Link href={`/${m.slug}`} className="block">
      <div className="bg-[#0d1524] hover:bg-[#101c2e] px-4 py-4 h-full transition-colors cursor-pointer group">
        <div className="flex items-start gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-opacity"
            style={{ background: `${accent}18` }}
          >
            <Icon size={15} style={{ color: accent }} />
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-semibold text-slate-100 group-hover:text-white transition-colors leading-snug">
              {m.title}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{m.desc}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ToolCard({ t }: { t: Tool }) {
  const Icon = t.icon;
  return (
    <Link href={`/${t.slug}`} className="block">
      <div className="bg-[#0d1524] hover:bg-[#101c2e] px-4 py-4 h-full transition-colors cursor-pointer group flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#a78bfa18" }}>
          <Icon size={15} style={{ color: "#a78bfa" }} />
        </div>
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-slate-100 group-hover:text-white transition-colors">{t.title}</div>
          <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{t.desc}</div>
        </div>
      </div>
    </Link>
  );
}
