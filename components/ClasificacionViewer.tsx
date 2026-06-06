"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function ClasificacionViewer() {
  return (
    <SketchfabViewer
      slug="clasificacion"
      moduleName="Clasificación de Seres Vivos"
      uid="b7d84e5f2d5e411fbb195ab2742f2256"
      title="Clasificación de Seres Vivos"
      subtitle="🔬 Células y Reinos"
      accent="7A8F5E"
      intro="Explorá la diversidad de la vida: los 5 reinos, la taxonomía linneana y el árbol filogenético desde bacterias hasta animales."
      structures={[]}
      models={[
        {
          id: "celula-eucariota",
          name: "Célula Eucariota",
          emoji: "🔬",
          uid: "b7d84e5f2d5e411fbb195ab2742f2256",
          structures: [
            {
              name: "Reino Monera (Bacteria)",
              emoji: "🦠",
              color: "#6C8A9A",
              simple: "El reino de las bacterias: organismos unicelulares sin núcleo. Son los seres vivos más pequeños y abundantes del planeta.",
              full: "El reino Monera incluye todos los procariontes: organismos sin núcleo delimitado por membrana. Son unicelulares con ADN circular en el nucleoide. Incluyen Eubacterias y Arqueobacterias. Presentan la mayor diversidad metabólica: fotosíntesis, quimiosíntesis, fermentación. Pueden vivir en ambientes extremos.",
            },
            {
              name: "Reino Protista",
              emoji: "🔬",
              color: "#4C6A7A",
              simple: "Grupo de organismos eucariontes que no son plantas, animales ni hongos. Incluye amebas, algas unicelulares y protozoos.",
              full: "Los Protista son eucariontes (con núcleo verdadero) mayormente unicelulares o coloniales. Algunos son autótrofos (algas verdes, diatomeas) y otros heterótrofos (amebas, ciliados). Son los ancestros evolutivos de los otros tres reinos eucariontes. Incluyen patógenos importantes como Plasmodium (malaria).",
            },
            {
              name: "Reino Fungi",
              emoji: "🍄",
              color: "#a16207",
              simple: "El reino de los hongos: ni plantas ni animales. Digieren los nutrientes fuera de su cuerpo y los absorben.",
              full: "Los Fungi son eucariontes heterótrofos por absorción, con pared de quitina. La mayoría son pluricelulares con hifas y micelio. Son los principales descomponedores de materia orgánica. Incluyen levaduras (pan, cerveza), mohos y setas. Son esenciales para el ciclo de nutrientes en los ecosistemas.",
            },
            {
              name: "Reino Plantae",
              emoji: "🌱",
              color: "#4A7A5F",
              simple: "El reino de las plantas: organismos multicelulares que hacen fotosíntesis. Son los productores de los ecosistemas terrestres.",
              full: "El reino Plantae comprende eucariontes multicelulares, autótrofos fotosintetizadores con clorofila a y b, pared de celulosa y alternancia de generaciones. Incluye briófitas (musgos), pteridófitas (helechos), gimnospermas (pinos, cipreses) y angiospermas (plantas con flor y fruto). Son la base de casi todas las cadenas alimentarias terrestres.",
            },
            {
              name: "Reino Animalia",
              emoji: "🐾",
              color: "#ef4444",
              simple: "El reino de los animales: organismos multicelulares, heterótrofos, que se mueven y tienen órganos especializados.",
              full: "El reino Animalia incluye eucariontes multicelulares, heterótrofos por ingestión, sin pared celular. Presentan tejidos, órganos y sistemas especializados. Se dividen en invertebrados (más del 97% de las especies: insectos, moluscos, gusanos) y vertebrados (peces, anfibios, reptiles, aves, mamíferos). El ser humano pertenece a este reino.",
            },
            {
              name: "Procariontes vs Eucariontes",
              emoji: "🔭",
              color: "#6C8A9A",
              simple: "Los procariontes no tienen núcleo definido (bacterias). Los eucariontes tienen núcleo con membrana (plantas, animales, hongos).",
              full: "Los procariontes (Bacteria y Archaea) carecen de núcleo delimitado por membrana, sus ribosomas son 70S y no tienen organelas membranosas. Los eucariontes (Protista, Fungi, Plantae, Animalia) tienen núcleo verdadero con envoltura nuclear, ribosomas 80S y compartimentalización celular con diversas organelas.",
            },
            {
              name: "Unicelulares vs Pluricelulares",
              emoji: "🔬",
              color: "#0891b2",
              simple: "Los unicelulares tienen una sola célula que hace todo (bacterias, amebas). Los pluricelulares tienen muchas células especializadas.",
              full: "Los organismos unicelulares realizan todas las funciones vitales en una sola célula. Los pluricelulares tienen células diferenciadas que forman tejidos, órganos y sistemas. La multicelularidad evolucionó independientemente varias veces. En los pluricelulares, la comunicación y cooperación entre células es fundamental.",
            },
            {
              name: "Autótrofos vs Heterótrofos",
              emoji: "☀️",
              color: "#0e7490",
              simple: "Los autótrofos fabrican su propio alimento (plantas, bacterias fotosintetizadoras). Los heterótrofos necesitan comer otros seres vivos.",
              full: "Los autótrofos sintetizan materia orgánica a partir de sustancias inorgánicas: fotoautótrofos (usan luz solar, como plantas y cianobacterias) o quimioautótrofos (usan energía química). Los heterótrofos obtienen energía consumiendo otros organismos: herbívoros, carnívoros, omnívoros, descomponedores y parásitos.",
            },
          ],
        },
        {
          id: "bacteria-clas",
          name: "Bacteria",
          emoji: "🦠",
          uid: "4a310db79e834e07a69ee8d4892d46ee",
          structures: [
            {
              name: "Dominio Bacteria",
              emoji: "🦠",
              color: "#6B9A7F",
              simple: "Uno de los tres dominios de la vida: organismos unicelulares sin núcleo, los más abundantes del planeta.",
              full: "El dominio Bacteria es el grupo más diverso de procariontes. Tienen pared de peptidoglucano, ribosomas 70S y ADN circular. Se reproducen por fisión binaria. Incluyen patógenos (E. coli, Salmonella, Mycobacterium tuberculosis) y especies beneficiosas (cianobacterias, Lactobacillus, Rhizobium fijador de nitrógeno).",
            },
            {
              name: "Taxonomía Linneana",
              emoji: "📊",
              color: "#5C7A8A",
              simple: "Sistema de clasificación creado por Linneo: dominio, reino, filo, clase, orden, familia, género y especie.",
              full: "Carlos Linneo (1707-1778) creó el sistema de nomenclatura binomial y estableció las categorías taxonómicas. Actualmente se usan 8 rangos principales. La clasificación moderna integra criterios morfológicos, genéticos y evolutivos. La filogenia molecular (comparación de ARNr 16S/18S) ha revolucionado la sistemática en las últimas décadas.",
            },
            {
              name: "Procariontes",
              emoji: "🔬",
              color: "#4C6A7A",
              simple: "Organismos sin núcleo delimitado por membrana: bacterias y arqueas. Son los seres vivos más simples.",
              full: "Los procariontes (Bacteria + Archaea) carecen de núcleo verdadero. Su ADN circular se encuentra en el nucleoide. Sin organelas membranosas. Ribosomas 70S. Se dividen por fisión binaria. Dominan en biomasa total de la Tierra y son esenciales para los ciclos biogeoquímicos (nitrógeno, carbono, azufre).",
            },
            {
              name: "Eucariontes",
              emoji: "🔵",
              color: "#6B7FA8",
              simple: "Organismos con núcleo verdadero: protistas, hongos, plantas y animales.",
              full: "Los eucariontes tienen núcleo delimitado por doble membrana, organelas compartimentalizadas (mitocondria, retículo endoplasmático, aparato de Golgi), ribosomas 80S y ADN lineal organizado en cromosomas con histonas. La endosimbiosis explica el origen de mitocondrias (de alfa-proteobacterias) y cloroplastos (de cianobacterias).",
            },
            {
              name: "Los 5 Reinos",
              emoji: "🏆",
              color: "#f59e0b",
              simple: "Whittaker (1969) dividió la vida en 5 reinos: Monera, Protista, Fungi, Plantae y Animalia.",
              full: "El sistema de 5 reinos se basó en: tipo celular (procariota vs eucariota), forma de nutrición (autótrofa vs heterótrofa) y organización (unicelular vs pluricelular). Hoy se complementa con el sistema de 3 dominios (Woese, 1990): Bacteria, Archaea y Eukarya, basado en ARNr. Ambos sistemas tienen uso en educación.",
            },
            {
              name: "Gram Positiva y Gram Negativa",
              emoji: "🎨",
              color: "#a3e635",
              simple: "Las bacterias Gram positivas se tiñen de morado y las Gram negativas de rosa. Diferencia importante para los antibióticos.",
              full: "La tinción de Gram diferencia dos grupos por la estructura de su pared: Gram+ (pared gruesa de peptidoglucano, sin membrana externa — Staphylococcus, Bacillus) y Gram– (pared delgada + membrana externa de LPS — E. coli, Pseudomonas). Las Gram– son más resistentes a antibióticos por la barrera adicional de su membrana externa.",
            },
            {
              name: "Nomenclatura Binomial",
              emoji: "✍️",
              color: "#6C8A9A",
              simple: "Sistema de dos nombres en latín para cada ser vivo. Creado por Linneo para que todos en el mundo usen el mismo nombre.",
              full: "La nomenclatura binomial usa género (mayúscula, cursiva) + epíteto específico (minúscula, cursiva). Ej.: Homo sapiens (sapiens = sabio), Escherichia coli (en honor al Dr. Escherich), Quercus robur (roble común). Es universal e internacionalmente regulada por el Código Internacional de Nomenclatura. Garantiza que cada especie tenga un nombre único.",
            },
            {
              name: "Especie Biológica",
              emoji: "🎯",
              color: "#6A5A8A",
              simple: "Una especie es el conjunto de individuos que pueden reproducirse entre sí y tener descendencia fértil.",
              full: "El concepto biológico de especie (Mayr, 1942) la define como poblaciones naturales interfértiles aisladas reproductivamente de otros grupos. Limitaciones: no aplica a organismos asexuales (bacterias) ni a fósiles. Existen ~8,7 millones de especies estimadas en la Tierra; solo ~1,9 millones descritas. Unas 150-200 nuevas especies de animales se describen anualmente.",
            },
          ],
        },
        {
          id: "celula-vegetal-clas",
          name: "Célula Vegetal",
          emoji: "🌿",
          uid: "0640c7a14f41400fbdac382c7de1d776",
          structures: [
            {
              name: "Reino Plantae",
              emoji: "🌱",
              color: "#4A7A5F",
              simple: "Las plantas: organismos multicelulares que hacen fotosíntesis gracias a sus cloroplastos.",
              full: "El reino Plantae comprende eucariontes multicelulares autótrofos con clorofila a y b, pared de celulosa y alternancia de generaciones. Se originaron de algas verdes hace ~470 Ma. Se dividen en Briófitas (musgos, sin vasos), Pteridófitas (helechos, con vasos pero sin semilla), Gimnospermas (semilla desnuda) y Angiospermas (semilla en fruto).",
            },
            {
              name: "Célula Vegetal",
              emoji: "🔲",
              color: "#6B9A7F",
              simple: "La célula vegetal tiene cloroplastos, pared celular de celulosa y una gran vacuola que no tienen las células animales.",
              full: "Características exclusivas de la célula vegetal: pared celular de celulosa (soporte y protección), cloroplastos (fotosíntesis, origen endosimbiótico), vacuola central (hasta 90% del volumen, mantiene turgencia) y plasmodesmos (canales citoplasmáticos entre células para transporte simplástico). Comparte con animales: núcleo, mitocondrias, RER, Golgi y ribosomas.",
            },
            {
              name: "Angiospermas",
              emoji: "🌸",
              color: "#9A7B9A",
              simple: "Las plantas con flor son el grupo más diverso del reino vegetal. Sus semillas están protegidas dentro de un fruto.",
              full: "Las angiospermas (~300.000 especies) son el grupo vegetal más diverso y exitoso. La flor permite la polinización por animales (biótica) o viento (abiótica). La doble fecundación produce semilla dentro del fruto. Se dividen en monocotiledóneas (gramíneas, palmeras, lirios) y eudicotiledóneas (rosas, leguminosas, árboles de madera dura).",
            },
            {
              name: "Tejidos Vegetales",
              emoji: "🗂️",
              color: "#5B8A6F",
              simple: "Las plantas tienen tejidos especializados: meristemas para crecer, xilema para agua, floema para azúcares.",
              full: "Los tejidos vegetales incluyen: meristemas (células que se dividen activamente, crecimiento apical y lateral), epidermis (protección, estomas), xilema (transporte ascendente de agua y minerales, células muertas), floema (transporte de fotoasimilados, células vivas: tubos cribosos y células acompañantes) y tejidos fundamentales (parénquima fotosintético, colénquima, esclerénquima).",
            },
            {
              name: "Fotosíntesis",
              emoji: "☀️",
              color: "#86efac",
              simple: "Las plantas convierten luz solar + CO₂ + agua en glucosa y oxígeno mediante la fotosíntesis.",
              full: "La fotosíntesis ocurre en los cloroplastos. Fase luminosa (tilacoides): la luz excita pigmentos del fotosistema II (680 nm) y I (700 nm), genera ATP y NADPH, y libera O₂ por fotólisis del agua. Ciclo de Calvin (estroma): el CO₂ se fija por RuBisCO usando ATP y NADPH para sintetizar glucosa (C₃, C₄ o CAM según la planta).",
            },
            {
              name: "Clasificación de Animales",
              emoji: "🐾",
              color: "#ef4444",
              simple: "Los animales se clasifican en vertebrados (con columna vertebral) e invertebrados (sin columna). Los vertebrados son los peces, anfibios, reptiles, aves y mamíferos.",
              full: "El reino Animalia se divide en invertebrados (~97% de las especies: Porifera, Cnidaria, Platelmintos, Anélidos, Moluscos, Artrópodos, Equinodermos) y Chordata (vertebrados). Los vertebrados incluyen: Actinopterygii (peces óseos), Chondrichthyes (tiburones), Amphibia, Reptilia, Aves y Mammalia. El phylum Arthropoda es el más diverso con >1 millón de especies.",
            },
            {
              name: "Clave Dicotómica",
              emoji: "🔑",
              color: "#4C6A7A",
              simple: "Herramienta para identificar organismos haciendo preguntas de sí/no sobre sus características.",
              full: "La clave dicotómica permite identificar un organismo mediante una serie de preguntas con dos opciones excluyentes. Se basa en caracteres observables (morfología, color, tamaño). En cada paso se elige la opción que corresponde, hasta llegar a la identidad del organismo. Son esenciales en trabajo de campo, botánica y zoología. Las versiones digitales modernas incluyen imágenes e identificación por IA.",
            },
            {
              name: "Filogenia Molecular",
              emoji: "🌳",
              color: "#166534",
              simple: "El estudio de las relaciones evolutivas entre organismos usando comparaciones de sus genes.",
              full: "La filogenia molecular compara secuencias de ARNr (16S en procariontes, 18S en eucariontes), genes mitocondriales y, actualmente, genomas completos para reconstruir las relaciones evolutivas. El árbol de la vida de 3 dominios (Woese, 1990) se basó en la comparación de ARNr 16S. La metagenómica está revelando miles de nuevas especies bacterianas y arqueales no cultivables.",
            },
          ],
        },
      ]}
    />
  );
}
