"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function OrganosSentidosViewer() {
  return (
    <SketchfabViewer
      slug="sentidos"
      moduleName="Órganos de los Sentidos"
      uid="f7745aaff145485fb02cf729c96c5f37"
      title="Órganos de los Sentidos"
      subtitle="👁️ Vista, Oído y Más"
      accent="#22d3ee"
      intro="Los órganos de los sentidos captan información del entorno y la envían al cerebro. Explorá la anatomía del ojo y el oído en 3D."
      structures={[
        {
          name: "Córnea",
          emoji: "👁️",
          color: "#e0f2fe",
          simple: "Es la capa transparente delantera del ojo que deja entrar la luz.",
          full: "Tejido avascular transparente de 5 capas. Proporciona ~2/3 del poder refractivo del ojo (~43 dioptrías). Muy inervada (nervio trigémino) — altamente sensible al tacto. La queratitis puede opacarla. Puede transplantarse con éxito.",
        },
        {
          name: "Iris y Pupila",
          emoji: "🔵",
          color: "#38bdf8",
          simple: "El iris es el anillo de color del ojo. La pupila es el hueco negro que cambia de tamaño con la luz.",
          full: "Iris: diafragma muscular pigmentado (melanina determina el color). Músculo esfínter pupilar (parasimpático): contrae la pupila (miosis) en luz brillante. Músculo dilatador pupilar (simpático): dilata (midriasis) en oscuridad. El reflejo pupilar evalúa la función del nervio óptico.",
        },
        {
          name: "Cristalino",
          emoji: "🔍",
          color: "#7dd3fc",
          simple: "Es la lente del ojo que enfoca los objetos, tanto los cercanos como los lejanos.",
          full: "Lente biconvexa avascular y transparente (~10 mm diámetro). La acomodación (cambio de forma por los músculos ciliares y zónulas) permite enfocar objetos a distintas distancias. Con la edad pierde elasticidad (presbicia). Las cataratas lo opacan.",
        },
        {
          name: "Retina",
          emoji: "🟡",
          color: "#fbbf24",
          simple: "Es la pantalla del ojo donde se forman las imágenes que luego van al cerebro.",
          full: "Capa neural de 10 estratos que tapiza el fondo del ojo. Contiene ~120 millones de bastones (visión blanco/negro, baja luz) y ~6 millones de conos (visión de color, agudeza). La fóvea central tiene alta densidad de conos. Las señales van al nervio óptico.",
        },
        {
          name: "Nervio Óptico",
          emoji: "🟣",
          color: "#a855f7",
          simple: "Es el cable que lleva la imagen desde el ojo hasta el cerebro.",
          full: "Par craneal II. Formado por ~1,2 millones de axones de células ganglionares de la retina. Los nervios ópticos se cruzan parcialmente en el quiasma óptico (fibras nasales se decusan). Las señales llegan al cuerpo geniculado lateral del tálamo y luego a la corteza visual (lóbulo occipital).",
        },
        {
          name: "Tímpano y Oído Externo",
          emoji: "👂",
          color: "#f97316",
          simple: "El tímpano es la membrana que vibra cuando llegan sonidos al oído.",
          full: "Oído externo: pabellón auricular + conducto auditivo externo (~2,5 cm). El tímpano es una membrana fibrosa translúcida de ~10 mm de diámetro. Las ondas sonoras lo hacen vibrar. Esa vibración se transmite a los huesecillos del oído medio.",
        },
        {
          name: "Martillo, Yunque y Estribo",
          emoji: "🦴",
          color: "#ea580c",
          simple: "Son los tres huesecillos más pequeños del cuerpo que amplifican el sonido.",
          full: "Los tres osículos del oído medio forman una cadena mecánica. El martillo (malleus) se une al tímpano; el yunque (incus) es el intermediario; el estribo (stapes) transmite la vibración a la ventana oval. Esta palanca amplifica el sonido ~22 veces y adapta la impedancia aire/líquido.",
        },
        {
          name: "Cóclea",
          emoji: "🐌",
          color: "#10b981",
          simple: "Es la caracola del oído interno que convierte las vibraciones de sonido en señales eléctricas.",
          full: "Estructura espiral con 2,5 vueltas llena de perilinfa y endolinfa. El órgano de Corti sobre la membrana basilar contiene ~16.000 células ciliadas que detectan frecuencias específicas (tonotopía: agudos en la base, graves en el ápex). Las señales van al nervio coclear (VIII par).",
        },
        {
          name: "Sistema Vestibular",
          emoji: "⚖️",
          color: "#0ea5e9",
          simple: "Es la parte del oído interno que nos dice si estamos en equilibrio o si nos movemos.",
          full: "Incluye el utrículo, sáculo (detectan aceleración lineal y gravedad) y 3 canales semicirculares perpendiculares entre sí (detectan aceleración angular en los 3 planos). Las células ciliadas con otoconias (carbonato de calcio) o cúpula transducen el movimiento.",
        },
      ]}
    />
  );
}
