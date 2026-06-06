"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function CorazonViewer() {
  return (
    <SketchfabViewer
      slug="corazon"
      moduleName="Corazón Humano"
      uid="10472481071e4375b8233289c277d411"
      title="Corazón Humano"
      subtitle="🫀 Sistema Circulatorio"
      accent="9A5C5C"
      intro="Explorá la anatomía externa del corazón humano en 3D. Tocá los puntos ⓘ en el modelo o las estructuras de abajo."
      structures={[
        {
          name: "Ventrículo Izquierdo",
          emoji: "🔴",
          color: "#ef4444",
          simple: "Bombea sangre con oxígeno a todo el cuerpo con mucha fuerza.",
          full: "Cámara de pared más gruesa (~12 mm) que genera presión sistólica (~120 mmHg). Expulsa sangre oxigenada a la aorta. Su hipertrofia indica hipertensión arterial crónica.",
        },
        {
          name: "Ventrículo Derecho",
          emoji: "🩸",
          color: "#8A7A5C",
          simple: "Envía sangre sin oxígeno a los pulmones para que se oxigene.",
          full: "Pared más delgada que el izquierdo (~3-4 mm). Genera presión pulmonar (~25 mmHg). Bombea sangre desoxigenada a los pulmones a través de la arteria pulmonar para el intercambio gaseoso.",
        },
        {
          name: "Aurícula Izquierda",
          emoji: "🫀",
          color: "#8A6B8A",
          simple: "Recibe la sangre con oxígeno que viene de los pulmones.",
          full: "Recibe la sangre oxigenada de las 4 venas pulmonares. Pasa la sangre al ventrículo izquierdo a través de la válvula mitral (bicúspide). Sitio frecuente de fibrilación auricular.",
        },
        {
          name: "Aurícula Derecha",
          emoji: "🩷",
          color: "#AA6C6C",
          simple: "Recibe la sangre usada del cuerpo antes de enviarla a los pulmones.",
          full: "Recibe sangre desoxigenada de la vena cava superior e inferior y el seno coronario. Comunica con el ventrículo derecho por la válvula tricúspide. Contiene el nódulo sinusal (marcapasos natural).",
        },
        {
          name: "Aorta",
          emoji: "🔴",
          color: "#dc2626",
          simple: "Es la arteria más grande: lleva sangre con oxígeno a todo el cuerpo.",
          full: "Arteria más grande del cuerpo (diámetro ~2,5 cm). Sale del ventrículo izquierdo. Tiene arco aórtico con ramas hacia cabeza y brazos, luego desciende dando ramas a órganos torácicos y abdominales.",
        },
        {
          name: "Arteria Pulmonar",
          emoji: "🟣",
          color: "#7A6B9A",
          simple: "Lleva sangre sin oxígeno desde el corazón hasta los pulmones.",
          full: "Única arteria que transporta sangre desoxigenada. Sale del ventrículo derecho y se divide en arteria pulmonar derecha e izquierda. Es el inicio de la circulación menor o pulmonar.",
        },
        {
          name: "Válvula Aórtica",
          emoji: "🔑",
          color: "#f59e0b",
          simple: "Es una 'puerta' que evita que la sangre vuelva al corazón después de salir.",
          full: "Válvula semilunar con 3 valvas (cúspides). Separa el ventrículo izquierdo de la aorta. Se abre en sístole y cierra en diástole. La estenosis aórtica es una de las valvulopatías más frecuentes.",
        },
        {
          name: "Arterias Coronarias",
          emoji: "💛",
          color: "#8A7A5C",
          simple: "Son los vasos que alimentan al propio corazón con sangre y oxígeno.",
          full: "Coronaria izquierda (descendente anterior y circunfleja) y derecha. Surgen de la raíz aórtica y riegan el miocardio. Su obstrucción causa infarto de miocardio. Objeto de bypass coronario y stents.",
        },
        {
          name: "Pericardio",
          emoji: "🛡️",
          color: "#4A5260",
          simple: "Es la bolsa protectora que envuelve y protege al corazón.",
          full: "Saco fibroso de doble capa (parietal y visceral) con líquido pericárdico (~20-50 mL) que reduce la fricción. Fija el corazón al mediastino. La pericarditis causa dolor torácico intenso.",
        },
      ]}
    />
  );
}
