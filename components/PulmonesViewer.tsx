"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function PulmonesViewer() {
  return (
    <SketchfabViewer
      uid="ce09f4099a68467880f46e61eb9a3531"
      title="Sistema Respiratorio"
      subtitle="💨 Pulmones y Vías Aéreas"
      accent="#38bdf8"
      intro="Explorá los pulmones y las vías respiratorias en 3D. Tocá los puntos ⓘ en el modelo o las estructuras de abajo."
      structures={[
        {
          name: "Pulmón Derecho",
          emoji: "🫁",
          color: "#0ea5e9",
          simple: "El pulmón más grande, dividido en 3 partes (lóbulos). Toma el oxígeno del aire.",
          full: "Mayor que el izquierdo. Tiene 3 lóbulos (superior, medio e inferior) separados por las cisuras horizontal y oblicua. Contiene ~300 millones de alvéolos. Ocupa la mayor parte de la cavidad torácica derecha.",
        },
        {
          name: "Pulmón Izquierdo",
          emoji: "🫁",
          color: "#38bdf8",
          simple: "El pulmón más pequeño, con 2 partes. Está al lado del corazón.",
          full: "Tiene 2 lóbulos (superior e inferior) separados por la cisura oblicua. Es más pequeño por la presencia del corazón (escotadura cardíaca). Contiene la língula, homóloga del lóbulo medio derecho.",
        },
        {
          name: "Tráquea",
          emoji: "🎺",
          color: "#7dd3fc",
          simple: "Es el tubo principal por donde el aire entra y llega a los pulmones.",
          full: "Conducto cartilaginoso (18-20 anillos en C de cartílago hialino) de ~12 cm de longitud. Se bifurca en la carina en los dos bronquios principales. Revestida por epitelio ciliado pseudoestratificado que atrapa partículas.",
        },
        {
          name: "Bronquios Principales",
          emoji: "🌿",
          color: "#22d3ee",
          simple: "Son las ramas del tubo principal que llevan el aire a cada pulmón.",
          full: "Bronquio derecho es más corto, ancho y vertical (mayor riesgo de aspiración). Cada bronquio se divide en bronquios lobares, segmentarios y luego en bronquiolos. El árbol bronquial tiene ~23 generaciones de ramificación.",
        },
        {
          name: "Alvéolos",
          emoji: "🫧",
          color: "#06b6d4",
          simple: "Son pequeñas bolsitas donde el oxígeno pasa a la sangre y sale el dióxido de carbono.",
          full: "Unidades funcionales del intercambio gaseoso. Paredes formadas por neumocitos tipo I (intercambio) y tipo II (producen surfactante que evita el colapso). La membrana alvéolo-capilar tiene ~0,2 µm de grosor para difusión eficiente de O₂ y CO₂.",
        },
        {
          name: "Pleura",
          emoji: "🛡️",
          color: "#0891b2",
          simple: "Es la doble envoltura que protege los pulmones y permite que se expandan.",
          full: "Membrana serosa de doble capa: visceral (adherida al pulmón) y parietal (adherida a la pared torácica). La cavidad pleural contiene ~10-20 mL de líquido lubricante. El neumotórax (entrada de aire) colapsa el pulmón.",
        },
        {
          name: "Diafragma",
          emoji: "💪",
          color: "#0284c7",
          simple: "Es el músculo principal de la respiración: al bajar, hace entrar aire a los pulmones.",
          full: "Principal músculo inspiratorio. Al contraerse se aplana, aumentando el volumen torácico y generando presión negativa que infla los pulmones. Inervado por el nervio frénico (C3-C5). Separa cavidad torácica de la abdominal.",
        },
        {
          name: "Capilares Pulmonares",
          emoji: "🩸",
          color: "#ef4444",
          simple: "Son los vasos sanguíneos tiny que rodean cada bolsita de aire para intercambiar gases.",
          full: "Red capilar densa (~280.000 millones de capilares) que rodea los alvéolos. Superficie total de intercambio ~70 m². La hemoglobina transporta O₂ y CO₂. La hematosis (intercambio gaseoso) ocurre en ~0,25 segundos.",
        },
      ]}
    />
  );
}
