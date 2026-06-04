"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function MicrobiologiaViewer() {
  return (
    <SketchfabViewer
      slug="microbiologia"
      moduleName="Microbiología"
      uid="4a310db79e834e07a69ee8d4892d46ee"
      title="Microbiología"
      subtitle="🦠 Microorganismos"
      accent="#4ade80"
      intro="Explorá el mundo microscópico en 3D: bacterias, virus, hongos y protozoos. Cambiá entre modelos para ver cada tipo de microorganismo."
      structures={[]}
      models={[
        {
          id: "bacteria",
          name: "Bacteria",
          emoji: "🦠",
          uid: "4a310db79e834e07a69ee8d4892d46ee",
          structures: [
            {
              name: "Membrana Plasmática",
              emoji: "🟢",
              color: "#4ade80",
              simple: "Es la capa que rodea a la bacteria y controla qué entra y qué sale.",
              full: "Bicapa lipídica de fosfolípidos sin colesterol (a diferencia de eucariotas). Contiene proteínas de transporte y enzimas de la cadena respiratoria. La diferencia con la membrana eucariota la convierte en diana de antibióticos.",
            },
            {
              name: "Pared Celular",
              emoji: "🟩",
              color: "#22c55e",
              simple: "Es la capa dura que protege a la bacteria y le da su forma característica.",
              full: "Compuesta de peptidoglucano (murena). Gram positivas: pared gruesa de peptidoglucano. Gram negativas: pared delgada + membrana externa con LPS. La penicilina y lisozima atacan la síntesis de peptidoglucano.",
            },
            {
              name: "Nucleoide",
              emoji: "🔵",
              color: "#3b82f6",
              simple: "Es la zona donde está el ADN de la bacteria: no tiene membrana alrededor.",
              full: "Región nuclear no delimitada por membrana (procariontes). Contiene un único cromosoma circular de ADN (~4,6 Mb en E. coli). Además pueden existir plásmidos (ADN extracromosómico de resistencia).",
            },
            {
              name: "Ribosoma 70S",
              emoji: "🟡",
              color: "#fbbf24",
              simple: "Son las fábricas de proteínas de la bacteria, más pequeñas que las de nuestras células.",
              full: "Los ribosomas bacterianos son 70S (subunidades 30S + 50S). Aminoglucósidos, macrólidos y tetraciclinas bloquean selectivamente su síntesis proteica sin afectar células humanas.",
            },
            {
              name: "Flagelo Bacteriano",
              emoji: "〰️",
              color: "#a3e635",
              simple: "Es la 'cola' que usa la bacteria para moverse como un motor.",
              full: "Filamento proteico helicoidal compuesto por flagelina. El cuerpo basal actúa como motor rotatorio impulsado por el gradiente de protones. La quimiotaxis usa el movimiento flagelar para acercarse a nutrientes.",
            },
            {
              name: "Pili y Fimbrias",
              emoji: "🔴",
              color: "#f87171",
              simple: "Son pequeños 'pelos' que usa la bacteria para pegarse a superficies o intercambiar ADN.",
              full: "Fimbrias tipo I: permiten adhesión a tejidos del huésped. Pili sexuales: transfieren plásmidos de ADN entre bacterias (conjugación). Clave en la diseminación de resistencias antibióticas.",
            },
            {
              name: "Cápsula Bacteriana",
              emoji: "🫧",
              color: "#d9f99d",
              simple: "Es una capa gelatinosa alrededor de algunas bacterias que las protege del sistema inmune.",
              full: "Capa de polisacáridos que rodea algunas bacterias. Inhibe la fagocitosis por macrófagos y neutrófilos. Es un factor de virulencia importante. Base de vacunas polisacáridas conjugadas.",
            },
            {
              name: "Plásmidos y Resistencia",
              emoji: "🧬",
              color: "#86efac",
              simple: "Son pequeños anillos de ADN extra que pueden darle a la bacteria resistencia a antibióticos.",
              full: "Moléculas de ADN circular extracromosómico. Pueden contener genes de resistencia a antibióticos, toxinas y virulencia. Se transfieren por conjugación o transformación. La resistencia a antibióticos es una emergencia sanitaria global.",
            },
          ],
        },
        {
          id: "virus",
          name: "Virus",
          emoji: "🔴",
          uid: "b3ef4264dbcf4d59a75b3c551484fc96",
          structures: [
            {
              name: "Cápside",
              emoji: "🔺",
              color: "#ef4444",
              simple: "Es la 'carcasa' proteica que protege el material genético del virus.",
              full: "Cubierta proteica formada por subunidades repetidas llamadas capsómeros. Puede tener simetría icosaédrica (20 caras) o helicoidal. Protege el genoma viral del ambiente. Determina la forma característica del virus.",
            },
            {
              name: "Genoma Viral (ARN/ADN)",
              emoji: "🧬",
              color: "#dc2626",
              simple: "Es el material genético del virus: puede ser ARN o ADN, y contiene las instrucciones para crear nuevos virus.",
              full: "Puede ser ADN (doble o simple cadena) o ARN (doble o simple cadena, +/- sentido). Los retrovirus (VIH) tienen ARN que se convierte en ADN por la transcriptasa inversa. El genoma viral es mucho más pequeño que el bacteriano.",
            },
            {
              name: "Envuelta Viral",
              emoji: "🫧",
              color: "#f87171",
              simple: "Es una capa de membrana que rodea a algunos virus y que usaron para escapar de la célula.",
              full: "Membrana lipídica derivada de la célula huésped con proteínas virales insertadas. Presente en virus como el Influenza, VIH y SARS-CoV-2. Los virus no envueltos son más resistentes al ambiente. Los desinfectantes destruyen la envuelta.",
            },
            {
              name: "Hemaglutinina y Neuraminidasa",
              emoji: "🔑",
              color: "#b91c1c",
              simple: "Son las proteínas de superficie del virus Influenza que le permiten entrar y salir de las células.",
              full: "Hemaglutinina (H): se une a receptores de ácido siálico de la célula huésped para infectarla. Neuraminidasa (N): corta el ácido siálico para liberar nuevos virus. Las vacunas contra la gripe se basan en estas proteínas. Los antivirales oseltamivir/zanamivir inhiben la neuraminidasa.",
            },
            {
              name: "Ciclo de Replicación",
              emoji: "🔄",
              color: "#e11d48",
              simple: "Es el proceso por el que el virus entra en una célula, la usa para copiarse y luego libera nuevos virus.",
              full: "1) Adsorción: el virus se une a receptores específicos de la célula. 2) Penetración: el virus entra (fusión de membrana o endocitosis). 3) Replicación: usa la maquinaria celular para copiar su genoma. 4) Ensamblaje de nuevas partículas. 5) Liberación por lisis o gemación.",
            },
            {
              name: "Ciclo Lítico vs Lisogénico",
              emoji: "⚡",
              color: "#9f1239",
              simple: "El ciclo lítico destruye la célula. El lisogénico se esconde dentro del ADN celular y espera.",
              full: "Lítico: el virus se replica y mata la célula al salir (bacteriófagos T4). Lisogénico: el ADN viral (profago) se integra en el cromosoma bacteriano y se replica con él. El estrés puede activar el profago e iniciar el ciclo lítico.",
            },
            {
              name: "Infección y Patogénesis",
              emoji: "🏥",
              color: "#f43f5e",
              simple: "Los virus causan enfermedades al destruir células o alterar su funcionamiento.",
              full: "Los virus son parásitos intracelulares obligados: necesitan células vivas para reproducirse. Pueden causar infecciones agudas (gripe), crónicas (VIH), latentes (herpes) o transformantes (algunos causan cáncer). El sistema inmune los combate con anticuerpos y células T.",
            },
          ],
        },
        {
          id: "hongos",
          name: "Hongos",
          emoji: "🍄",
          uid: "fa1342020d39414ca2e16d9b43e97576",
          structures: [
            {
              name: "Pared Celular con Quitina",
              emoji: "🟫",
              color: "#a16207",
              simple: "Es la pared de los hongos, hecha de quitina (la misma que el caparazón de los insectos). La diferencia con la pared vegetal.",
              full: "La pared celular de los hongos contiene quitina (polímero de N-acetilglucosamina), β-glucanos y proteínas. La quitina le da rigidez y resistencia. Es diferente de la pared vegetal (celulosa) y bacteriana (peptidoglucano), lo que la hace diana de antifúngicos específicos.",
            },
            {
              name: "Membrana con Ergosterol",
              emoji: "🫧",
              color: "#d97706",
              simple: "La membrana de los hongos usa ergosterol en lugar de colesterol (como nosotros). Esta diferencia permite atacarlos con medicamentos antifúngicos.",
              full: "El ergosterol es el esterol principal de las membranas fúngicas (equivalente al colesterol en animales). Los antifúngicos azoles inhiben su síntesis y anfotericina B se une a él. Esta diferencia con el colesterol animal es la base del tratamiento de infecciones fúngicas.",
            },
            {
              name: "Núcleo Eucariota",
              emoji: "🔵",
              color: "#3b82f6",
              simple: "Los hongos son eucariotas, tienen un núcleo verdadero con membrana. Esto los diferencia de las bacterias.",
              full: "Los hongos son organismos eucariotas con núcleo delimitado por membrana. Pueden ser uninucleados o multinucleados. Los genomas fúngicos son mucho más complejos que los bacterianos. Algunos hongos son patógenos oportunistas importantes (Candida, Aspergillus).",
            },
            {
              name: "Gemación (Levaduras)",
              emoji: "🌱",
              color: "#84cc16",
              simple: "Es la forma de reproducción de las levaduras: producen una brotación que crece hasta separarse.",
              full: "La gemación es la forma de reproducción asexual de levaduras como Saccharomyces cerevisiae. Una célula hija crece como brote del lado de la célula madre hasta alcanzar el tamaño adulto y separarse. Se usa en panificación y fermentación alcohólica (producción de alcohol).",
            },
            {
              name: "Hifas y Micelio",
              emoji: "🕸️",
              color: "#65a30d",
              simple: "Las hifas son los filamentos de los hongos. El micelio es la red de hifas: el 'cuerpo' del hongo que vemos en la madera podrida.",
              full: "Las hifas son filamentos tubulares con diámetro ~2-10 µm. El micelio vegetativo absorbe nutrientes del sustrato. Las hifas pueden tener septos (tabiques) con poros que permiten el flujo de citoplasma. El hongo que vemos (seta) es el cuerpo fructífero reproductor.",
            },
            {
              name: "Esporas Fúngicas",
              emoji: "💨",
              color: "#a3e635",
              simple: "Son las células de dispersión de los hongos, equivalentes a las semillas. Se dispersan por el aire y pueden causar alergias.",
              full: "Las esporas son unidades de dispersión y resistencia. Pueden ser sexuales (ascosporas, basidiosporas) o asexuales (conidios, esporangiosporas). Se liberan en grandes cantidades al aire. Algunas son patógenas cuando se inhalan (Aspergillus, Histoplasma). Causan alergias respiratorias.",
            },
            {
              name: "Rol Ecológico: Descomposición",
              emoji: "🌿",
              color: "#16a34a",
              simple: "Los hongos son los principales recicladores de materia muerta: descomponen madera, hojas y restos orgánicos, devolviendo los nutrientes al suelo.",
              full: "Los hongos saprofíticos secretan enzimas extracelulares (celulasas, ligninasas, proteasas) que degradan materia orgánica compleja. Son esenciales en el ciclo del carbono y nitrógeno. Las micorrizas son asociaciones simbióticas entre raíces de plantas y hongos que mejoran la absorción de nutrientes.",
            },
          ],
        },
        {
          id: "protozoo",
          name: "Protozoo",
          emoji: "🔵",
          uid: "5608f0c1f25c45fdb96d88c596570c76",
          structures: [
            {
              name: "Membrana con Cilios",
              emoji: "〰️",
              color: "#0ea5e9",
              simple: "El Paramecio está cubierto de miles de cilios, como pequeños pelos que baten al unísono para desplazarlo en el agua.",
              full: "Los cilios son organelas de movimiento (~5-10 µm) formadas por microtúbulos (axonema 9+2). La coordinación metacrónica (onda de movimiento que recorre el cuerpo) permite la locomoción eficiente. Pueden revertir el batido para retroceder ante obstáculos.",
            },
            {
              name: "Macronúcleo",
              emoji: "🔵",
              color: "#0284c7",
              simple: "Es el núcleo grande que controla las funciones diarias de la célula: alimentación, movimiento y metabolismo.",
              full: "El macronúcleo contiene múltiples copias del genoma (poliploidía) y regula las funciones vegetativas de la célula. A diferencia del micronúcleo, no participa en la reproducción sexual. Su división es amitótica (sin huso mitótico).",
            },
            {
              name: "Micronúcleo",
              emoji: "⚪",
              color: "#38bdf8",
              simple: "Es el núcleo pequeño que solo se usa durante la reproducción sexual (conjugación): intercambia material genético con otro Paramecio.",
              full: "El micronúcleo es diploide y participa en la conjugación (reproducción sexual). Durante la conjugación, dos paramecios intercambian micronúcleos haploides. Los nuevos macronúcleos se regeneran a partir del micronúcleo resultante.",
            },
            {
              name: "Vacuola Contráctil",
              emoji: "💧",
              color: "#7dd3fc",
              simple: "Es como el 'riñón' del Paramecio: bombea el exceso de agua fuera de la célula para que no explote.",
              full: "Organela osmorreguladora. Los protozoos de agua dulce viven en un medio hipotónico (menor concentración de sales que el interior). El agua entra constantemente por ósmosis. La vacuola contráctil recoge el exceso de agua y lo expulsa en ciclos regulares (cada 6-25 s en Paramecium).",
            },
            {
              name: "Vacuola Alimentaria",
              emoji: "🍽️",
              color: "#0369a1",
              simple: "Es la 'bolsita digestiva' donde el Paramecio digiere las bacterias y algas que captura.",
              full: "Los alimentos (bacterias, levaduras, algas) son capturados por la citofaringe y empaquetados en vacuolas alimentarias por endocitosis. Los lisosomas se fusionan y vierten enzimas digestivas. Los nutrientes se absorben y los desechos se expulsan por el citoprocto (poro anal).",
            },
            {
              name: "Reproducción del Paramecio",
              emoji: "✂️",
              color: "#2563eb",
              simple: "El Paramecio se puede dividir por la mitad (reproducción asexual) o intercambiar genes con otro (conjugación).",
              full: "Reproducción asexual: fisión binaria transversa. El paramecio se divide en dos. Reproducción sexual: conjugación. Dos individuos se unen temporalmente, intercambian micronúcleos haploides y se separan. La conjugación aumenta la diversidad genética y puede 'rejuvenecer' la línea celular.",
            },
            {
              name: "Protozoos Patógenos",
              emoji: "⚠️",
              color: "#1e40af",
              simple: "Algunos protozoos causan enfermedades graves en humanos, como la malaria, la enfermedad de Chagas y la toxoplasmosis.",
              full: "Plasmodium (malaria): transmitido por mosquito Anopheles, infecta eritrocitos. Trypanosoma cruzi (Chagas): transmitido por vinchuca, afecta corazón y digestivo. Giardia: quistes en agua, causa diarrea. Toxoplasma gondii: parásito oportunista peligroso en embarazadas e inmunosuprimidos.",
            },
          ],
        },
      ]}
    />
  );
}
