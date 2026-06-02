"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

interface Term {
  name: string;
  module: string;
  emoji: string;
  color: string;
  simple: string;
  full: string;
}

const terms: Term[] = [
  // Célula Animal
  { name: "Núcleo", module: "Célula Animal", emoji: "🔵", color: "#3b82f6", simple: "El 'cerebro' de la célula — guarda la información genética.", full: "Organela delimitada por la envoltura nuclear con poros. Contiene el ADN organizado en cromosomas y el nucléolo. Dirige la transcripción del ARNm." },
  { name: "Mitocondria", module: "Célula Animal", emoji: "🟠", color: "#f97316", simple: "Produce la energía (ATP) que necesita la célula para vivir.", full: "Organela de doble membrana con crestas internas. Realiza la fosforilación oxidativa (cadena respiratoria). Posee su propio ADN circular (origen endosimbiótico)." },
  { name: "Retículo Endoplasmático", module: "Célula Animal", emoji: "🟣", color: "#a855f7", simple: "Red de 'caminos' que transporta proteínas por la célula.", full: "El RER (rugoso) con ribosomas adosados sintetiza proteínas de secreción. El REL (liso) sintetiza lípidos y detoxifica sustancias." },
  { name: "Aparato de Golgi", module: "Célula Animal", emoji: "🟡", color: "#eab308", simple: "Empaqueta y envía proteínas a donde se necesitan, como un correo postal.", full: "Cisternas membranosas apiladas (cis, medial, trans). Modifica proteínas con azúcares (glicosilación) y las distribuye en vesículas." },
  { name: "Lisosoma", module: "Célula Animal", emoji: "🩷", color: "#ec4899", simple: "Digiere y recicla los desechos y partes viejas de la célula.", full: "Vesícula con enzimas hidrolíticas activas a pH ácido (~4,5). Realiza autofagia y heterofagia." },
  { name: "Ribosoma", module: "Célula Animal", emoji: "🟢", color: "#22c55e", simple: "Fabrica las proteínas que la célula necesita para funcionar.", full: "Complejo ARN-proteínas (subunidades 60S + 40S). Lee el ARNm y sintetiza cadenas polipeptídicas mediante traducción." },
  { name: "Membrana Plasmática", module: "Célula Animal", emoji: "🫧", color: "#14b8a6", simple: "La 'piel' de la célula: controla qué entra y qué sale.", full: "Bicapa fosfolipídica con proteínas integrales y periféricas (modelo mosaico fluido). Regula el transporte mediante canales y bombas." },
  { name: "Centrosoma", module: "Célula Animal", emoji: "⭐", color: "#f43f5e", simple: "Organiza la división celular y ayuda a mover los cromosomas.", full: "Par de centríolos rodeados de material pericentriolar. Nuclea los microtúbulos del huso mitótico durante la división." },
  { name: "Citoesqueleto", module: "Célula Animal", emoji: "🕸️", color: "#94a3b8", simple: "Como los huesos de la célula: le da forma y permite el movimiento.", full: "Red de microtúbulos (tubulina), filamentos de actina y filamentos intermedios. Mantiene la forma celular y posiciona orgánulos." },
  // ADN
  { name: "Adenina (A)", module: "ADN", emoji: "🔴", color: "#ef4444", simple: "Una de las 4 'letras' del ADN. Siempre se une con la Timina.", full: "Base púrica (doble anillo). Se empareja con Timina mediante 2 puentes de hidrógeno (regla de Chargaff). También componente del ATP." },
  { name: "Timina (T)", module: "ADN", emoji: "🔵", color: "#3b82f6", simple: "Letra del ADN que siempre se une con la Adenina.", full: "Base pirimidínica exclusiva del ADN (el ARN usa Uracilo). Se empareja con Adenina mediante 2 puentes de hidrógeno." },
  { name: "Guanina (G)", module: "ADN", emoji: "🟢", color: "#22c55e", simple: "Se une siempre con la Citosina. Su lazo es muy fuerte — 3 conexiones.", full: "Base púrica (bicíclica). Se empareja con Citosina a través de 3 puentes de hidrógeno. Mayor proporción G-C eleva la temperatura de fusión del ADN." },
  { name: "Citosina (C)", module: "ADN", emoji: "🟡", color: "#f59e0b", simple: "Siempre va con la Guanina. Juntas forman un lazo muy resistente.", full: "Base pirimidínica monocíclica. Se empareja con Guanina mediante 3 puentes de hidrógeno. Su metilación es una modificación epigenética." },
  { name: "Doble Hélice", module: "ADN", emoji: "🧬", color: "#60a5fa", simple: "El ADN tiene forma de escalera retorcida — como dos tiritas enroscadas.", full: "Descrita por Watson y Crick en 1953. Dos hebras antiparalelas de polinucleótidos enrolladas sobre un eje. Un giro completo cada ~3,4 nm (10 pares de bases)." },
  { name: "Puentes de Hidrógeno", module: "ADN", emoji: "🔗", color: "#e879f9", simple: "Las 'conexiones' invisibles que mantienen unidas las dos tiritas del ADN.", full: "Interacciones no covalentes entre pares de bases complementarias. Débiles pero numerosas, permiten abrir las hebras en replicación y transcripción." },
  // Neurona
  { name: "Soma (Cuerpo Celular)", module: "Neurona", emoji: "🟣", color: "#a855f7", simple: "El 'centro' de la neurona — donde vive el núcleo y se produce la energía.", full: "Contiene el núcleo, cuerpos de Nissl (RER), mitocondrias y Golgi. Centro metabólico que sostiene toda la actividad neuronal." },
  { name: "Dendrita", module: "Neurona", emoji: "🌿", color: "#f59e0b", simple: "Las 'antenas' que reciben señales de otras neuronas.", full: "Prolongaciones cortas ramificadas con espinas dendríticas. Reciben potenciales postsinápticos excitadores (EPSP) e inhibidores (IPSP)." },
  { name: "Axón", module: "Neurona", emoji: "🟢", color: "#22c55e", simple: "El 'cable' largo que lleva el mensaje eléctrico desde la neurona.", full: "Prolongación única que conduce el potencial de acción desde el cono axónico hasta la terminal. Puede medir de micrómetros a más de un metro." },
  { name: "Vaina de Mielina", module: "Neurona", emoji: "⚪", color: "#e2e8f0", simple: "Cubre el axón como un abrigo, haciendo que los mensajes viajen más rápido.", full: "Envuelta lipoproteica formada por células de Schwann (SNP) u oligodendrocitos (SNC). Permite conducción saltatoria hasta 120 m/s." },
  { name: "Sinapsis", module: "Neurona", emoji: "⚡", color: "#facc15", simple: "El espacio entre dos neuronas donde se pasan los mensajes químicos.", full: "Unión funcional entre neuronas. La sinapsis química implica exocitosis de neurotransmisores en la hendidura (~20–40 nm) y unión a receptores postsinápticos." },
  { name: "Potencial de Acción", module: "Neurona", emoji: "📡", color: "#fb923c", simple: "El impulso eléctrico que viaja a lo largo del axón llevando el mensaje.", full: "Cambio repentino de voltaje (~-70 mV a +40 mV) por entrada de Na⁺. Todo-o-nada: si supera el umbral (-55 mV), se dispara completamente." },
  // Célula Vegetal
  { name: "Pared Celular", module: "Célula Vegetal", emoji: "🟫", color: "#15803d", simple: "Una capa dura que rodea la célula vegetal y le da su forma cuadrada.", full: "Compuesta de celulosa, hemicelulosa y pectinas. Proporciona soporte mecánico y evita la lisis osmótica. Ausente en células animales." },
  { name: "Cloroplasto", module: "Célula Vegetal", emoji: "🌱", color: "#16a34a", simple: "Hace la fotosíntesis: convierte la luz del sol en azúcar para la planta.", full: "Plastidio con doble membrana, tilacoides apilados en grana y estroma. Fase luminosa en tilacoides; ciclo de Calvin en estroma. Posee ADN propio." },
  { name: "Vacuola Central", module: "Célula Vegetal", emoji: "🔷", color: "#06b6d4", simple: "Gran bolsa de agua que mantiene la planta erguida y almacena nutrientes.", full: "Puede ocupar hasta el 90% del volumen celular. Delimitada por el tonoplasto. Mantiene turgencia y almacena pigmentos, azúcares e iones." },
  { name: "Plasmodesmos", module: "Célula Vegetal", emoji: "🔗", color: "#fbbf24", simple: "Pequeños canales que conectan células vecinas para compartir nutrientes.", full: "Canales citoplasmáticos que atraviesan la pared celular. Permiten el transporte simplástico de agua, fotoasimilados, hormonas y señales." },
  { name: "Fotosíntesis", module: "Célula Vegetal", emoji: "☀️", color: "#22c55e", simple: "El proceso por el que las plantas convierten luz solar + CO₂ + agua en azúcar y oxígeno.", full: "Fase luminosa (fotosistemas I y II, cadena de transporte de e⁻) → ATP y NADPH. Ciclo de Calvin → fijación de CO₂ en glucosa." },
  // Cuerpo Humano
  { name: "Corazón", module: "Cuerpo Humano", emoji: "🫀", color: "#ef4444", simple: "El motor del cuerpo: bombea sangre con oxígeno a todos los órganos.", full: "Músculo cardíaco con 4 cámaras: 2 aurículas y 2 ventrículos. El nódulo sinoauricular regula ~70 latidos/min en reposo." },
  { name: "Pulmones", module: "Cuerpo Humano", emoji: "🫁", color: "#3b82f6", simple: "Toman el oxígeno del aire y expulsan el dióxido de carbono que sobra.", full: "~300 millones de alvéolos para intercambio gaseoso. La hemoglobina transporta O₂ (oxihemoglobina) y CO₂ como bicarbonato." },
  { name: "Cerebro", module: "Cuerpo Humano", emoji: "🧠", color: "#a855f7", simple: "El órgano más complejo: controla todo lo que hacés, pensás y sentís.", full: "~86 mil millones de neuronas. Corteza cerebral (pensamiento), cerebelo (coordinación), tronco encefálico (funciones vitales). Consume ~20% de la energía corporal." },
  { name: "Hígado", module: "Cuerpo Humano", emoji: "🟤", color: "#92400e", simple: "El laboratorio del cuerpo: filtra la sangre y fabrica muchas sustancias útiles.", full: "Más de 500 funciones: metabolismo de macromoléculas, síntesis de proteínas plasmáticas, detoxificación, producción de bilis, almacén de glucógeno." },
  { name: "Nefrona", module: "Cuerpo Humano", emoji: "🩷", color: "#ec4899", simple: "La unidad de filtración del riñón — limpia la sangre.", full: "Cada riñón tiene ~1 millón de nefronas. Filtran ~180 L de plasma/día y reabsorben el 99%, produciendo ~1,5 L de orina. Regulan presión arterial y pH." },
  { name: "Médula Ósea", module: "Cuerpo Humano", emoji: "🦴", color: "#cbd5e1", simple: "Fabrica todas las células de la sangre: glóbulos rojos, blancos y plaquetas.", full: "Médula roja en huesos planos: hematopoyesis (eritrocitos, leucocitos, plaquetas). Médula amarilla (adiposa) en diáfisis de huesos largos." },
];

const modules = Array.from(new Set(terms.map(t => t.module)));
const moduleColors: Record<string, string> = {
  "Célula Animal": "#4ade80",
  "ADN": "#60a5fa",
  "Neurona": "#a78bfa",
  "Célula Vegetal": "#34d399",
  "Cuerpo Humano": "#f87171",
};

export default function GlosarioPage() {
  const [search, setSearch] = useState("");
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return terms.filter(t => {
      const matchSearch = search === "" ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.simple.toLowerCase().includes(search.toLowerCase());
      const matchModule = !activeModule || t.module === activeModule;
      return matchSearch && matchModule;
    });
  }, [search, activeModule]);

  return (
    <div className="min-h-screen bg-bio-dark">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-1">Glosario de Biología</h1>
          <p className="text-slate-400 text-sm">{terms.length} términos de los 5 módulos · Tocá un término para ver la explicación de secundaria</p>
        </div>

        {/* Buscador */}
        <div className="relative mb-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg select-none">🔍</span>
          <input
            type="text"
            placeholder="Buscar término…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-500 transition-all"
          />
        </div>

        {/* Filtros de módulo */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveModule(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${!activeModule ? "border-white/20 text-white bg-slate-700" : "border-slate-800 text-slate-500 hover:text-slate-300"}`}
          >
            Todos
          </button>
          {modules.map(m => (
            <button
              key={m}
              onClick={() => setActiveModule(activeModule === m ? null : m)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${activeModule === m ? "text-black" : "border-slate-800 text-slate-500 hover:text-slate-300"}`}
              style={activeModule === m ? { background: moduleColors[m], borderColor: moduleColors[m] } : {}}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Lista de términos */}
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <div className="text-4xl mb-3">🔍</div>
            <p>No se encontraron términos para "{search}"</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map(t => (
              <div key={t.name + t.module}>
                <button
                  onClick={() => setExpanded(expanded === t.name + t.module ? null : t.name + t.module)}
                  className="w-full text-left rounded-xl border border-slate-800 hover:border-slate-600 transition-all px-4 py-3 flex items-start gap-3"
                  style={{ minHeight: "58px" }}
                >
                  <span className="text-lg leading-none mt-0.5 flex-shrink-0">{t.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-white">{t.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-md font-medium" style={{ background: moduleColors[t.module] + "20", color: moduleColors[t.module] }}>{t.module}</span>
                    </div>
                    <p className="text-slate-400 text-xs mt-0.5 leading-snug">{t.simple}</p>
                  </div>
                  <span className="text-slate-600 text-xs mt-1 flex-shrink-0">{expanded === t.name + t.module ? "▲" : "▼"}</span>
                </button>
                {expanded === t.name + t.module && (
                  <div className="mx-3 mb-1 px-4 py-3 rounded-b-xl border-x border-b border-slate-700/50 text-xs text-slate-300 leading-relaxed bg-slate-800/40">
                    <span className="font-semibold text-white">Secundaria: </span>{t.full}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-all">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
