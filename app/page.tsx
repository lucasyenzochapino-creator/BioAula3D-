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
    desc: "Todos los términos biológicos de los 5 módulos. Buscá cualquier concepto con explicación para primaria y secundaria.",
    icon: "📖",
    color: "from-slate-500 to-slate-600",
    glow: "glow-teal",
    parts: null,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-bio-dark">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.12)_0%,transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-1.5 text-green-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            App educativa de biología 3D
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
            BioAula3D
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto mb-10">
            Explorá células, ADN, órganos y más en modelos 3D interactivos. Hacé clic en cada parte para aprender.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/celula"
              className="px-7 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl transition-all shadow-lg shadow-green-500/30 hover:shadow-green-400/40"
            >
              Explorar Célula Animal →
            </Link>
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
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-slate-200 mb-8">Módulos disponibles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/${m.slug}`}>
                <div className={`bg-bio-card border border-slate-700 hover:border-slate-500 rounded-2xl p-6 h-full transition-all hover:${m.glow} group cursor-pointer`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    {m.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{m.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
                  {m.parts && (
                    <div className="mt-4 text-xs text-slate-500">
                      {m.parts} partes etiquetadas
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
