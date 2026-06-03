"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function SistemaEndocrinoViewer() {
  return (
    <SketchfabViewer
      slug="endocrino"
      uid="b10f70cacb6946da851e5696291398a5"
      title="Sistema Endócrino"
      subtitle="⚗️ Glándulas y Hormonas"
      accent="#fb923c"
      intro="El sistema endócrino regula el metabolismo, el crecimiento, la reproducción y el estrés mediante hormonas. Explorá las principales glándulas en 3D."
      structures={[
        {
          name: "Hipotálamo",
          emoji: "🧠",
          color: "#8b5cf6",
          simple: "Es la parte del cerebro que controla a casi todas las glándulas del cuerpo.",
          full: "Región diencefálica que conecta el sistema nervioso con el endócrino. Produce hormonas liberadoras e inhibidoras (GnRH, TRH, CRH, GHRH) que regulan la hipófisis. También sintetiza ADH y oxitocina (liberadas en neurohipófisis). Centro de regulación autonómica.",
        },
        {
          name: "Hipófisis (Pituitaria)",
          emoji: "🔵",
          color: "#3b82f6",
          simple: "Es la 'glándula maestra': controla a la mayoría de las otras glándulas.",
          full: "Glándula del tamaño de un guisante suspendida del hipotálamo. Adenohipófisis (anterior): produce GH, TSH, ACTH, FSH, LH, prolactina. Neurohipófisis (posterior): almacena y libera ADH y oxitocina sintetizadas en el hipotálamo.",
        },
        {
          name: "Tiroides",
          emoji: "🦋",
          color: "#22d3ee",
          simple: "Es la glándula del cuello que controla la velocidad del metabolismo del cuerpo.",
          full: "Glándula bilobulada con folículos que almacenan tiroglobulina. Produce T3 (triyodotironina) y T4 (tiroxina) que aumentan el metabolismo basal y el crecimiento. También produce calcitonina (reduce calcemia). El hipotiroidismo causa cretinismo en niños.",
        },
        {
          name: "Glándulas Suprarrenales",
          emoji: "🔴",
          color: "#ef4444",
          simple: "Son dos pequeñas glándulas sobre los riñones que producen adrenalina y cortisol.",
          full: "Corteza suprarrenal: glucocorticoides (cortisol — estrés, metabolismo), mineralocorticoides (aldosterona — equilibrio sodio-potasio), andrógenos suprarrenales. Médula suprarrenal: catecolaminas (adrenalina y noradrenalina — respuesta de lucha o huida).",
        },
        {
          name: "Páncreas Endócrino",
          emoji: "🟩",
          color: "#16a34a",
          simple: "La parte endócrina del páncreas controla el azúcar en la sangre con insulina y glucagón.",
          full: "Los islotes de Langerhans (1-2% del páncreas) contienen células beta (insulina: reduce glucemia captando glucosa en células), células alfa (glucagón: aumenta glucemia liberando glucosa hepática) y células delta (somatostatina: inhibe las otras). La diabetes tipo 1 destruye células beta.",
        },
        {
          name: "Gónadas",
          emoji: "🌸",
          color: "#f472b6",
          simple: "Son los ovarios (en mujeres) y los testículos (en hombres): producen hormonas sexuales.",
          full: "Ovarios: producen estrógenos (estriol, estradiol) y progesterona bajo control de FSH/LH. Regulan el ciclo menstrual y los caracteres sexuales secundarios femeninos. Testículos: producen testosterona (células de Leydig) que regula espermato­génesis y caracteres masculinos.",
        },
        {
          name: "Paratiroides",
          emoji: "🟡",
          color: "#facc15",
          simple: "Son cuatro glándulas pequeñas que controlan el calcio en la sangre.",
          full: "Cuatro glándulas (~6 mm) en la cara posterior del tiroides. Las células principales producen PTH (hormona paratiroidea) cuando baja el calcio sérico. PTH aumenta la calcemia: activa osteoclastos (libera Ca óseo), estimula reabsorción renal de Ca²⁺ y activa vitamina D.",
        },
        {
          name: "Glándula Pineal",
          emoji: "🌙",
          color: "#6366f1",
          simple: "Es una glándula pequeña del cerebro que produce melatonina y regula el sueño.",
          full: "Estructura neuroendócrina en el epitálamo. Produce melatonina a partir de serotonina en respuesta a la oscuridad (regulada por el tracto retino-hipotalámico). Sincroniza los ritmos circadianos (ciclo sueño-vigilia). También participa en el inicio de la pubertad.",
        },
      ]}
    />
  );
}
