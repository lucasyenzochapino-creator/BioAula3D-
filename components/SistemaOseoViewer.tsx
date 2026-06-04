"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function SistemaOseoViewer() {
  return (
    <SketchfabViewer
      slug="oseo"
      moduleName="Sistema Óseo"
      uid="11b57ebfcf6c4e3b88d0cbe618ee70a7"
      title="Sistema Óseo"
      subtitle="🦴 Esqueleto Humano"
      accent="#94a3b8"
      intro="Explorá el esqueleto humano en 3D: 206 huesos que sostienen, protegen y permiten el movimiento. Tocá los puntos ⓘ o las estructuras de abajo."
      structures={[
        {
          name: "Cráneo",
          emoji: "💀",
          color: "#e2e8f0",
          simple: "Es la caja dura que protege al cerebro y forma la cara.",
          full: "Formado por 22 huesos fusionados (8 craneales + 14 faciales). Las suturas son articulaciones fijas. La base craneal tiene orificios (forámenes) para nervios craneales y vasos sanguíneos.",
        },
        {
          name: "Columna Vertebral",
          emoji: "🔗",
          color: "#cbd5e1",
          simple: "Es la columna de huesos que sostiene el cuerpo y protege la médula espinal.",
          full: "33 vértebras en 5 regiones: cervical (7), torácica (12), lumbar (5), sacra (5 fusionadas) y coccígea (4 fusionadas). Los discos intervertebrales amortiguan impactos. Curvas fisiológicas (lordosis, cifosis) optimizan la postura.",
        },
        {
          name: "Costillas y Esternón",
          emoji: "🛡️",
          color: "#94a3b8",
          simple: "Las costillas forman la caja que protege el corazón y los pulmones.",
          full: "12 pares de costillas articuladas con vértebras torácicas. Las 7 primeras son 'verdaderas' (unidas al esternón directamente). El esternón tiene manubrio, cuerpo y apéndice xifoides. La caja torácica permite movimientos respiratorios.",
        },
        {
          name: "Húmero",
          emoji: "💪",
          color: "#a8b4c0",
          simple: "Es el hueso del brazo que conecta el hombro con el codo.",
          full: "Hueso largo del brazo. La cabeza humeral se articula con la escápula (articulación glenohumeral). El epicóndilo y tróclea se articulan con radio y cúbito en el codo. Zona de inserción de músculos deltoides, bíceps y tríceps.",
        },
        {
          name: "Pelvis",
          emoji: "🦵",
          color: "#7c8fa0",
          simple: "Es el anillo de huesos que une la columna con las piernas y protege los órganos internos.",
          full: "Formada por 2 huesos coxales (ilion, isquion, pubis fusionados) + sacro + cóccix. Transmite el peso del tronco a los miembros inferiores. Diferencias sexuales: pelvis femenina más ancha para el parto.",
        },
        {
          name: "Fémur",
          emoji: "🦴",
          color: "#64748b",
          simple: "Es el hueso más largo del cuerpo, está en el muslo.",
          full: "Hueso más largo y resistente del esqueleto (~50 cm). La cabeza femoral forma la articulación de la cadera (coxofemoral). Los cóndilos femorales se articulan con la tibia en la rodilla. Zona de inserción de músculos cuádriceps y glúteos.",
        },
        {
          name: "Tibia y Peroné",
          emoji: "🦶",
          color: "#475569",
          simple: "Son los dos huesos de la pierna que conectan la rodilla con el tobillo.",
          full: "Tibia: hueso principal que soporta el peso. Peroné: más delgado, lateral. La tibia se articula con el fémur (articulación de la rodilla con meniscos y ligamentos cruzados). Juntos forman el maléolo bimaleolar del tobillo.",
        },
        {
          name: "Articulación",
          emoji: "⚙️",
          color: "#b0bec5",
          simple: "Es la unión entre dos huesos que permite el movimiento.",
          full: "Tipos: sinartrosis (fijas, como suturas craneales), anfiartrosis (semimóviles, como sínfisis del pubis) y diartrosis (sinoviales, las más móviles). Las diartrosis tienen cartílago articular, líquido sinovial y cápsula articular.",
        },
        {
          name: "Cartílago",
          emoji: "🌊",
          color: "#93c5fd",
          simple: "Es un tejido elástico que cubre los extremos de los huesos y amortigua los golpes.",
          full: "Tejido conectivo avascular. Tipos: hialino (articulaciones), elástico (oreja, epiglotis) y fibrocartílago (meniscos, discos intervertebrales). Los condrocitos producen la matriz de colágeno y proteoglucanos.",
        },
        {
          name: "Periostio",
          emoji: "🔵",
          color: "#6366f1",
          simple: "Es la membrana que recubre los huesos y contiene células que los hacen crecer.",
          full: "Membrana fibrosa que cubre los huesos largos (excepto superficies articulares). Rica en osteoblastos (forman hueso) y osteoclastos (reabsorben hueso). Contiene vasos sanguíneos y nervios. Esencial para la reparación ósea tras fracturas.",
        },
      ]}
    />
  );
}
