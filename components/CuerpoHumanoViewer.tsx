"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function CuerpoHumanoViewer() {
  return (
    <SketchfabViewer
      uid="035316622877438cb62de673b8f19217"
      title="Cuerpo Humano"
      subtitle="🫀 Anatomía humana"
      accent="#f87171"
      intro="Modelo 3D real del cuerpo humano con órganos internos. Explorá los sistemas que mantienen tu cuerpo funcionando."
      structures={[
        {
          name: "Corazón",
          emoji: "🫀",
          color: "#ef4444",
          simple: "El motor del cuerpo: bombea sangre con oxígeno a todos los órganos.",
          full: "Músculo cardíaco (miocardio) con cuatro cámaras: 2 aurículas y 2 ventrículos. El ventrículo izquierdo impulsa la circulación sistémica; el derecho, la circulación pulmonar. Latidos regulados por el nódulo sinoauricular (marcapasos natural), ~70 latidos/min en reposo.",
        },
        {
          name: "Pulmones",
          emoji: "🫁",
          color: "#3b82f6",
          simple: "Toman el oxígeno del aire y expulsan el dióxido de carbono que sobra.",
          full: "Órganos esponjosos con ~300 millones de alvéolos pulmonares. El intercambio gaseoso ocurre por difusión simple en la membrana alvéolo-capilar (grosor ~0,5 µm). La hemoglobina transporta O₂ (oxihemoglobina) y CO₂ en forma de bicarbonato.",
        },
        {
          name: "Cerebro",
          emoji: "🧠",
          color: "#a855f7",
          simple: "El órgano más complejo: controla todo lo que hacés, pensás y sentís.",
          full: "~86 mil millones de neuronas y cantidad similar de células gliales. Dividido en corteza cerebral (pensamiento, sensaciones), cerebelo (coordinación), tronco encefálico (funciones vitales). Consume ~20% de la energía corporal total aunque pesa solo ~1,4 kg.",
        },
        {
          name: "Hígado",
          emoji: "🟤",
          color: "#92400e",
          simple: "El laboratorio del cuerpo: filtra la sangre y fabrica muchas sustancias útiles.",
          full: "El órgano interno más grande (~1,5 kg). Realiza más de 500 funciones: metabolismo de carbohidratos, lípidos y proteínas; síntesis de proteínas plasmáticas (albúmina, factores de coagulación); detoxificación; producción de bilis; almacenamiento de glucógeno.",
        },
        {
          name: "Estómago",
          emoji: "💛",
          color: "#f59e0b",
          simple: "Digiere la comida con jugos ácidos y la convierte en una pasta lista para absorber.",
          full: "Órgano muscular que produce HCl (pH 1,5–3,5) y pepsinógeno (proenzima activada a pepsina). El moco gástrico protege la pared. La quimificación produce el quimo que pasa al intestino delgado. Peristaltismo mezclador cada ~20 segundos.",
        },
        {
          name: "Riñones",
          emoji: "🩷",
          color: "#ec4899",
          simple: "Filtran la sangre y eliminan los desechos en la orina.",
          full: "Cada riñón contiene ~1 millón de nefronas. Filtran ~180 L de plasma/día; reabsorben el 99% produciendo ~1,5 L de orina. Regulan el equilibrio ácido-base, la presión arterial (RAAS) y la eritropoyesis (EPO).",
        },
        {
          name: "Intestino Delgado",
          emoji: "🟡",
          color: "#ca8a04",
          simple: "Absorbe los nutrientes de la comida digerida hacia la sangre.",
          full: "~6–7 m de largo con vellosidades y microvellosidades (borde en cepillo) que amplifican la superficie absortiva hasta ~200 m². Divide en duodeno, yeyuno e íleon. Absorbe aminoácidos, monosacáridos, ácidos grasos, vitaminas y minerales.",
        },
        {
          name: "Columna Vertebral",
          emoji: "🦴",
          color: "#cbd5e1",
          simple: "El eje del cuerpo: protege la médula espinal y nos permite estar de pie.",
          full: "33 vértebras divididas en cervicales (7), torácicas (12), lumbares (5), sacras (5 fusionadas) y coccígeas. Discos intervertebrales de fibrocartílago actúan como amortiguadores. Protege la médula espinal y soporta el peso corporal.",
        },
        {
          name: "Médula Espinal",
          emoji: "⚡",
          color: "#6366f1",
          simple: "El cable principal del sistema nervioso que conecta el cerebro con el cuerpo.",
          full: "Cordón nervioso de ~45 cm que recorre el canal vertebral. Conduce impulsos aferentes (sensoriales, ascendentes) y eferentes (motores, descendentes). Gestiona reflejos medulares sin intervención cerebral. Contiene 31 pares de nervios espinales.",
        },
        {
          name: "Músculos",
          emoji: "💪",
          color: "#f97316",
          simple: "Permiten todos los movimientos del cuerpo, desde caminar hasta respirar.",
          full: "Más de 600 músculos esqueléticos (~40% del peso corporal). La contracción muscular se basa en el deslizamiento de filamentos de actina y miosina (ciclo de puentes cruzados). ATP, Ca²⁺ y la troponina-tropomiosina regulan la contracción.",
        },
      ]}
    />
  );
}
