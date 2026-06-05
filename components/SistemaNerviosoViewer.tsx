"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function SistemaNerviosoViewer() {
  return (
    <SketchfabViewer
      slug="sistema-nervioso"
      moduleName="Sistema Nervioso"
      uid="2e6be1399756494b9f185ce8c5900911"
      title="Sistema Nervioso"
      subtitle="🧠 Neurociencia"
      accent="#a78bfa"
      intro="Explorá el sistema nervioso completo en 3D: cerebro, médula espinal y nervios distribuidos por todo el cuerpo. Cambiá entre el sistema completo y la neurona individual."
      structures={[]}
      models={[
        {
          id: "sistema",
          name: "Sistema Completo",
          emoji: "🧠",
          uid: "2e6be1399756494b9f185ce8c5900911",
          structures: [
            {
              name: "Cerebro",
              emoji: "🧠",
              color: "#a855f7",
              simple: "Es el órgano principal del sistema nervioso central: controla el pensamiento, los sentidos y el movimiento.",
              full: "Masa de ~1,4 kg dividida en dos hemisferios y cuatro lóbulos. La corteza cerebral (sustancia gris) procesa información sensorial y motora. La sustancia blanca conduce señales entre regiones. Alberga ~86.000 millones de neuronas.",
            },
            {
              name: "Cerebelo",
              emoji: "⚖️",
              color: "#7c3aed",
              simple: "Coordina el equilibrio y la precisión de los movimientos.",
              full: "Localizado en la fosa craneal posterior. Tiene más neuronas que el resto del cerebro. Recibe información del córtex motor y la integra con señales propioceptivas y vestibulares para afinar el movimiento.",
            },
            {
              name: "Tronco Encefálico",
              emoji: "🔌",
              color: "#6d28d9",
              simple: "Conecta el cerebro con la médula espinal y regula funciones vitales como respirar y el ritmo cardíaco.",
              full: "Formado por mesencéfalo, protuberancia y bulbo raquídeo. Controla respiración, frecuencia cardíaca y presión arterial. Contiene los núcleos de los pares craneales III–XII.",
            },
            {
              name: "Médula Espinal",
              emoji: "🔗",
              color: "#8b5cf6",
              simple: "Es el cable central que conecta el cerebro con el resto del cuerpo, transmitiendo señales en ambas direcciones.",
              full: "Cilindro de tejido nervioso de ~45 cm dentro del canal vertebral. Sustancia gris central (neuronas) rodeada de sustancia blanca (axones mielinizados). Transmite señales sensoriales al cerebro y motoras desde él. Media reflejos espinales.",
            },
            {
              name: "Nervios Espinales",
              emoji: "〰️",
              color: "#c4b5fd",
              simple: "Son los 31 pares de nervios que salen de la médula y llevan señales a los brazos, piernas y órganos.",
              full: "31 pares de nervios mixtos (8 cervicales, 12 torácicos, 5 lumbares, 5 sacros, 1 coccígeo). Cada uno tiene raíz dorsal (sensitiva) y ventral (motora). Forman plexos (braquial, lumbosacro) que inervan los miembros.",
            },
            {
              name: "Nervios Craneales",
              emoji: "🔵",
              color: "#a78bfa",
              simple: "Son los 12 pares de nervios que salen directamente del cerebro y controlan la cara, los sentidos y órganos internos.",
              full: "12 pares craneales (I–XII). I: olfatorio. II: óptico (visión). III, IV, VI: movimiento ocular. V: trigémino (sensación facial). VII: facial. VIII: vestibulococlear. IX, X, XI, XII: faringe, laringe, lengua. El X (vago) inerva corazón y vísceras.",
            },
            {
              name: "Sistema Nervioso Periférico",
              emoji: "🌿",
              color: "#818cf8",
              simple: "Son todos los nervios fuera del cerebro y la médula espinal que conectan el sistema nervioso central con el cuerpo.",
              full: "Incluye nervios craneales, espinales y ganglios periféricos. División somática (voluntaria): músculos esqueléticos y piel. División autónoma (involuntaria): órganos internos, vasos y glándulas.",
            },
            {
              name: "Sistema Nervioso Autónomo",
              emoji: "⚙️",
              color: "#9333ea",
              simple: "Controla las funciones involuntarias como la digestión, el corazón y las glándulas, sin que lo pensemos.",
              full: "División simpática ('lucha o huida'): aumenta frecuencia cardíaca, dilata bronquios, reduce digestión. División parasimpática ('reposo y digestión'): reduce frecuencia cardíaca, estimula digestión. División entérica: sistema nervioso propio del intestino.",
            },
          ],
        },
        {
          id: "neurona-3d",
          name: "Neurona 3D",
          emoji: "⚡",
          uid: "20e930a5fae5457fa6d1738afa00c7bb",
          structures: [
            {
              name: "Cuerpo Celular (Soma)",
              emoji: "🟣",
              color: "#a855f7",
              simple: "Es el 'centro' de la neurona, donde vive el núcleo y se produce la energía.",
              full: "El soma contiene el núcleo, el retículo endoplasmático rugoso (cuerpos de Nissl), mitocondrias y el aparato de Golgi. Es el centro metabólico que sostiene toda la actividad de la neurona.",
            },
            {
              name: "Dendritas",
              emoji: "🌿",
              color: "#f59e0b",
              simple: "Son las 'antenas' que reciben señales de otras neuronas.",
              full: "Prolongaciones cortas y ramificadas cubiertas de espinas dendríticas (sitios sinápticos). Reciben potenciales postsinápticos excitadores (EPSP) e inhibidores (IPSP) que se integran en el soma.",
            },
            {
              name: "Axón",
              emoji: "🟢",
              color: "#22c55e",
              simple: "Es el 'cable' largo que lleva el mensaje eléctrico desde la neurona hacia otras células.",
              full: "Prolongación única y larga que conduce el potencial de acción desde el cono axónico hasta la terminal. Puede medir desde micrómetros hasta más de un metro. El transporte axónico (kinesinas/dineínas) mueve vesículas y orgánulos a lo largo del axón.",
            },
            {
              name: "Vaina de Mielina",
              emoji: "⚪",
              color: "#e2e8f0",
              simple: "Cubre el axón como un abrigo, haciendo que los mensajes viajen hasta 100 veces más rápido.",
              full: "Envuelta lipoproteica formada por células de Schwann (SNP) u oligodendrocitos (SNC). Permite la conducción saltatoria entre los nódulos de Ranvier, aumentando la velocidad hasta 120 m/s. La desmielinización causa esclerosis múltiple.",
            },
            {
              name: "Nódulo de Ranvier",
              emoji: "⬜",
              color: "#cbd5e1",
              simple: "Pequeñas interrupciones en la vaina de mielina donde la señal eléctrica se regenera y 'salta'.",
              full: "Interrupciones en la vaina de mielina (~1 µm) ricas en canales de Na⁺ voltaje-dependientes. El potencial de acción 'salta' de nódulo en nódulo (conducción saltatoria), optimizando velocidad y eficiencia metabólica.",
            },
            {
              name: "Terminal Axónica",
              emoji: "🔴",
              color: "#ef4444",
              simple: "El extremo del axón: libera los mensajes químicos (neurotransmisores) a la siguiente neurona.",
              full: "Botón sináptico presináptico con vesículas de neurotransmisores (glutamato, GABA, dopamina, serotonina). Al llegar el potencial de acción, la entrada de Ca²⁺ desencadena exocitosis de neurotransmisores hacia la hendidura sináptica.",
            },
            {
              name: "Sinapsis",
              emoji: "⚡",
              color: "#facc15",
              simple: "El espacio entre dos neuronas donde se 'pasan' los mensajes químicos.",
              full: "Unión funcional entre neuronas (o neurona-músculo). La sinapsis química implica liberación de neurotransmisor en la hendidura (~20–40 nm), unión a receptores postsinápticos y apertura/cierre de canales iónicos que generan el nuevo potencial.",
            },
            {
              name: "Potencial de Acción",
              emoji: "📡",
              color: "#fb923c",
              simple: "La señal eléctrica que viaja por el axón: cuando supera el umbral, se dispara todo o nada.",
              full: "Cambio rápido del potencial de membrana (~-70 mV a +40 mV). Fase de despolarización: canales de Na⁺ se abren. Repolarización: canales de K⁺. Período refractario: la neurona no puede dispararse de nuevo inmediatamente. Es una señal todo-o-nada.",
            },
          ],
        },
        {
          id: "neurona",
          name: "Neurona",
          emoji: "🔬",
          uid: "03a5173f3d2e46958b6f8be81b1c88be",
          structures: [
            {
              name: "Cuerpo Celular (Soma)",
              emoji: "🟣",
              color: "#a855f7",
              simple: "Es el 'centro' de la neurona, donde vive el núcleo y se produce la energía.",
              full: "El soma contiene el núcleo, el retículo endoplasmático rugoso (cuerpos de Nissl), mitocondrias y el aparato de Golgi. Es el centro metabólico que sostiene toda la actividad de la neurona.",
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
              name: "Potencial de Acción",
              emoji: "📡",
              color: "#fb923c",
              simple: "Es la señal eléctrica que viaja por el axón: cuando el umbral se supera, se dispara todo o nada.",
              full: "Cambio rápido del potencial de membrana (~-70 mV a +40 mV). Fase de despolarización: canales de Na⁺ se abren. Repolarización: canales de K⁺. Período refractario: la neurona no puede dispararse de nuevo inmediatamente. Conduce de forma todo-o-nada.",
            },
          ],
        },
      ]}
    />
  );
}
