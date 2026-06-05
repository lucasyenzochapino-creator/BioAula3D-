"use client";
import Link from "next/link";

type Mod = { slug: string; title: string; desc: string };
type Tool = { slug: string; title: string; desc: string };

const cellular: Mod[] = [
  { slug: "celula",    title: "Célula Animal",             desc: "Núcleo, mitocondrias y organelas" },
  { slug: "planta",    title: "Célula Vegetal",            desc: "Cloroplastos, pared y vacuola" },
  { slug: "adn",       title: "ADN y Genética",            desc: "Doble hélice y replicación" },
  { slug: "herencia",  title: "Herencia Genética",         desc: "Leyes de Mendel y Punnett" },
  { slug: "mitosis",   title: "Mitosis y Meiosis",         desc: "Fases de la división celular" },
];

const ecology: Mod[] = [
  { slug: "microbiologia", title: "Microbiología",                desc: "Bacterias, virus y resistencia" },
  { slug: "ecosistemas",   title: "Ecosistemas",                  desc: "Cuatro biomas en 3D" },
  { slug: "evolucion",     title: "Evolución",                    desc: "Caminata de la evolución humana" },
  { slug: "clasificacion", title: "Clasificación de Seres Vivos", desc: "Reinos y árbol filogenético" },
  { slug: "tejidos",       title: "Tejidos",                      desc: "Epitelial, conectivo y muscular" },
];

const body: Mod[] = [
  { slug: "cuerpo-humano",         title: "Cuerpo Humano",            desc: "Todos los sistemas integrados" },
  { slug: "oseo",                  title: "Sistema Óseo",             desc: "206 huesos y articulaciones" },
  { slug: "muscular",              title: "Sistema Muscular",         desc: "Sarcómero, actina y miosina" },
  { slug: "corazon",               title: "Corazón",                  desc: "Ventrículos, aurículas y válvulas" },
  { slug: "pulmones",              title: "Sistema Respiratorio",     desc: "Pulmones, bronquios y alvéolos" },
  { slug: "digestivo",             title: "Sistema Digestivo",        desc: "Boca, estómago e intestinos" },
  { slug: "excretor",              title: "Sistema Excretor",         desc: "Riñones y nefrona" },
  { slug: "sistema-nervioso",      title: "Sistema Nervioso",         desc: "Neurona 3D con axón y sinapsis" },
  { slug: "cerebro",               title: "Cerebro",                  desc: "Lóbulos, cerebelo e hipocampo" },
  { slug: "sentidos",              title: "Órganos de los Sentidos",  desc: "Ojo, oído, nariz, lengua y piel" },
  { slug: "endocrino",             title: "Sistema Endócrino",        desc: "Hipotálamo, hipófisis y tiroides" },
  { slug: "inmunologico",          title: "Sistema Inmunológico",     desc: "Linfocitos y anticuerpos" },
  { slug: "reproductor",           title: "Reproductor Femenino",     desc: "Ovarios, útero y ciclo menstrual" },
  { slug: "reproductor-masculino", title: "Reproductor Masculino",    desc: "Testículos y espermatozoide" },
];

const tools: Tool[] = [
  { slug: "quiz",         title: "Quiz de Biología",   desc: "72 preguntas con explicación" },
  { slug: "glosario",     title: "Glosario",            desc: "65+ términos biológicos con PDF" },
  { slug: "tareas",       title: "Banco de Tareas",     desc: "24 tareas por nivel" },
  { slug: "evaluaciones", title: "Evaluaciones",        desc: "31 evaluaciones con clave docente" },
  { slug: "notas",        title: "Notas",               desc: "Anotaciones con exportación PDF" },
];

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
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-4 space-y-12">

        <section id="celular">
          <SectionHeader label="Célula y Genética" />
          <ModGrid mods={cellular} cols="lg:grid-cols-3" />
        </section>

        <section id="ecologia">
          <SectionHeader label="Microbiología y Ecología" />
          <ModGrid mods={ecology} cols="lg:grid-cols-3" />
        </section>

        <section id="cuerpo">
          <SectionHeader label="Cuerpo Humano" />
          <ModGrid mods={body} cols="lg:grid-cols-4" />
        </section>
      </div>

      {/* Herramientas */}
      <section id="herramientas" className="max-w-6xl mx-auto px-4 pt-4 pb-20">
        <SectionHeader label="Herramientas educativas" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-xl overflow-hidden border border-white/[0.05]">
          {tools.map(t => (
            <Link key={t.slug} href={`/${t.slug}`} className="block">
              <div className="bg-[#0d1524] hover:bg-[#101c2e] px-5 py-4 h-full transition-colors cursor-pointer group flex items-center justify-between gap-3">
                <div>
                  <div className="text-[13px] font-semibold text-slate-100 group-hover:text-white transition-colors">{t.title}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{t.desc}</div>
                </div>
                <Arrow />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="mb-5">
      <h2 className="text-[17px] font-semibold text-slate-200">{label}</h2>
      <div className="mt-2 h-px bg-white/[0.07]" />
    </div>
  );
}

function ModGrid({ mods, cols }: { mods: Mod[]; cols: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${cols} gap-px bg-white/[0.05] rounded-xl overflow-hidden border border-white/[0.05]`}>
      {mods.map(m => <ModCard key={m.slug} m={m} />)}
    </div>
  );
}

function ModCard({ m }: { m: Mod }) {
  return (
    <Link href={`/${m.slug}`} className="block">
      <div className="bg-[#0d1524] hover:bg-[#101c2e] px-5 py-4 h-full transition-colors cursor-pointer group">
        <div className="flex items-start justify-between gap-2">
          <div className="text-[13px] font-semibold text-slate-100 group-hover:text-white transition-colors leading-snug">
            {m.title}
          </div>
          <Arrow />
        </div>
        <div className="text-[11px] text-slate-500 mt-1.5 leading-snug">{m.desc}</div>
      </div>
    </Link>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
      className="text-slate-600 group-hover:text-green-500 transition-colors flex-shrink-0 mt-0.5">
      <path d="M6 12l4-4-4-4" />
    </svg>
  );
}
