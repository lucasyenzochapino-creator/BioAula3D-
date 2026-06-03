"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function SistemaMuscularViewer() {
  return (
    <SketchfabViewer
      slug="muscular"
      moduleName="Sistema Muscular"
      uid="991eb96938be4d0d8fadee241a1063d3"
      title="Sistema Muscular"
      subtitle="💪 Músculos del Cuerpo"
      accent="#f87171"
      intro="Más de 600 músculos dan movimiento, postura y calor al cuerpo. Explorá los principales grupos musculares en 3D."
      structures={[
        {
          name: "Músculo Esquelético",
          emoji: "💪",
          color: "#ef4444",
          simple: "Son los músculos que movemos voluntariamente, como el bíceps.",
          full: "Tejido muscular estriado bajo control voluntario (nervios somáticos). Formado por fascículos de fibras musculares con miofibrillas. Contrae por el mecanismo de deslizamiento de filamentos (actina-miosina). El ATP es la fuente de energía.",
        },
        {
          name: "Músculo Cardíaco",
          emoji: "🫀",
          color: "#dc2626",
          simple: "Es el músculo del corazón: trabaja solo, sin parar, toda la vida.",
          full: "Tejido estriado involuntario exclusivo del corazón. Las células (cardiomiocitos) están interconectadas por discos intercalares con uniones de hendidura para transmitir señales eléctricas. Se contrae rítmicamente gracias al nódulo sinusal (marcapasos).",
        },
        {
          name: "Músculo Liso",
          emoji: "🌀",
          color: "#f97316",
          simple: "Son los músculos de los órganos internos: trabajan solos sin que los controlemos.",
          full: "Tejido muscular no estriado, involuntario. Presente en paredes de órganos huecos (intestinos, vasos sanguíneos, vejiga). Controlado por el sistema nervioso autónomo y hormonas. La contracción es lenta y sostenida.",
        },
        {
          name: "Sarcómero",
          emoji: "🔬",
          color: "#fbbf24",
          simple: "Es la unidad más pequeña del músculo que produce la contracción.",
          full: "Unidad estructural y funcional del músculo estriado. Delimitado por dos discos Z. Contiene filamentos gruesos de miosina (banda A) y delgados de actina (banda I). Durante la contracción, los filamentos se deslizan entre sí sin cambiar de longitud.",
        },
        {
          name: "Actina y Miosina",
          emoji: "🔗",
          color: "#fb923c",
          simple: "Son las proteínas que se enganchan entre sí para hacer que el músculo se acorte.",
          full: "Actina (filamento delgado): proteína globular que forma doble hélice. Miosina (filamento grueso): tiene 'cabezas' que se unen a actina y usan ATP para generar fuerza. El ciclo de puentes cruzados (unión, giro, liberación) produce la contracción.",
        },
        {
          name: "Tendón",
          emoji: "🔴",
          color: "#b91c1c",
          simple: "Es el cordón resistente que une el músculo con el hueso.",
          full: "Tejido conectivo denso formado por fibras de colágeno tipo I dispuestas en paralelo. Transmite la fuerza generada por el músculo al hueso. Avascular en su mayor parte. El tendón de Aquiles (músculo tríceps sural-calcáneo) es el más grueso del cuerpo.",
        },
        {
          name: "Unión Neuromuscular",
          emoji: "⚡",
          color: "#f59e0b",
          simple: "Es el lugar donde el nervio le da la orden al músculo para contraerse.",
          full: "Sinapsis entre la motoneurona alfa y la fibra muscular. El potencial de acción libera acetilcolina que se une a receptores nicotínicos en la placa motora, generando un potencial de acción muscular que activa el retículo sarcoplasmático para liberar Ca²⁺ y desencadenar la contracción.",
        },
        {
          name: "Deltoides",
          emoji: "🔺",
          color: "#e11d48",
          simple: "Es el músculo del hombro que levanta el brazo hacia el costado.",
          full: "Músculo triangular que cubre la articulación glenohumeral. Origen en clavícula, acromion y espina escapular. Inserción en la tuberosidad deltoidea del húmero. Inervado por el nervio axilar (C5-C6). Permite abducción, flexión y extensión del hombro.",
        },
        {
          name: "Cuádriceps",
          emoji: "🦵",
          color: "#c026d3",
          simple: "Son los cuatro músculos de la parte delantera del muslo que extienden la rodilla.",
          full: "Grupo de 4 músculos: recto femoral, vasto lateral, vasto medial y vasto intermedio. Todos se insertan en la tuberosidad tibial a través del tendón rotuliano. Es el músculo más potente del cuerpo. Esencial para caminar, correr y saltar.",
        },
        {
          name: "Abdominales",
          emoji: "🟧",
          color: "#ea580c",
          simple: "Son los músculos del abdomen que protegen los órganos y doblan el tronco.",
          full: "Incluyen recto abdominal, oblicuos interno/externo y transverso. Forman la 'pared abdominal'. Comprimen las vísceras, flexionan el tronco y ayudan en la espiración forzada. El transverso es el más profundo y el principal estabilizador del core.",
        },
      ]}
    />
  );
}
