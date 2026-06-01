"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  { id: 1, question: "¿Cuál es la función principal de la mitocondria?", options: ["Producir ATP (energía)", "Sintetizar proteínas", "Almacenar ADN", "Controlar la división celular"], answer: 0, module: "Célula Animal" },
  { id: 2, question: "¿Qué base nitrogenada se empareja con la Adenina (A) en el ADN?", options: ["Guanina (G)", "Citosina (C)", "Timina (T)", "Uracilo (U)"], answer: 2, module: "ADN" },
  { id: 3, question: "¿Qué orgánulo es exclusivo de la célula vegetal?", options: ["Mitocondria", "Ribosoma", "Cloroplasto", "Núcleo"], answer: 2, module: "Célula Vegetal" },
  { id: 4, question: "¿Cuál es la función de los ribosomas?", options: ["Producir energía", "Sintetizar proteínas", "Digestión celular", "Transporte de lípidos"], answer: 1, module: "Célula Animal" },
  { id: 5, question: "¿Qué parte de la neurona recibe señales de otras células?", options: ["Axón", "Mielina", "Dendrita", "Terminal axónica"], answer: 2, module: "Neurona" },
  { id: 6, question: "¿Cuántos enlaces de hidrógeno unen A-T en el ADN?", options: ["1", "2", "3", "4"], answer: 1, module: "ADN" },
  { id: 7, question: "¿Qué estructura protege mecánicamente a la célula vegetal?", options: ["Membrana plasmática", "Vacuola central", "Pared celular", "Cloroplasto"], answer: 2, module: "Célula Vegetal" },
  { id: 8, question: "¿Qué organismo realiza la fotosíntesis?", options: ["Mitocondria", "Cloroplasto", "Ribosoma", "Aparato de Golgi"], answer: 1, module: "Célula Vegetal" },
  { id: 9, question: "¿Qué sistema se encarga del transporte de sangre en el cuerpo?", options: ["Sistema nervioso", "Sistema digestivo", "Sistema circulatorio", "Sistema respiratorio"], answer: 2, module: "Cuerpo Humano" },
  { id: 10, question: "¿Cuál es la función del aparato de Golgi?", options: ["Producir ATP", "Procesar y distribuir proteínas", "Almacenar ADN", "Realizar fotosíntesis"], answer: 1, module: "Célula Animal" },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const q = questions[current];

  const handleSelect = useCallback((idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === q.answer;
    if (correct) setScore(s => s + 1);
    setAnswers(a => [...a, correct]);
  }, [answered, q.answer]);

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0); setScore(0); setSelected(null);
    setAnswered(false); setFinished(false); setAnswers([]);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-md w-full bg-bio-card border border-slate-700 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">{pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚"}</div>
          <h2 className="text-3xl font-bold text-white mb-2">{score}/{questions.length}</h2>
          <p className="text-slate-400 mb-2">{pct}% de aciertos</p>
          <p className="text-lg font-medium mb-6" style={{ color: pct >= 80 ? "#22c55e" : pct >= 60 ? "#f59e0b" : "#ef4444" }}>
            {pct >= 80 ? "¡Excelente! Dominás los conceptos." : pct >= 60 ? "Buen trabajo. Seguí repasando." : "Revisá los módulos 3D para mejorar."}
          </p>
          <div className="flex gap-2 mb-6">
            {answers.map((correct, i) => (
              <div key={i} className={`flex-1 h-2 rounded-full ${correct ? "bg-green-500" : "bg-red-500"}`} />
            ))}
          </div>
          <button onClick={handleRestart} className="w-full py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl transition-all">
            Volver a intentar
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Progreso */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-slate-400 text-sm">{current + 1} / {questions.length}</span>
          <span className="text-green-400 text-sm font-medium">⭐ {score} correctas</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5 mb-6">
          <div className="bg-green-500 h-1.5 rounded-full transition-all" style={{ width: `${((current) / questions.length) * 100}%` }} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }} className="bg-bio-card border border-slate-700 rounded-2xl p-6">
            <div className="inline-block bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-full mb-4">{q.module}</div>
            <h2 className="text-lg font-semibold text-white mb-5">{q.question}</h2>
            <div className="space-y-3">
              {q.options.map((opt, i) => {
                let cls = "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-500 hover:text-white";
                if (answered) {
                  if (i === q.answer) cls = "border-green-500 bg-green-500/10 text-green-400";
                  else if (i === selected) cls = "border-red-500 bg-red-500/10 text-red-400";
                  else cls = "border-slate-800 bg-slate-800/30 text-slate-500";
                }
                return (
                  <button key={i} onClick={() => handleSelect(i)} className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${cls}`}>
                    <span className="font-bold mr-2 text-slate-500">{["A","B","C","D"][i]}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>
            {answered && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
                <div className={`text-sm mb-4 font-medium ${selected === q.answer ? "text-green-400" : "text-red-400"}`}>
                  {selected === q.answer ? "✓ ¡Correcto!" : `✗ Incorrecto. La respuesta era: ${q.options[q.answer]}`}
                </div>
                <button onClick={handleNext} className="w-full py-2.5 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-xl transition-all text-sm">
                  {current + 1 >= questions.length ? "Ver resultado →" : "Siguiente →"}
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
