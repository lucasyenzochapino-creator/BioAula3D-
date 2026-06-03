"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const modules = [
  {
    slug: "celula",
    title: "Célula Animal",
    desc: "Explorá el núcleo, mitocondrias, retículo endoplasmático y más en 3D interactivo.",
    icon: "🔬",
    color: "from-green-500 to-teal-500",
    glow: "glow-green",
    parts: 12,
  },
  {
    slug: "adn",
    title: "ADN & Genética",
    desc: "Visualizá la doble hélice del ADN, codones y el proceso de replicación.",
    icon: "🧬",
    color: "from-blue-500 to-purple-500",
    glow: "glow-purple",
    parts: 8,
  },
  {
    slug: "sistema-nervioso",
    title: "Sistema Nervioso",
    desc: "Neurona 3D con dendritas, axón, mielina y sinapsis. Entendé cómo funciona el cerebro.",
    icon: "🧠",
    color: "from-purple-500 to-pink-500",
    glow: "glow-purple",
    parts: 9,
  },
  {
    slug: "cuerpo-humano",
    title: "Cuerpo Humano",
    desc: "Vista completa del cuerpo con sistemas circulatorio, digestivo y respiratorio.",
    icon: "🫀",
    color: "from-red-500 to-orange-500",
    glow: "glow-green",
    parts: 15,
  },
  {
    slug: "planta",
    title: "Célula Vegetal",
    desc: "Compará la célula vegetal con la animal. Pared celular, cloroplastos y vacuola.",
    icon: "🌿",
    color: "from-emerald-500 to-green-600",
    glow: "glow-green",
    parts: 11,
  },
  {
    slug: "corazon",
    title: "Corazón Humano",
    desc: "Anatomía del corazón en 3D: ventrículos, aurículas, válvulas y arterias coronarias.",
    icon: "🫀",
    color: "from-red-500 to-rose-600",
    glow: "glow-green",
    parts: 9,
  },
  {
    slug: "cerebro",
    title: "Cerebro Humano",
    desc: "Explorá los lóbulos cerebrales, cerebelo, tronco encefálico, hipocampo y más.",
    icon: "🧠",
    color: "from-purple-500 to-violet-600",
    glow: "glow-purple",
    parts: 8,
  },
  {
    slug: "pulmones",
    title: "Sistema Respiratorio",
    desc: "Pulmones, bronquios, alvéolos y diafragma. Cómo respiramos en 3D.",
    icon: "🫁",
    color: "from-sky-500 to-cyan-600",
    glow: "glow-teal",
    parts: 8,
  },
  {
    slug: "digestivo",
    title: "Sistema Digestivo",
    desc: "Recorrido del alimento: boca, estómago, intestinos, hígado y páncreas.",
    icon: "🍽️",
    color: "from-orange-500 to-amber-600",
    glow: "glow-green",
    parts: 8,
  },
  {
    slug: "quiz",
    title: "Quiz 3D",
    desc: "Dos niveles: primaria y secundaria. 10 preguntas con explicación por respuesta y puntaje final.",
    icon: "🏆",
    color: "from-yellow-500 to-orange-500",
    glow: "glow-teal",
    parts: null,
  },
  {
    slug: "glosario",
    title: "Glosario",
    desc: "Más de 65 términos biológicos con explicación para primaria y secundaria. Buscá, filtrá y descargá el PDF.",
    icon: "📖",
    color: "from-slate-500 to-slate-600",
    glow: "glow-teal",
    parts: null,
  },
  {
    slug: "tareas",
    title: "Banco de Tareas",
    desc: "Para docentes: 18 tareas listas con actividades y preguntas. Filtrá por primaria o secundaria y descargá el PDF para imprimir.",
    icon: "📋",
    color: "from-violet-500 to-purple-600",
    glow: "glow-purple",
    parts: null,
  },
  {
    slug: "evaluaciones",
    title: "Evaluaciones",
    desc: "Para docentes: 22 evaluaciones completas con opción múltiple, V/F, completar y desarrollo. PDF alumno y con respuestas.",
    icon: "📝",
    color: "from-amber-500 to-orange-600",
    glow: "glow-teal",
    parts: null,
  },
  {
    slug: "oseo",
    title: "Sistema Óseo",
    desc: "206 huesos en 3D: cráneo, columna vertebral, costillas, fémur, articulaciones y cartílagos.",
    icon: "🦴",
    color: "from-slate-400 to-slate-600",
    glow: "glow-teal",
    parts: 10,
  },
  {
    slug: "muscular",
    title: "Sistema Muscular",
    desc: "Más de 600 músculos: esqueléticos, cardíacos y lisos. Sarcómero, actina, miosina y tendones.",
    icon: "💪",
    color: "from-red-400 to-orange-500",
    glow: "glow-green",
    parts: 10,
  },
  {
    slug: "excretor",
    title: "Sistema Excretor",
    desc: "Riñones, nefrona, uréter, vejiga y uretra. Filtración y formación de orina en 3D.",
    icon: "💧",
    color: "from-yellow-400 to-amber-500",
    glow: "glow-teal",
    parts: 8,
  },
  {
    slug: "mitosis",
    title: "Mitosis y Meiosis",
    desc: "Fases de la división celular: interfase, profase, metafase, anafase, telofase y meiosis.",
    icon: "🔬",
    color: "from-indigo-500 to-violet-600",
    glow: "glow-purple",
    parts: 8,
  },
  {
    slug: "inmunologico",
    title: "Sistema Inmunológico",
    desc: "Linfocitos B y T, macrófagos, anticuerpos, células NK, timo y bazo en 3D.",
    icon: "🛡️",
    color: "from-red-500 to-rose-600",
    glow: "glow-green",
    parts: 9,
  },
  {
    slug: "endocrino",
    title: "Sistema Endócrino",
    desc: "Hipotálamo, hipófisis, tiroides, suprarrenales, páncreas endócrino y gónadas.",
    icon: "⚗️",
    color: "from-orange-400 to-amber-500",
    glow: "glow-teal",
    parts: 8,
  },
  {
    slug: "reproductor",
    title: "Sistema Reproductor",
    desc: "Ovarios, trompas, útero, endometrio, ciclo menstrual y fecundación en 3D.",
    icon: "🌸",
    color: "from-pink-400 to-rose-500",
    glow: "glow-purple",
    parts: 8,
  },
  {
    slug: "sentidos",
    title: "Órganos de los Sentidos",
    desc: "Anatomía del ojo (córnea, retina, nervio óptico) y el oído (cóclea, tímpano, huesecillos).",
    icon: "👁️",
    color: "from-cyan-400 to-teal-500",
    glow: "glow-teal",
    parts: 9,
  },
  {
    slug: "microbiologia",
    title: "Microbiología",
    desc: "Estructura bacteriana 3D: pared celular, nucleoide, flagelo, pili y resistencia antibiótica.",
    icon: "🦠",
    color: "from-green-400 to-emerald-500",
    glow: "glow-green",
    parts: 8,
  },
  {
    slug: "ecosistemas",
    title: "Ecosistemas",
    desc: "Cadenas alimentarias, niveles tróficos, ciclo del carbono y biodiversidad en 3D.",
    icon: "🌳",
    color: "from-emerald-400 to-green-600",
    glow: "glow-green",
    parts: 8,
  },
  {
    slug: "herencia",
    title: "Herencia Genética",
    desc: "Leyes de Mendel, cuadro de Punnett, dominancia, herencia ligada al sexo y mutaciones.",
    icon: "🧬",
    color: "from-amber-400 to-orange-500",
    glow: "glow-teal",
    parts: 8,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-bio-dark">
      {/* Hero */}
      <section className="relative overflow-hidden py-10 md:py-20 px-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.12)_0%,transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            App educativa de biología 3D
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            BioAula3D
          </h1>
          <p className="text-slate-400 text-base md:text-xl max-w-xl mx-auto mb-6">
            Explorá células, ADN, órganos y más en modelos 3D interactivos. Hacé clic en cada parte para aprender.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => document.getElementById("modulos")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl transition-all shadow-lg shadow-green-500/30 hover:shadow-green-400/40"
            >
              Explorar módulos →
            </button>
            <Link
              href="/quiz"
              className="px-7 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-xl transition-all"
            >
              Ir al Quiz
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Módulos */}
      <section id="modulos" className="max-w-6xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-slate-200 mb-8">Módulos disponibles</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/${m.slug}`}>
                <div className={`bg-bio-card border border-slate-700 hover:border-slate-500 rounded-2xl p-4 h-full transition-all hover:${m.glow} group cursor-pointer`}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform`}>
                    {m.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1 leading-tight">{m.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed hidden sm:block">{m.desc}</p>
                  {m.parts && (
                    <div className="mt-2 text-xs text-slate-500">
                      {m.parts} partes
                    </div>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
