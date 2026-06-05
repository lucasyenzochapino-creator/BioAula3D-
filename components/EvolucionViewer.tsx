"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function EvolucionViewer() {
  return (
    <SketchfabViewer
      slug="evolucion"
      moduleName="Evolución y Selección Natural"
      uid="0b6b3144b32d4467969ba6e56670d896"
      title="Evolución y Selección Natural"
      subtitle="🦕 Selección Natural"
      accent="#f59e0b"
      intro="Explorá la teoría de la evolución: selección natural, adaptaciones y el árbol de la vida."
      structures={[]}
      models={[
        {
          id: "seleccion-natural",
          name: "Toxodon platensis",
          emoji: "🦕",
          uid: "0b6b3144b32d4467969ba6e56670d896",
          structures: [
            {
              name: "Variación Genética",
              emoji: "🧬",
              color: "#f59e0b",
              simple: "Los seres vivos de una misma especie son diferentes entre sí porque tienen distintas versiones de sus genes.",
              full: "La variación genética es el sustrato sobre el que actúa la selección natural. Surge por mutaciones, recombinación meiótica y flujo génico. Sin variación no hay evolución posible: la selección solo puede actuar sobre diferencias hereditarias existentes en la población.",
            },
            {
              name: "Presión Selectiva",
              emoji: "🌿",
              color: "#d97706",
              simple: "Son las condiciones del ambiente (frío, depredadores, alimento escaso) que hacen que algunos individuos sobrevivan mejor que otros.",
              full: "La presión selectiva es cualquier factor ambiental (biótico o abiótico) que afecta diferencialmente la sobrevivencia y reproducción de los individuos. Ejemplos: depredación, competencia, clima, patógenos. Determina qué fenotipos son más aptos en ese contexto.",
            },
            {
              name: "Adaptación",
              emoji: "🦎",
              color: "#b45309",
              simple: "Característica que le ayuda a un ser vivo a sobrevivir en su ambiente. Las adaptaciones se heredan y se acumulan en el tiempo.",
              full: "Una adaptación es un rasgo heredable que aumenta la aptitud biológica (fitness) de un individuo en su ambiente. Puede ser morfológica (camouflage), fisiológica (tolerancia a la sal) o conductual (migración). Surge como resultado de la selección natural actuando sobre generaciones.",
            },
            {
              name: "Especiación",
              emoji: "🌳",
              color: "#92400e",
              simple: "Proceso por el que una especie se divide en dos o más especies nuevas que ya no pueden reproducirse entre sí.",
              full: "La especiación ocurre cuando poblaciones de una misma especie acumulan diferencias genéticas hasta volverse reproductivamente aisladas. Puede ser alopátrica (barrera geográfica), simpátrica (mismo territorio, diferente nicho) o parapátrica. El aislamiento reproductivo es el criterio definitorio.",
            },
            {
              name: "Deriva Génica",
              emoji: "🎲",
              color: "#78350f",
              simple: "Cambio en los genes de una población por simple azar, no por selección. Ocurre más en poblaciones pequeñas.",
              full: "La deriva génica es el cambio aleatorio de las frecuencias alélicas en una población, causado por el azar en el muestreo reproductivo. Sus efectos son mayores en poblaciones pequeñas (efecto cuello de botella, efecto fundador). Puede fijar alelos neutros o incluso deletéreos.",
            },
            {
              name: "Flujo Génico",
              emoji: "🌊",
              color: "#f59e0b",
              simple: "Movimiento de genes entre poblaciones cuando individuos migran y se reproducen en una nueva zona.",
              full: "El flujo génico (migración genética) ocurre cuando individuos o gametos se trasladan entre poblaciones y se reproducen, transfiriendo alelos. Tiende a homogeneizar las frecuencias alélicas entre poblaciones y reduce la diferenciación genética. Se opone a la especiación.",
            },
            {
              name: "Selección Sexual",
              emoji: "🦚",
              color: "#d97706",
              simple: "Tipo de selección donde las características que ayudan a conseguir pareja se vuelven más comunes, aunque a veces perjudican la supervivencia.",
              full: "La selección sexual es una forma de selección natural que actúa sobre el éxito reproductivo. Puede ser intrasexual (competencia entre machos: cuernos, tamaño) o intersexual (elección de hembra: plumas del pavo real, canto). Darwin la propuso para explicar rasgos que parecen desventajosos para la supervivencia.",
            },
            {
              name: "Extinción",
              emoji: "💀",
              color: "#b45309",
              simple: "Desaparición de una especie cuando todos sus individuos mueren y no quedan descendientes.",
              full: "La extinción ocurre cuando la tasa de mortalidad de una especie supera su tasa de natalidad durante el tiempo suficiente. Puede ser causada por cambio climático, pérdida de hábitat, introducción de especies invasoras, sobreexplotación o eventos catastróficos. El registro fósil muestra que más del 99% de todas las especies que existieron ya se han extinguido.",
            },
          ],
        },
        {
          id: "craneo-neandertal",
          name: "Neandertal",
          emoji: "🦴",
          uid: "d1c26eba568f4c1098e5434c992b54b7",
          structures: [
            {
              name: "Dominio Bacteria",
              emoji: "🦠",
              color: "#4ade80",
              simple: "El grupo más numeroso de seres vivos: organismos unicelulares sin núcleo que viven en casi todos los ambientes.",
              full: "Las Bacteria son procariontes con pared de peptidoglucano, ribosomas 70S y ADN circular. Incluyen fotosintetizadores (cianobacterias), fijadores de nitrógeno, patógenos y formas extremófilas. Representan la mayor diversidad metabólica del árbol de la vida.",
            },
            {
              name: "Dominio Archaea",
              emoji: "🔥",
              color: "#f97316",
              simple: "Microorganismos parecidos a las bacterias pero con diferencias importantes en su membrana y genes. Viven en ambientes extremos.",
              full: "Las Archaea son procariontes sin peptidoglucano, con lípidos de membrana con enlaces éter y ARN polimerasas complejas similares a las eucariotas. Incluyen termófilas (>80°C), halófilas, metanógenas y acidófilas. Son el grupo hermano de los Eukarya.",
            },
            {
              name: "Dominio Eukarya",
              emoji: "🔵",
              color: "#3b82f6",
              simple: "Todos los seres vivos con células que tienen un núcleo verdadero con membrana: plantas, animales, hongos y protistas.",
              full: "Los Eukarya poseen células con núcleo delimitado por membrana, organelas membranosas (mitocondrias, retículo endoplasmático, Golgi) y ribosomas 80S. La teoría endosimbiótica explica el origen de mitocondrias y cloroplastos. Incluye 4 reinos: Protista, Fungi, Plantae y Animalia.",
            },
            {
              name: "Animalia",
              emoji: "🐾",
              color: "#ef4444",
              simple: "El reino de los animales: organismos multicelulares, heterótrofos, que se mueven y tienen tejidos especializados.",
              full: "El reino Animalia comprende organismos eucariontes, multicelulares, heterótrofos y en general con movilidad. Se dividen en invertebrados (poríferos, cnidarios, anélidos, artrópodos, moluscos, equinodermos) y vertebrados (peces, anfibios, reptiles, aves, mamíferos). Más de 1,3 millones de especies descritas.",
            },
            {
              name: "Plantae",
              emoji: "🌿",
              color: "#22c55e",
              simple: "El reino de las plantas: organismos multicelulares, autótrofos, que hacen fotosíntesis gracias a la clorofila.",
              full: "El reino Plantae incluye organismos eucariontes, multicelulares y autótrofos fotosintetizadores con clorofila a y b. Evolucionaron de algas verdes. Comprenden briófitas (musgos), pteridófitas (helechos), gimnospermas (coníferas) y angiospermas (plantas con flor). Productores primarios de los ecosistemas terrestres.",
            },
            {
              name: "Fungi",
              emoji: "🍄",
              color: "#a16207",
              simple: "El reino de los hongos: ni plantas ni animales. Se alimentan absorbiendo nutrientes de otros organismos o materia muerta.",
              full: "Los Fungi son eucariontes, heterótrofos por absorción, con pared de quitina. Incluyen levaduras (unicelulares), mohos (filamentosos) y macromicetos (setas). Son los principales descomponedores de los ecosistemas. Forman micorrizas con raíces de plantas y líquenes con algas o cianobacterias.",
            },
            {
              name: "Protista",
              emoji: "🔵",
              color: "#0ea5e9",
              simple: "Grupo muy diverso de organismos eucariontes que no son plantas, animales ni hongos. Incluye amebas, algas y protozoos.",
              full: "Los Protista son eucariontes mayormente unicelulares o coloniales, muy diversos: algas (autótrofos), protozoos (heterótrofos fagótrofos) y hongos mucilaginosos. Es un grupo parafilético. Incluye organismos que causan enfermedades graves: Plasmodium (malaria), Trypanosoma (Chagas), Giardia.",
            },
            {
              name: "Ancestro Común",
              emoji: "🌱",
              color: "#65a30d",
              simple: "El ser vivo del que descienden todas las formas de vida actuales. Vivió hace unos 3.500 millones de años.",
              full: "El LUCA (Last Universal Common Ancestor) es el ancestro hipotético de todos los seres vivos actuales. Se infiere de la universalidad del código genético, el ATP como moneda energética y las secuencias compartidas de ARNr. Vivió probablemente en ambientes de aguas termales hace ~3.500-4.000 millones de años.",
            },
          ],
        },
        {
          id: "hominidos",
          name: "Sahelanthropus",
          emoji: "🦍",
          uid: "fd44d410a4f94143b3de5ce582d2e600",
          structures: [
            {
              name: "Sahelanthropus tchadensis",
              emoji: "🦍",
              color: "#92400e",
              simple: "Uno de los homínidos más antiguos conocidos, vivió hace ~7 millones de años en África central.",
              full: "Sahelanthropus tchadensis ('Toumaï') es considerado uno de los primeros miembros de la línea humana tras la separación del linaje de los chimpancés. Se conoce principalmente por el cráneo TM 266-01-060-1, hallado en Chad en 2001. Presenta una combinación de rasgos primitivos (caja craneal pequeña) y derivados (cara plana, cresta nucal baja), que sugieren bipedismo incipiente.",
            },
            {
              name: "Bipedismo",
              emoji: "🚶",
              color: "#b45309",
              simple: "La capacidad de caminar sobre dos piernas, uno de los rasgos más importantes de la evolución humana.",
              full: "El bipedismo liberó las manos para el uso de herramientas y el transporte de alimentos. Se evidencia en el posicionamiento del foramen magnum (agujero occipital), la curvatura de la columna vertebral y la morfología del pie. Apareció en homínidos mucho antes que el gran aumento del volumen encefálico.",
            },
            {
              name: "Homo sapiens",
              emoji: "🧠",
              color: "#d97706",
              simple: "Nuestra especie: la única del género Homo que sobrevive hoy, caracterizada por su gran cerebro y lenguaje simbólico.",
              full: "Homo sapiens evolucionó en África hace ~300.000 años. Con un volumen craneal de ~1.350 cc, desarrolló lenguaje articulado, pensamiento abstracto, arte y cultura. Salió de África en varias oleadas (la más reciente hace ~70.000 años) y pobló todos los continentes. La secuenciación del genoma de Neandertales y Denisovanos reveló que el Homo sapiens moderno se hibridó con ambos linajes.",
            },
            {
              name: "Australopithecus",
              emoji: "🌍",
              color: "#f59e0b",
              simple: "Grupo de homínidos africanos que vivieron entre 4 y 2 millones de años atrás. Caminaban erguidos pero tenían cerebros pequeños.",
              full: "El género Australopithecus incluye A. afarensis ('Lucy'), A. africanus y otras especies. Presentaban bipedismo desarrollado con un volumen craneal de 430-530 cc. Usaban herramientas de piedra simples (modo 1). Vivían en sabanas y bosques abiertos de África oriental y meridional. Se considera ancestro del género Homo.",
            },
            {
              name: "Neandertal",
              emoji: "🦴",
              color: "#ef4444",
              simple: "Especie humana extinta que vivió en Europa y Asia hasta hace unos 40.000 años. Tenían cerebros grandes y cultura compleja.",
              full: "Homo neanderthalensis vivió en Europa y Asia occidental de ~400.000 a ~40.000 a.p. Tenía una capacidad craneal promedio de ~1.600 cc, mayor que la del Homo sapiens. Fabricaban herramientas de piedra del modo musteriense, enterraban a sus muertos y usaban pigmentos. Se hibridaron con Homo sapiens: el 1-4% del genoma de las personas no africanas actuales es de origen neandertal.",
            },
            {
              name: "Herramientas de Piedra",
              emoji: "🪨",
              color: "#78350f",
              simple: "Las herramientas de piedra son evidencia del desarrollo cognitivo de los homínidos y su capacidad tecnológica.",
              full: "La industria lítica muestra la evolución cognitiva homínida: Modo 1 (Olduvayense, 2,5 Ma) → Modo 2 (Achelense, 1,7 Ma, bifaces) → Modo 3 (Musteriense, neandertales) → Modo 4 (Auriñaciense, Homo sapiens modernos). El manejo de herramientas requiere planificación, coordinación fina y transmisión cultural.",
            },
            {
              name: "Registro Fósil",
              emoji: "🗿",
              color: "#92400e",
              simple: "Los fósiles son la evidencia directa de cómo vivieron y evolucionaron los seres vivos del pasado.",
              full: "El registro fósil es incompleto pero invaluable. Los huesos, dientes, huellas y artefactos permiten reconstruir morfología, dieta, comportamiento y filogenia. Las técnicas de datación (radiocarbono, uranio-plomo, termoluminiscencia) establecen la antigüedad. La paleogenómica (secuenciación de ADN antiguo) ha revolucionado nuestra comprensión de la evolución humana desde 2010.",
            },
            {
              name: "Selección Natural en Humanos",
              emoji: "🧬",
              color: "#b45309",
              simple: "Los humanos también estamos sujetos a la selección natural, que ha moldeado nuestros genes a lo largo del tiempo.",
              full: "Ejemplos de selección natural reciente en humanos: resistencia a la malaria (anemia falciforme, frecuencia del HbS en África subsahariana), persistencia de lactasa en poblaciones con ganadería lechera, variantes de pigmentación en diferentes latitudes (UV solar y síntesis de vitamina D). La medicina moderna ha cambiado la presión selectiva pero no ha eliminado la selección.",
            },
          ],
        },
      ]}
    />
  );
}
