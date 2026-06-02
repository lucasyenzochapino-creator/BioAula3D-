"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function SistemaNerviosoViewer() {
  return (
    <SketchfabViewer
      slug="sistema-nervioso"
      uid="03a5173f3d2e46958b6f8be81b1c88be"
      title="Neurona"
      subtitle="🧠 Sistema nervioso"
      accent="#a78bfa"
      intro="Modelo 3D real de una neurona motora. Explorá las partes que permiten que tu cerebro se comunique con el resto de tu cuerpo."
      structures={[
        {
          name: "Cuerpo Celular (Soma)",
          emoji: "🟣",
          color: "#a855f7",
          simple: "Es el 'centro' de la neurona, donde vive el núcleo y se produce la energía.",
          full: "El soma contiene el núcleo, el retículo endoplasmático rugoso (cuerpos de Nissl), mitocondrias y el aparato de Golgi. Es el centro metabólico que sostiene toda la actividad de la neurona.",
        },
        {
          name: "Núcleo Neuronal",
          emoji: "🔵",
          color: "#3b82f6",
          simple: "Guarda el ADN de la neurona y controla cómo funciona.",
          full: "Gran núcleo esférico con nucléolo prominente. Las neuronas maduras son post-mitóticas (no se dividen). Regula la expresión génica de neurotransmisores, factores neurotróficos y proteínas del citoesqueleto axonal.",
        },
        {
          name: "Dendrita",
          emoji: "🌿",
          color: "#f59e0b",
          simple: "Son las 'antenas' que reciben señales de otras neuronas.",
          full: "Prolongaciones cortas y ramificadas cubiertas de espinas dendríticas (sitios sinápticos). Reciben potenciales postsinápticos excitadores (EPSP) e inhibidores (IPSP) que se integran en el soma.",
        },
        {
          name: "Axón",
          emoji: "🟢",
          color: "#22c55e",
          simple: "Es el 'cable' largo que lleva el mensaje eléctrico desde la neurona.",
          full: "Prolongación única y larga que conduce el potencial de acción desde el cono axónico hasta la terminal. Su longitud varía de micrómetros a más de un metro. El transporte axónico (kinesinas/dineínas) mueve vesículas y orgánulos.",
        },
        {
          name: "Vaina de Mielina",
          emoji: "⚪",
          color: "#e2e8f0",
          simple: "Cubre el axón como un abrigo, haciendo que los mensajes viajen más rápido.",
          full: "Envuelta lipoproteica formada por células de Schwann (SNP) u oligodendrocitos (SNC). Permite la conducción saltatoria entre los nódulos de Ranvier, aumentando la velocidad hasta 120 m/s. La desmielinización causa esclerosis múltiple.",
        },
        {
          name: "Nódulo de Ranvier",
          emoji: "⬜",
          color: "#cbd5e1",
          simple: "Son pequeños 'saltos' en el cable donde la señal eléctrica se regenera.",
          full: "Interrupciones en la vaina de mielina (~1 µm) ricas en canales de Na⁺ voltaje-dependientes. El potencial de acción 'salta' de nódulo en nódulo (conducción saltatoria), optimizando velocidad y eficiencia metabólica.",
        },
        {
          name: "Terminal Axónica",
          emoji: "🔴",
          color: "#ef4444",
          simple: "Es el extremo del cable: libera los mensajes químicos a la siguiente neurona.",
          full: "Botón sináptico presináptico con vesículas de neurotransmisores (glutamato, GABA, dopamina, etc.). Al llegar el potencial de acción, la entrada de Ca²⁺ desencadena exocitosis de neurotransmisores hacia la hendidura sináptica.",
        },
        {
          name: "Sinapsis",
          emoji: "⚡",
          color: "#facc15",
          simple: "El espacio entre dos neuronas donde se 'pasan' los mensajes químicos.",
          full: "Unión funcional entre neuronas (o neurona-músculo). La sinapsis química implica liberación de neurotransmisor en la hendidura (~20–40 nm), unión a receptores postsinápticos y apertura/cierre de canales iónicos.",
        },
        {
          name: "Cono de Arranque Axónico",
          emoji: "📡",
          color: "#fb923c",
          simple: "Es donde nace el impulso eléctrico que viajará por todo el axón.",
          full: "Zona entre el soma y el axón con la mayor densidad de canales de Na⁺ voltaje-dependientes. Es el sitio de integración: si los potenciales excitadores superan el umbral (~-55 mV), se genera el potencial de acción todo-o-nada.",
        },
      ]}
    />
  );
}
