"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Level = "primaria" | "secundaria";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  module: string;
  level: Level;
  explanation: string;
}

const MODULE_STYLE: Record<string, { emoji: string; gradient: string; color: string }> = {
  "Célula Animal": { emoji: "🔬", gradient: "from-green-600 to-teal-700", color: "#4ade80" },
  "ADN":           { emoji: "🧬", gradient: "from-blue-600 to-purple-700", color: "#60a5fa" },
  "Neurona":       { emoji: "🧠", gradient: "from-purple-600 to-pink-700",  color: "#a78bfa" },
  "Célula Vegetal":{ emoji: "🌿", gradient: "from-emerald-600 to-green-700", color: "#34d399" },
  "Cuerpo Humano": { emoji: "🫀", gradient: "from-red-600 to-orange-700",   color: "#f87171" },
};

const MODULE_UID: Record<string, string> = {
  "Célula Animal":  "0d9f7f4257224975b2ef83a283709b2f",
  "ADN":            "212e5422645f4432a61dc2f3aac3c8c8",
  "Neurona":        "03a5173f3d2e46958b6f8be81b1c88be",
  "Célula Vegetal": "0640c7a14f41400fbdac382c7de1d776",
  "Cuerpo Humano":  "035316622877438cb62de673b8f19217",
};

const questions: Question[] = [
  // --- PRIMARIA ---
  { id: 1, level: "primaria", module: "Célula Animal", question: "¿Cuál es la función principal de la mitocondria?", options: ["Producir energía (ATP)", "Guardar el ADN", "Fabricar proteínas", "Digerir bacterias"], answer: 0, explanation: "La mitocondria es la 'central energética' — convierte los nutrientes en ATP, que es la energía que usa la célula para todo." },
  { id: 2, level: "primaria", module: "ADN", question: "¿Qué forma tiene la molécula de ADN?", options: ["Esfera", "Doble hélice (escalera retorcida)", "Cubo", "Triángulo"], answer: 1, explanation: "El ADN tiene forma de doble hélice, como una escalera en espiral. Fue descubierta por Watson y Crick en 1953." },
  { id: 3, level: "primaria", module: "Célula Vegetal", question: "¿Qué orgánulo hace la fotosíntesis?", options: ["Mitocondria", "Ribosoma", "Cloroplasto", "Núcleo"], answer: 2, explanation: "El cloroplasto capta la luz del sol y la convierte en azúcar (glucosa). Por eso las plantas no necesitan comer." },
  { id: 4, level: "primaria", module: "Neurona", question: "¿Cómo se llaman las 'antenas' de la neurona que reciben señales?", options: ["Axón", "Mielina", "Dendritas", "Núcleo"], answer: 2, explanation: "Las dendritas son las ramificaciones cortas de la neurona que reciben mensajes de otras neuronas." },
  { id: 5, level: "primaria", module: "Cuerpo Humano", question: "¿Qué órgano bombea la sangre por todo el cuerpo?", options: ["Pulmón", "Hígado", "Estómago", "Corazón"], answer: 3, explanation: "El corazón late unas 70 veces por minuto y bombea sangre con oxígeno a todos los órganos del cuerpo." },
  { id: 6, level: "primaria", module: "Célula Animal", question: "¿Dónde está guardado el ADN de la célula?", options: ["Mitocondria", "Núcleo", "Membrana", "Lisosoma"], answer: 1, explanation: "El núcleo es como la 'caja fuerte' de la célula — dentro está el ADN con todas las instrucciones de la vida." },
  { id: 7, level: "primaria", module: "ADN", question: "¿Cuántas letras (bases) tiene el código del ADN?", options: ["2", "4", "6", "26"], answer: 1, explanation: "El ADN usa solo 4 'letras': A (Adenina), T (Timina), G (Guanina) y C (Citosina). ¡Con solo 4 letras se escribe toda la vida!" },
  { id: 8, level: "primaria", module: "Célula Vegetal", question: "¿Qué tiene la célula vegetal que la célula animal NO tiene?", options: ["Núcleo", "Ribosomas", "Pared celular", "Membrana"], answer: 2, explanation: "La pared celular es una capa dura de celulosa que rodea a las células vegetales. Le da la forma cuadrada y las protege." },
  { id: 9, level: "primaria", module: "Cuerpo Humano", question: "¿Para qué sirven los pulmones?", options: ["Digerir la comida", "Tomar oxígeno y expulsar CO₂", "Bombear sangre", "Enviar mensajes al cerebro"], answer: 1, explanation: "Los pulmones intercambian gases: toman oxígeno del aire que respiramos y eliminan el dióxido de carbono que producen las células." },
  { id: 10, level: "primaria", module: "Célula Animal", question: "¿Qué hace el aparato de Golgi?", options: ["Produce energía", "Empaqueta y envía proteínas", "Realiza fotosíntesis", "Guarda el ADN"], answer: 1, explanation: "El aparato de Golgi es como un sistema postal: recibe, empaqueta y envía proteínas a donde se necesitan dentro y fuera de la célula." },

  // --- SECUNDARIA ---
  { id: 11, level: "secundaria", module: "ADN", question: "¿Qué base nitrogenada del ADN se empareja con la Adenina (A)?", options: ["Guanina (G)", "Citosina (C)", "Timina (T)", "Uracilo (U)"], answer: 2, explanation: "A-T se unen con 2 puentes de hidrógeno (regla de Chargaff). En el ARN, el Uracilo reemplaza a la Timina." },
  { id: 12, level: "secundaria", module: "ADN", question: "¿Cuántos puentes de hidrógeno unen el par G-C?", options: ["1", "2", "3", "4"], answer: 2, explanation: "G-C tienen 3 puentes de hidrógeno, por eso son más estables que A-T (2 puentes). Mayor proporción G-C = mayor temperatura de fusión del ADN." },
  { id: 13, level: "secundaria", module: "Célula Animal", question: "¿En qué orgánulo ocurre la fosforilación oxidativa?", options: ["Ribosoma", "Aparato de Golgi", "Mitocondria", "Retículo endoplásmico"], answer: 2, explanation: "La fosforilación oxidativa ocurre en la membrana interna de la mitocondria (cadena respiratoria), generando la mayor parte del ATP celular." },
  { id: 14, level: "secundaria", module: "Célula Animal", question: "¿Cuál es la diferencia entre el retículo endoplásmico rugoso y el liso?", options: ["El rugoso produce energía", "El rugoso tiene ribosomas adosados", "El liso contiene ADN", "El liso realiza la fotosíntesis"], answer: 1, explanation: "El RER (rugoso) tiene ribosomas que sintetizan proteínas de secreción. El REL (liso) sintetiza lípidos y detoxifica sustancias." },
  { id: 15, level: "secundaria", module: "Neurona", question: "¿Qué permite la vaina de mielina en la conducción nerviosa?", options: ["Bloquea el impulso", "Permite conducción saltatoria más rápida", "Produce neurotransmisores", "Recibe señales dendríticas"], answer: 1, explanation: "La mielina permite la conducción saltatoria: el potencial de acción 'salta' entre nódulos de Ranvier, aumentando la velocidad hasta 120 m/s. Su pérdida causa esclerosis múltiple." },
  { id: 16, level: "secundaria", module: "Neurona", question: "¿Qué ion dispara el potencial de acción en la neurona?", options: ["K⁺ saliendo", "Na⁺ entrando", "Ca²⁺ saliendo", "Cl⁻ entrando"], answer: 1, explanation: "La apertura de canales de Na⁺ voltaje-dependientes permite la entrada masiva de sodio, despolarizando la membrana hasta +40 mV y desencadenando el potencial de acción." },
  { id: 17, level: "secundaria", module: "Célula Vegetal", question: "¿Qué fase de la fotosíntesis ocurre en el estroma del cloroplasto?", options: ["Fase luminosa", "Fotosistema I", "Ciclo de Calvin (fase oscura)", "Fotosistema II"], answer: 2, explanation: "El ciclo de Calvin (o fase oscura) ocurre en el estroma usando CO₂, ATP y NADPH de la fase luminosa para sintetizar glucosa." },
  { id: 18, level: "secundaria", module: "Célula Vegetal", question: "¿Cuál es la función principal de los plasmodesmos?", options: ["Realizar fotosíntesis", "Conectar células vecinas para transporte simplástico", "Almacenar agua", "Sintetizar proteínas"], answer: 1, explanation: "Los plasmodesmos son canales entre células vegetales que permiten el transporte simplástico de agua, nutrientes y señales sin cruzar membranas." },
  { id: 19, level: "secundaria", module: "Cuerpo Humano", question: "¿Qué estructura del riñón realiza la filtración de la sangre?", options: ["Uréter", "Pelvis renal", "Nefrona", "Médula renal"], answer: 2, explanation: "Cada riñón contiene ~1 millón de nefronas. Filtran ~180 L de plasma/día y reabsorben el 99%, produciendo ~1,5 L de orina final." },
  { id: 20, level: "secundaria", module: "Cuerpo Humano", question: "¿Qué proceso genera la contracción muscular?", options: ["Ciclo A-T de bases", "Deslizamiento de filamentos actina-miosina", "Fosforilación oxidativa", "Ciclo de Calvin"], answer: 1, explanation: "Las cabezas de miosina se unen a actina y avanzan usando ATP, acortando el sarcómero. El Ca²⁺ libera el sitio de unión controlado por tropomiosina." },
];

const emojis: Record<Level, string> = { primaria: "🌱", secundaria: "🔬" };
const levelLabels: Record<Level, string> = { primaria: "Primaria (6°-7°)", secundaria: "Secundaria (1°-5°)" };
const levelColors: Record<Level, string> = { primaria: "#22c55e", secundaria: "#60a5fa" };

export default function QuizPage() {
  const [level, setLevel] = useState<Level | null>(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [shared, setShared] = useState(false);
  const [thumbs, setThumbs] = useState<Record<string, string>>({});

  useEffect(() => {
    const modules = Object.keys(MODULE_UID);
    modules.forEach(async (mod) => {
      const uid = MODULE_UID[mod];
      try {
        const res = await fetch(`/api/thumb?uid=${uid}`);
        const data = await res.json();
        if (data.thumbnailUrl) {
          setThumbs(prev => ({ ...prev, [mod]: data.thumbnailUrl }));
        }
      } catch { /* fallback to gradient */ }
    });
  }, []);

  const filtered = level ? questions.filter(q => q.level === level) : [];
  const q = filtered[current];

  const handleSelect = useCallback((idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === (q?.answer ?? -1);
    if (correct) setScore(s => s + 1);
    setAnswers(a => [...a, correct]);
  }, [answered, q]);

  const handleNext = () => {
    if (current + 1 >= filtered.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleBack = () => {
    if (current === 0) {
      setLevel(null);
      setCurrent(0); setScore(0); setSelected(null);
      setAnswered(false); setFinished(false); setAnswers([]);
      return;
    }
    const wasCorrect = answers[answers.length - 1];
    if (wasCorrect) setScore(s => s - 1);
    setAnswers(a => a.slice(0, -1));
    setCurrent(c => c - 1);
    setSelected(null);
    setAnswered(false);
  };

  const handleRestart = () => {
    setCurrent(0); setScore(0); setSelected(null);
    setAnswered(false); setFinished(false); setAnswers([]);
    setShared(false);
  };

  const handleShare = async () => {
    const pct = Math.round((score / filtered.length) * 100);
    const text = `¡Hice el quiz de BioAula3D y obtuve ${score}/${filtered.length} (${pct}%)! 🧬`;
    if (navigator.share) {
      await navigator.share({ title: "BioAula3D Quiz", text });
    } else {
      await navigator.clipboard.writeText(text);
      setShared(true);
    }
  };

  // Level selector
  if (!level) {
    return (
      <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
        <div className="max-w-sm w-full">
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">🧬</div>
            <h1 className="text-2xl font-bold text-white mb-2">Quiz de Biología</h1>
            <p className="text-slate-400 text-sm">Elegí tu nivel para comenzar</p>
          </div>
          <div className="space-y-3">
            {(["primaria", "secundaria"] as Level[]).map(l => (
              <button key={l} onClick={() => setLevel(l)}
                className="w-full p-5 bg-bio-card border border-slate-700 hover:border-slate-500 rounded-2xl text-left transition-all group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{emojis[l]}</span>
                  <div>
                    <div className="text-white font-semibold">{levelLabels[l]}</div>
                    <div className="text-slate-400 text-sm mt-0.5">10 preguntas · conceptos {l === "primaria" ? "básicos" : "avanzados"}</div>
                  </div>
                  <span className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors">→</span>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">← Volver al inicio</Link>
          </div>
        </div>
      </div>
    );
  }

  const accent = levelColors[level];

  if (finished) {
    const pct = Math.round((score / filtered.length) * 100);
    const moduleLinks: Record<string, string> = {
      "Célula Animal": "/celula", "ADN": "/adn", "Neurona": "/neurona",
      "Célula Vegetal": "/planta", "Cuerpo Humano": "/cuerpo",
    };
    return (
      <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-bio-card border border-slate-700 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">{pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚"}</div>
          <h2 className="text-3xl font-bold text-white mb-2">{score}/{filtered.length}</h2>
          <p className="text-slate-400 mb-2 capitalize">{levelLabels[level]}</p>
          <p className="text-2xl font-bold mb-1" style={{ color: accent }}>{pct}%</p>
          <p className="text-sm text-slate-400 mb-6">
            {pct >= 80 ? "¡Excelente! Dominás los conceptos." : pct >= 60 ? "Buen trabajo. Seguí repasando." : "Revisá los módulos 3D para mejorar."}
          </p>
          <div className="flex gap-1 mb-6">
            {answers.map((correct, i) => (
              <div key={i} className={`flex-1 h-2 rounded-full ${correct ? "bg-green-500" : "bg-red-500"}`} />
            ))}
          </div>
          <div className="space-y-2 mb-6">
            <button onClick={handleShare} className="w-full py-2.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-xl transition-all text-sm">
              {shared ? "¡Copiado!" : "Compartir resultado 🔗"}
            </button>
            <button onClick={handleRestart} className="w-full py-2.5 rounded-xl font-semibold transition-all text-sm text-black"
              style={{ background: accent }}>
              Intentar de nuevo
            </button>
            <button onClick={() => { setLevel(null); handleRestart(); }} className="w-full py-2.5 border border-slate-700 text-slate-400 hover:text-white rounded-xl transition-all text-sm">
              Cambiar nivel
            </button>
          </div>
          <div className="border-t border-slate-700 pt-4">
            <p className="text-slate-500 text-xs mb-3">Repasar módulos 3D</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.entries(moduleLinks).map(([name, href]) => (
                <Link key={name} href={href}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white text-xs transition-all">
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Results screen
  if (finished) {
    const pct = Math.round((score / filtered.length) * 100);
    const accent = levelColors[level];
    return (
      <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-bio-card border border-slate-700 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-3">{pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚"}</div>
          <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
            {levelLabels[level]}
          </div>
          <h2 className="text-4xl font-bold text-white mb-1">{score}<span className="text-slate-500 text-2xl">/{filtered.length}</span></h2>
          <p className="text-slate-400 mb-2">{pct}% de aciertos</p>
          <p className="text-lg font-medium mb-5" style={{ color: pct >= 80 ? "#22c55e" : pct >= 60 ? "#f59e0b" : "#ef4444" }}>
            {pct >= 80 ? "¡Excelente! Dominás los conceptos." : pct >= 60 ? "Buen trabajo. Seguí repasando." : "Revisá los módulos 3D y volvé a intentarlo."}
          </p>
          <div className="flex gap-1.5 mb-6">
            {answers.map((correct, i) => (
              <div key={i} className={`flex-1 h-2 rounded-full ${correct ? "bg-green-500" : "bg-red-500"}`} />
            ))}
          </div>
          <div className="space-y-3">
            <button onClick={handleRestart}
              className="w-full py-3 rounded-xl font-semibold text-black transition-all"
              style={{ background: accent }}>
              Volver a intentar
            </button>
            <button onClick={handleShare}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 text-sm transition-all">
              {shared ? "✓ Copiado al portapapeles" : "📤 Compartir resultado"}
            </button>
            <button onClick={() => { handleRestart(); setLevel(null); }}
              className="w-full py-2 text-slate-500 hover:text-slate-300 text-sm transition-all">
              Cambiar nivel
            </button>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800">
            <p className="text-slate-500 text-xs mb-3">Repasá los módulos para mejorar tu puntaje</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["celula","adn","sistema-nervioso","planta","cuerpo-humano"].map(s => (
                <Link key={s} href={`/${s}`}
                  className="px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white text-xs transition-all capitalize">
                  {s.replace("-"," ")}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // Question screen
  const accent = levelColors[level];
  return (
    <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <button onClick={handleBack} className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm">
            ← Atrás
          </button>
          <span className="text-sm font-medium" style={{ color: accent }}>
            {emojis[level]} {levelLabels[level]}
          </span>
          <span className="text-slate-400 text-sm">{current + 1}/{filtered.length}</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-800 rounded-full h-1.5 mb-5">
          <div className="h-1.5 rounded-full transition-all" style={{ width: `${(current / filtered.length) * 100}%`, background: accent }} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}
            className="bg-bio-card border border-slate-700 rounded-2xl overflow-hidden">
            {/* Module visual header */}
            {(() => {
              const style = MODULE_STYLE[q.module] ?? { emoji: "🔬", gradient: "from-slate-600 to-slate-700", color: "#94a3b8" };
              const thumb = thumbs[q.module];
              return (
                <div className="w-full h-36 relative overflow-hidden">
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt={q.module}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${style.gradient} flex flex-col items-center justify-center gap-1`}>
                      <span className="text-5xl leading-none select-none">{style.emoji}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-3 text-white/90 text-xs font-semibold tracking-wide drop-shadow">{q.module}</span>
                </div>
              );
            })()}

            <div className="p-6">
              <h2 className="text-lg font-semibold text-white mb-5">{q.question}</h2>
              <div className="space-y-2.5">
                {q.options.map((opt, i) => {
                  let cls = "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-500 hover:text-white";
                  if (answered) {
                    if (i === q.answer) cls = "border-green-500 bg-green-500/10 text-green-400";
                    else if (i === selected) cls = "border-red-500 bg-red-500/10 text-red-400";
                    else cls = "border-slate-800 bg-slate-800/30 text-slate-500";
                  }
                  return (
                    <button key={i} onClick={() => handleSelect(i)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${cls}`}
                      style={{ minHeight: "52px" }}>
                      <span className="font-bold mr-2 text-slate-500">{["A","B","C","D"][i]}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
                  <div className={`text-sm mb-2 font-medium ${selected === q.answer ? "text-green-400" : "text-red-400"}`}>
                    {selected === q.answer ? "✓ ¡Correcto!" : `✗ Incorrecto. La respuesta era: ${q.options[q.answer]}`}
                  </div>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">{q.explanation}</p>
                  <button onClick={handleNext} className="w-full py-2.5 font-semibold rounded-xl transition-all text-sm text-black"
                    style={{ background: accent }}>
                    {current + 1 >= filtered.length ? "Ver resultado →" : "Siguiente →"}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 text-center">
          <span className="text-slate-600 text-sm">⭐ {score} correctas de {current} respondidas</span>
        </div>
      </div>
    </div>
  );
}
