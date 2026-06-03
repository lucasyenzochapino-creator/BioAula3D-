"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function SistemaReproductorViewer() {
  return (
    <SketchfabViewer
      slug="reproductor"
      moduleName="Sistema Reproductor"
      uid="2ad78b1785c94bac83dcb623b53748f5"
      title="Sistema Reproductor"
      subtitle="🌸 Reproducción Humana"
      accent="#f472b6"
      intro="El sistema reproductor permite la formación de gametos y el desarrollo de un nuevo ser. Explorá la anatomía femenina y masculina en 3D."
      structures={[
        // ── SISTEMA FEMENINO ──
        {
          group: "♀ Sistema Femenino",
          name: "Ovarios",
          emoji: "🌸",
          color: "#f472b6",
          simple: "Son dos órganos que producen los óvulos y las hormonas femeninas.",
          full: "Par de glándulas de ~3×2 cm. Contienen folículos ováricos en distintos estadios de maduración. Producen estrógenos y progesterona bajo control hipofisario (FSH/LH). En cada ciclo menstrual un folículo (Graaf) madura y libera un oocito II en la ovulación.",
        },
        {
          group: "♀ Sistema Femenino",
          name: "Trompa de Falopio",
          emoji: "〰️",
          color: "#fb7185",
          simple: "Es el tubo que lleva el óvulo desde el ovario hasta el útero y donde ocurre la fecundación.",
          full: "Conducto muscular de ~10 cm con 4 segmentos: infundíbulo (fimbrias), ampolla (sitio de fecundación), istmo y parte uterina. El epitelio ciliar y el peristaltismo transportan el gameto. El embarazo ectópico ocurre si el embrión se implanta en la trompa.",
        },
        {
          group: "♀ Sistema Femenino",
          name: "Útero",
          emoji: "🫙",
          color: "#e879f9",
          simple: "Es el órgano donde se desarrolla el bebé durante el embarazo.",
          full: "Órgano muscular hueco de ~7×5 cm (no gestante). Tres capas: endometrio (mucosa interna que se renueva en el ciclo), miometrio (músculo liso — se contrae en el parto) y perimetrio (serosa). El cuello uterino (cérvix) conecta con la vagina.",
        },
        {
          group: "♀ Sistema Femenino",
          name: "Endometrio",
          emoji: "🔴",
          color: "#c026d3",
          simple: "Es el revestimiento interno del útero donde se implanta el embrión.",
          full: "Mucosa uterina con dos capas: funcional (se desprende en la menstruación) y basal (regenera la funcional). Responde a estrógenos (proliferación) y progesterona (secretora). Si hay fecundación, el embrión (blastocisto) se implanta ~6-10 días post-fecundación.",
        },
        {
          group: "♀ Sistema Femenino",
          name: "Folículo Ovárico",
          emoji: "🟡",
          color: "#f59e0b",
          simple: "Es la estructura en el ovario que contiene al óvulo mientras madura.",
          full: "Estructuras esféricas del ovario que rodean al oocito. Desarrollo: primordial → primario → secundario → antral → folículo de Graaf (preovulatorio). El pico de LH desencadena la ovulación. Después de la ovulación el folículo se transforma en cuerpo lúteo.",
        },
        {
          group: "♀ Sistema Femenino",
          name: "Cuerpo Lúteo",
          emoji: "🟠",
          color: "#ea580c",
          simple: "Es lo que queda del folículo tras liberar el óvulo: produce progesterona para preparar el útero.",
          full: "Estructura glandular temporal formada por células de la granulosa y teca luteinizadas. Produce progesterona (y algo de estrógenos) durante la fase lútea (~14 días). Sin embarazo, degenera en corpus albicans. Con embarazo, la hCG mantiene el cuerpo lúteo.",
        },
        {
          group: "♀ Sistema Femenino",
          name: "Ciclo Menstrual",
          emoji: "🔄",
          color: "#ec4899",
          simple: "Es el proceso mensual del cuerpo femenino que prepara al útero para un posible embarazo.",
          full: "Dura ~28 días. Fase menstrual (días 1-5): descamación del endometrio. Fase folicular (días 1-13): FSH estimula folículos, estrógenos proliferan el endometrio. Ovulación (día 14): pico de LH. Fase lútea (días 15-28): progesterona prepara el endometrio. Sin fertilización, el ciclo se repite.",
        },

        // ── SISTEMA MASCULINO ──
        {
          group: "♂ Sistema Masculino",
          name: "Testículos",
          emoji: "🔵",
          color: "#3b82f6",
          simple: "Son los órganos que producen los espermatozoides y la testosterona.",
          full: "Par de glándulas ovoides dentro del escroto (~4×3 cm). Los túbulos seminíferos contienen células de Sertoli (nutren espermatozoides) y células de Leydig (producen testosterona). La espermatogénesis produce ~300 millones de espermatozoides/día. El escroto los mantiene 2-3°C más fríos para protegerlos.",
        },
        {
          group: "♂ Sistema Masculino",
          name: "Epidídimo",
          emoji: "〰️",
          color: "#60a5fa",
          simple: "Es el tubo enroscado donde los espermatozoides maduran y aprenden a moverse.",
          full: "Conducto muy enrollado de ~6 m de longitud adosado al testículo. Los espermatozoides completan su maduración en ~12-21 días, adquiriendo motilidad y capacidad de fertilización. Se almacenan en la cola del epidídimo hasta la eyaculación.",
        },
        {
          group: "♂ Sistema Masculino",
          name: "Conducto Deferente",
          emoji: "➡️",
          color: "#2563eb",
          simple: "Es el tubo que transporta los espermatozoides hasta la uretra durante la eyaculación.",
          full: "Conducto muscular de ~45 cm que sube por el cordón espermático, cruza la pelvis y se une a la uretra. La vasectomía secciona este conducto como método anticonceptivo. Durante la eyaculación, contracciones peristálticas impulsan los espermatozoides hacia la uretra.",
        },
        {
          group: "♂ Sistema Masculino",
          name: "Vesícula Seminal",
          emoji: "🟣",
          color: "#7c3aed",
          simple: "Son glándulas que producen la mayor parte del líquido del semen, con fructosa como alimento para los espermatozoides.",
          full: "Par de glándulas tubulares detrás de la vejiga. Producen ~65% del volumen del semen: fructosa (energía para los espermatozoides), prostaglandinas (estimulan contracciones del tracto femenino), proteínas de coagulación y vitamina C. Reguladas por testosterona.",
        },
        {
          group: "♂ Sistema Masculino",
          name: "Próstata",
          emoji: "⚙️",
          color: "#4f46e5",
          simple: "Es una glándula que produce líquido que protege a los espermatozoides y les ayuda a moverse.",
          full: "Glándula de ~20 g que rodea la uretra. Secreta ~30% del semen: líquido levemente ácido con PSA (antígeno prostático específico), zinc, citrato y enzimas que licúan el semen. El PSA se usa como marcador de cáncer de próstata. La hiperplasia benigna de próstata es frecuente en adultos mayores.",
        },
        {
          group: "♂ Sistema Masculino",
          name: "Pene y Uretra",
          emoji: "🔷",
          color: "#0ea5e9",
          simple: "El pene es el órgano copulador. La uretra es el canal compartido por orina y semen.",
          full: "El pene contiene 3 cuerpos eréctiles (2 cavernosos + 1 esponjoso). La erección ocurre por vasodilatación mediada por óxido nítrico (NO). La uretra masculina (~20 cm) tiene función dual: conduce orina y eyaculado. Durante la eyaculación el esfínter uretral interno previene el reflujo de orina.",
        },
        {
          group: "♂ Sistema Masculino",
          name: "Espermatozoide",
          emoji: "🏊",
          color: "#38bdf8",
          simple: "Es la célula sexual masculina: muy pequeña, con cola para nadar hasta el óvulo.",
          full: "Célula haploide (23 cromosomas) de ~55 µm. Cabeza: núcleo + acrosoma (enzimas para penetrar la zona pelúcida). Cuello: mitocondrias en hélice que generan ATP para el movimiento flagelar. Cola (flagelo): propulsión ondulatoria. Sobreviven 3-5 días en el tracto femenino; tardan ~1-2 h en llegar a la trompa.",
        },

        // ── PROCESO COMPARTIDO ──
        {
          group: "Fecundación",
          name: "Fecundación y Cigoto",
          emoji: "✨",
          color: "#a855f7",
          simple: "La fecundación es cuando el espermatozoide se une al óvulo y forman una sola célula nueva.",
          full: "Ocurre en la ampolla de la trompa de Falopio. El espermatozoide atraviesa la zona pelúcida con enzimas acrosomales y se fusiona con la membrana del oocito II. Se completa la meiosis II y se forman 2 pronúcleos. Al fusionarse nace el cigoto (2n = 46 cromosomas), primera célula del nuevo individuo. En ~4 días llega al útero como mórula.",
        },
      ]}
    />
  );
}
