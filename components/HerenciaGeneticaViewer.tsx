"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function HerenciaGeneticaViewer() {
  return (
    <SketchfabViewer
      slug="herencia"
      moduleName="Herencia Genética"
      uid="4d57784b0d4841d0ab3d43d526df1c3f"
      title="Herencia Genética"
      subtitle="🧬 Genética y Transmisión de Caracteres"
      accent="#f59e0b"
      intro="La herencia genética explica cómo los padres transmiten sus características a los hijos a través de los genes. Explorá el ADN, los cromosomas y las leyes de Mendel."
      structures={[
        {
          name: "Gen y Alelo",
          emoji: "🧩",
          color: "#f59e0b",
          simple: "Un gen es la 'instrucción' para una característica; los alelos son las versiones distintas de ese gen.",
          full: "Gen: secuencia de ADN que codifica una proteína o ARN funcional. Los seres diploides tienen 2 alelos de cada gen, uno en cada cromosoma homólogo. Si los alelos son iguales (AA o aa) → homocigoto. Si son distintos (Aa) → heterocigoto. El alelo dominante (A) se expresa sobre el recesivo (a).",
        },
        {
          name: "Genotipo y Fenotipo",
          emoji: "🔤",
          color: "#d97706",
          simple: "El genotipo es la combinación de alelos que tiene el organismo; el fenotipo es la característica que se ve.",
          full: "Genotipo: composición alélica real (AA, Aa, aa). Fenotipo: expresión observable producto del genotipo + ambiente. Dos individuos con igual fenotipo pueden tener genotipos distintos (AA y Aa si A es dominante). El ambiente modifica la expresión génica (penetrancia, expressividad variable).",
        },
        {
          name: "Leyes de Mendel",
          emoji: "📋",
          color: "#b45309",
          simple: "Mendel descubrió las reglas básicas de cómo se heredan los caracteres. Trabajó con guisantes en el siglo XIX.",
          full: "1ª ley (Uniformidad): todos los híbridos F1 de padres homocigotos son iguales. 2ª ley (Segregación): al cruzar F1×F1 se obtiene 3:1 (dominante:recesivo) porque los alelos se separan en la meiosis. 3ª ley (Segregación independiente): genes en cromosomas distintos se heredan de forma independiente → proporción 9:3:3:1 en dihíbrido.",
        },
        {
          name: "Cuadro de Punnett",
          emoji: "🔲",
          color: "#78350f",
          simple: "Es una tabla que predice qué genotipos son posibles en los hijos de un cruce.",
          full: "Herramienta creada por Reginald Punnett. Los gametos del padre se listan en columnas y los de la madre en filas. Las casillas muestran los posibles genotipos de la descendencia. Para un cruce Aa × Aa: 1 AA (25%) : 2 Aa (50%) : 1 aa (25%) = fenotipo 3:1. Es base para calcular probabilidades de herencia de enfermedades.",
        },
        {
          name: "Dominancia y Codominancia",
          emoji: "⬆️",
          color: "#92400e",
          simple: "Dominante: el alelo que 'gana' y se expresa siempre. En codominancia, los dos alelos se expresan juntos.",
          full: "Dominancia completa: A enmascara a (AA y Aa fenotípicamente iguales). Codominancia: ambos alelos se expresan (ej: grupo ABO — IAIA = A, IBIB = B, IAIB = AB). Dominancia incompleta: heterocigoto tiene fenotipo intermedio (ej: flor roja × blanca → rosa). No existen alelos intrínsecamente 'buenos' o 'malos'.",
        },
        {
          name: "Herencia Ligada al Sexo",
          emoji: "🔀",
          color: "#a16207",
          simple: "Es la herencia de genes que están en los cromosomas sexuales X o Y. Explica por qué el daltonismo es más común en hombres.",
          full: "Genes del cromosoma X se expresan sin contraparte en varones (XY: hemicigotos). Enfermedades recesivas ligadas al X (daltonismo, hemofilia A, distrofia de Duchenne) son más frecuentes en hombres porque basta un alelo recesivo. Las mujeres (XX) pueden ser portadoras (XᴬXᵃ) sin manifestar la enfermedad.",
        },
        {
          name: "Mutación Genética",
          emoji: "⚡",
          color: "#d97706",
          simple: "Una mutación es un cambio en el ADN. Puede ser heredada y afectar a los hijos.",
          full: "Cambio en la secuencia de ADN. Tipos: puntual (sustitución, inserción, deleción de 1 nucleótido), cromosómica (translocación, inversión, deleción de segmentos) y genómica (poliploidía). Las mutaciones pueden ser neutras, beneficiosas (fuente de diversidad evolutiva) o perjudiciales (enfermedades genéticas). Los mutágenos (UV, radiación X, algunos químicos) aumentan su frecuencia.",
        },
        {
          name: "Cromosoma y Cariotipo",
          emoji: "🧵",
          color: "#fbbf24",
          simple: "Los cromosomas son los 'paquetes' donde está guardado el ADN. Los humanos tenemos 46 (23 pares).",
          full: "Los humanos tienen 2n=46 cromosomas: 22 pares de autosomas + 1 par sexual (XX femenino, XY masculino). El cariotipo es el conjunto de cromosomas ordenados por tamaño y morfología. La trisomía 21 (síndrome de Down) surge por no disyunción en la meiosis. El bandeo G permite identificar cada cromosoma y detectar reordenamientos estructurales.",
        },
      ]}
    />
  );
}
