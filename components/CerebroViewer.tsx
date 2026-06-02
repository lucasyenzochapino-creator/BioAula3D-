"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function CerebroViewer() {
  return (
    <SketchfabViewer
      uid="28c8971e11334e8b97a2a0d6235992e8"
      title="Cerebro Humano"
      subtitle="🧠 Sistema Nervioso Central"
      accent="#c084fc"
      intro="Explorá la anatomía del cerebro humano en 3D con sus partes etiquetadas. Tocá los puntos ⓘ o las estructuras de abajo."
      structures={[
        {
          name: "Corteza Cerebral",
          emoji: "🧠",
          color: "#a855f7",
          simple: "Es la capa exterior del cerebro donde se procesa el pensamiento, la memoria y los sentidos.",
          full: "Capa de sustancia gris (~2-4 mm) con ~16.000 millones de neuronas. Organizada en lóbulos: frontal (razonamiento, movimiento), parietal (sensación), temporal (audición, memoria) y occipital (visión). Tiene circunvoluciones que aumentan la superficie.",
        },
        {
          name: "Lóbulo Frontal",
          emoji: "💭",
          color: "#8b5cf6",
          simple: "Controla el movimiento, las decisiones, el lenguaje y la personalidad.",
          full: "Mayor lóbulo cerebral. Contiene la corteza motora primaria (control voluntario del movimiento), el área de Broca (producción del lenguaje) y la corteza prefrontal (razonamiento, planificación, control de impulsos).",
        },
        {
          name: "Lóbulo Parietal",
          emoji: "👋",
          color: "#7c3aed",
          simple: "Procesa las sensaciones del cuerpo: tacto, temperatura y dolor.",
          full: "Contiene la corteza somatosensorial primaria (procesa tacto, propiocepción, temperatura y dolor). Integra información sensorial para la percepción espacial. El área de Wernicke (comprensión del lenguaje) está en el límite parieto-temporal.",
        },
        {
          name: "Cerebelo",
          emoji: "⚖️",
          color: "#6d28d9",
          simple: "Coordina el equilibrio y los movimientos precisos del cuerpo.",
          full: "Situado en la fosa craneal posterior. Contiene más neuronas que todo el resto del cerebro. Coordina la precisión, el tono muscular y el equilibrio. Recibe info del córtex motor y la integra con señales propioceptivas y vestibulares.",
        },
        {
          name: "Tronco Encefálico",
          emoji: "🔌",
          color: "#5b21b6",
          simple: "Conecta el cerebro con la médula espinal y controla funciones vitales como respirar.",
          full: "Formado por mesencéfalo, protuberancia y bulbo raquídeo. Controla funciones autónomas vitales: frecuencia cardíaca, respiración, presión arterial. Contiene los núcleos de los pares craneales III-XII.",
        },
        {
          name: "Tálamo",
          emoji: "📡",
          color: "#4c1d95",
          simple: "Es el 'relé' del cerebro: filtra y distribuye toda la información sensorial.",
          full: "Estructura diencefálica de doble núcleo. Es la puerta de entrada a la corteza cerebral para casi toda la información sensorial (excepto olfativa). Regula la conciencia, el sueño y la alerta. Sus núcleos se asocian a funciones específicas corticales.",
        },
        {
          name: "Hipocampo",
          emoji: "🐎",
          color: "#7e22ce",
          simple: "Ayuda a guardar nuevos recuerdos y orientarse en el espacio.",
          full: "Estructura del sistema límbico (lóbulo temporal medial). Esencial para la formación de memoria declarativa (episódica y semántica) y la navegación espacial. En Alzheimer, es una de las primeras regiones afectadas por la neurodegeneración.",
        },
        {
          name: "Cuerpo Calloso",
          emoji: "🔗",
          color: "#9333ea",
          simple: "Es el puente de fibras que conecta el hemisferio izquierdo con el derecho.",
          full: "Mayor comisura interhemisférica: ~200-250 millones de axones mielinizados. Permite la comunicación y coordinación entre los dos hemisferios. Su sección (callosotomía) se realiza en epilepsia refractaria severa.",
        },
      ]}
    />
  );
}
