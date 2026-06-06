"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function SistemaReproductorMasculinoViewer() {
  return (
    <SketchfabViewer
      slug="reproductor-masculino"
      moduleName="Sistema Reproductor Masculino"
      uid="b6821261ed5e4c59979bf9a2362e6b58"
      title="Sistema Reproductor Masculino"
      subtitle="♂ Anatomía Masculina"
      accent="8A7A8A"
      intro="El sistema reproductor masculino produce espermatozoides y la hormona testosterona. Explorá testículos, epidídimo, próstata y el proceso de fecundación en 3D."
      structures={[
        {
          name: "Testículos",
          emoji: "🔵",
          color: "#6B7FA8",
          simple: "Son los órganos que producen los espermatozoides y la testosterona.",
          full: "Par de glándulas ovoides dentro del escroto (~4×3 cm). Los túbulos seminíferos contienen células de Sertoli (nutren espermatozoides) y células de Leydig (producen testosterona). La espermatogénesis produce ~300 millones de espermatozoides/día. El escroto los mantiene 2-3°C más fríos que el cuerpo interior.",
        },
        {
          name: "Epidídimo",
          emoji: "〰️",
          color: "#7A8FA8",
          simple: "Es el tubo enroscado donde los espermatozoides maduran y aprenden a moverse.",
          full: "Conducto muy enrollado de ~6 m de longitud adosado al testículo. Los espermatozoides completan su maduración en ~12-21 días, adquiriendo motilidad y capacidad de fertilización. Se almacenan en la cola del epidídimo hasta la eyaculación.",
        },
        {
          name: "Conducto Deferente",
          emoji: "➡️",
          color: "#2563eb",
          simple: "Es el tubo que transporta los espermatozoides hasta la uretra durante la eyaculación.",
          full: "Conducto muscular de ~45 cm que sube por el cordón espermático, cruza la pelvis y se une a la uretra. La vasectomía secciona este conducto como método anticonceptivo. Durante la eyaculación, contracciones peristálticas impulsan los espermatozoides hacia la uretra.",
        },
        {
          name: "Vesícula Seminal",
          emoji: "🟣",
          color: "#6A5A8A",
          simple: "Son glándulas que producen la mayor parte del líquido del semen, con fructosa como alimento para los espermatozoides.",
          full: "Par de glándulas tubulares detrás de la vejiga. Producen ~65% del volumen del semen: fructosa (energía para los espermatozoides), prostaglandinas (estimulan contracciones del tracto femenino), proteínas de coagulación y vitamina C. Reguladas por testosterona.",
        },
        {
          name: "Próstata",
          emoji: "⚙️",
          color: "#4f46e5",
          simple: "Es una glándula que produce líquido que protege a los espermatozoides y les ayuda a moverse.",
          full: "Glándula de ~20 g que rodea la uretra. Secreta ~30% del semen: líquido levemente ácido con PSA (antígeno prostático específico), zinc, citrato y enzimas que licúan el semen. El PSA se usa como marcador de cáncer de próstata. La hiperplasia benigna de próstata es frecuente en adultos mayores.",
        },
        {
          name: "Pene y Uretra",
          emoji: "🔷",
          color: "#0ea5e9",
          simple: "El pene es el órgano copulador. La uretra es el canal compartido por orina y semen.",
          full: "El pene contiene 3 cuerpos eréctiles (2 cavernosos + 1 esponjoso). La erección ocurre por vasodilatación mediada por óxido nítrico (NO). La uretra masculina (~20 cm) tiene función dual: conduce orina y eyaculado. Durante la eyaculación el esfínter uretral interno previene el reflujo de orina.",
        },
        {
          name: "Espermatozoide",
          emoji: "🏊",
          color: "#38bdf8",
          simple: "Es la célula sexual masculina: muy pequeña, con cola para nadar hasta el óvulo.",
          full: "Célula haploide (23 cromosomas) de ~55 µm. Cabeza: núcleo + acrosoma (enzimas para penetrar la zona pelúcida). Cuello: mitocondrias en hélice que generan ATP para el movimiento flagelar. Cola (flagelo): propulsión ondulatoria. Sobreviven 3-5 días en el tracto femenino; tardan ~1-2 h en llegar a la trompa.",
        },
        {
          name: "Testosterona y Eje Hormonal",
          emoji: "⚗️",
          color: "#818cf8",
          simple: "La testosterona es la hormona masculina principal. El cerebro la regula enviando señales a los testículos.",
          full: "Eje hipotálamo-hipófisis-testículos: el hipotálamo libera GnRH → hipófisis secreta LH y FSH → LH estimula células de Leydig (testosterona) y FSH estimula células de Sertoli (espermatogénesis). La testosterona inhibe por retroalimentación negativa. Promueve caracteres sexuales secundarios, masa muscular y libido.",
        },
      ]}
    />
  );
}
