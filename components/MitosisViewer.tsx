"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function MitosisViewer() {
  return (
    <SketchfabViewer
      slug="mitosis"
      moduleName="Mitosis y Meiosis"
      uid="df93411c475c4e4eb450f71437b5ad0d"
      title="Mitosis y Meiosis"
      subtitle="🔬 División Celular"
      accent="6B7FA8"
      intro="La mitosis crea copias idénticas de células. La meiosis produce gametos para la reproducción. Explorá las fases de la división celular en 3D."
      structures={[
        {
          name: "Interfase",
          emoji: "⏸️",
          color: "#6366f1",
          simple: "Es la fase de 'preparación' donde la célula crece y copia su ADN antes de dividirse.",
          full: "Ocupa el 90% del ciclo celular. Se divide en G1 (crecimiento celular y síntesis de proteínas), S (replicación del ADN: el contenido genético pasa de 2n a 4n) y G2 (síntesis de proteínas para la mitosis). Los checkpoints G1/S y G2/M verifican la integridad del ADN.",
        },
        {
          name: "Profase",
          emoji: "🌀",
          color: "#6A5A8A",
          simple: "Los cromosomas se hacen visibles y el núcleo empieza a desarmarse.",
          full: "Los cromosomas (duplicados, con 2 cromátidas hermanas unidas por el centrómero) se condensan y se hacen visibles al microscopio. La envoltura nuclear se desintegra. Los centrosomas migran a polos opuestos. Comienza a formarse el huso mitótico de microtúbulos.",
        },
        {
          name: "Metafase",
          emoji: "⬜",
          color: "#4f46e5",
          simple: "Los cromosomas se alinean en el centro de la célula, como en fila.",
          full: "Los cromosomas se alinean en la placa metafásica (ecuador de la célula). Los cinetocoros de cada cromátida se unen a los microtúbulos del huso (fibras cinetocóricas) de polos opuestos. Checkpoint de ensamblaje del huso verifica la unión correcta antes de continuar.",
        },
        {
          name: "Anafase",
          emoji: "⬆️",
          color: "#3730a3",
          simple: "Las cromátidas hermanas se separan y se mueven hacia extremos opuestos.",
          full: "La cohesina que une cromátidas es degradada. Las cromátidas hermanas (ahora cromosomas hijos) son jaladas hacia polos opuestos por el acortamiento de microtúbulos cinetocóricos. Los microtúbulos astrales empujan los polos hacia afuera alargando la célula.",
        },
        {
          name: "Telofase",
          emoji: "🟣",
          color: "#6d28d9",
          simple: "Se forman dos nuevos núcleos en cada extremo de la célula.",
          full: "Los cromosomas hijos llegan a los polos y se descondensan. Se reorganiza la envoltura nuclear alrededor de cada conjunto de cromosomas. El nucléolo reaparece. Los microtúbulos del huso se despolimerizan. Comienza simultáneamente la citocinesis.",
        },
        {
          name: "Citocinesis",
          emoji: "✂️",
          color: "#7A6B9A",
          simple: "Es la división del citoplasma que separa las dos células hijas.",
          full: "En células animales: el anillo contráctil de actina-miosina forma una constricción (surco de segmentación) que se estrecha hasta separar las dos células hijas. En células vegetales: se forma la placa celular de vesículas de Golgi que se fusionan para formar una nueva pared.",
        },
        {
          name: "Huso Mitótico",
          emoji: "🕸️",
          color: "#a78bfa",
          simple: "Es la estructura de fibras que jala los cromosomas hacia cada extremo de la célula.",
          full: "Estructura bipolar formada por microtúbulos de tubulina. Tipos: cinetocóricos (unen cromátidas y los mueven), polares (se superponen en el ecuador y empujan los polos) y astrales (anclan el huso a la membrana). Los centrosomas (MTOC) nuclean los microtúbulos.",
        },
        {
          name: "Meiosis I y II",
          emoji: "🧬",
          color: "#c4b5fd",
          simple: "La meiosis tiene dos divisiones y produce 4 células con la mitad de los cromosomas.",
          full: "Meiosis I (reduccional): separa cromosomas homólogos. El crossing-over en profase I genera recombinación genética. Meiosis II (ecuacional): similar a mitosis, separa cromátidas hermanas. Resultado: 4 células haploides (n). En humanos, produce espermatozoides (en testículos) u oocitos (en ovarios).",
        },
      ]}
    />
  );
}
