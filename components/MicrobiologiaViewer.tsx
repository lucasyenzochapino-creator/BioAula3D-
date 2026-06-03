"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function MicrobiologiaViewer() {
  return (
    <SketchfabViewer
      slug="microbiologia"
      moduleName="Microbiología"
      uid="4a310db79e834e07a69ee8d4892d46ee"
      title="Microbiología"
      subtitle="🦠 Bacterias y Microorganismos"
      accent="#4ade80"
      intro="Las bacterias son los seres vivos más abundantes del planeta. Explorá la estructura de una bacteria E. coli en 3D y aprendé sobre el mundo microscópico."
      structures={[
        {
          name: "Membrana Plasmática",
          emoji: "🟢",
          color: "#4ade80",
          simple: "Es la capa que rodea a la bacteria y controla qué entra y qué sale.",
          full: "Bicapa lipídica de fosfolípidos sin colesterol (a diferencia de eucariotas). Contiene proteínas de transporte, enzimas de la cadena respiratoria y del ciclo de Krebs (que en eucariotas están en la mitocondria). La diferencia con la membrana eucariota la convierte en diana de antibióticos.",
        },
        {
          name: "Pared Celular",
          emoji: "🟩",
          color: "#22c55e",
          simple: "Es la capa dura que protege a la bacteria y le da su forma característica.",
          full: "Compuesta de peptidoglucano (murena). Gram positivas: pared gruesa de peptidoglucano. Gram negativas: pared delgada + membrana externa con LPS (lipopolisacárido). La tinción de Gram diferencia estos grupos. La penicilina y lisozima atacan la síntesis de peptidoglucano.",
        },
        {
          name: "Nucleoide",
          emoji: "🔵",
          color: "#3b82f6",
          simple: "Es la zona donde está el ADN de la bacteria: no tiene membrana alrededor como las células animales.",
          full: "Región nuclear no delimitada por membrana (procariontes). Contiene un único cromosoma circular de ADN de doble cadena (~4,6 Mb en E. coli) asociado a proteínas HU y H-NS (análogos de histonas). Además pueden existir plásmidos (ADN circular extracromosómico de resistencia).",
        },
        {
          name: "Ribosoma 70S",
          emoji: "🟡",
          color: "#fbbf24",
          simple: "Son las fábricas de proteínas de la bacteria, más pequeñas que las de nuestras células.",
          full: "Los ribosomas bacterianos son 70S (subunidades 30S + 50S), más pequeños que los eucarióticos (80S). Esta diferencia es la base de muchos antibióticos: aminoglucósidos, macrólidos y tetraciclinas bloquean selectivamente la síntesis proteica bacteriana sin afectar las células humanas.",
        },
        {
          name: "Flagelo Bacteriano",
          emoji: "〰️",
          color: "#a3e635",
          simple: "Es la 'cola' que usa la bacteria para moverse como un motor.",
          full: "Filamento proteico helicoidal (~20 nm diámetro) compuesto por flagelina. El cuerpo basal actúa como un motor rotatorio impulsado por el gradiente de protones (fuerza proton-motriz). Puede girar en sentido horario (tumbling) o antihorario (movimiento dirigido). La quimiotaxis usa el movimiento flagelar.",
        },
        {
          name: "Pili y Fimbrias",
          emoji: "🔴",
          color: "#f87171",
          simple: "Son pequeños 'pelos' que usa la bacteria para pegarse a superficies o intercambiar ADN.",
          full: "Fimbrias/pili tipo I y P: permiten adhesión a tejidos del huésped (factores de virulencia). Pili sexuales (tipo IV/F): transfieren plásmidos de ADN entre bacterias (conjugación). El proceso de conjugación es un mecanismo clave de transferencia horizontal de genes y diseminación de resistencias.",
        },
        {
          name: "Cápsula Bacteriana",
          emoji: "🫧",
          color: "#d9f99d",
          simple: "Es una capa gelatinosa alrededor de algunas bacterias que las protege del sistema inmune.",
          full: "Capa de polisacáridos (a veces proteínas) que rodea algunas bacterias (Streptococcus pneumoniae, Haemophilus influenzae). Inhibe la fagocitosis por macrófagos y neutrófilos. Es un factor de virulencia importante. Los anticuerpos contra la cápsula son la base de vacunas polisacáridas conjugadas.",
        },
        {
          name: "Plásmidos y Resistencia",
          emoji: "🧬",
          color: "#86efac",
          simple: "Son pequeños anillos de ADN extra que pueden darle a la bacteria resistencia a antibióticos.",
          full: "Moléculas de ADN circular extracromosómico de 1-1000 kb. Pueden contener genes de resistencia a antibióticos, toxinas, virulencia. Se replican independientemente y se transfieren por conjugación o transformación. La resistencia a antibióticos por plásmidos es una emergencia sanitaria global.",
        },
      ]}
    />
  );
}
