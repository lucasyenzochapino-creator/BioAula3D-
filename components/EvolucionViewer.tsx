"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function EvolucionViewer() {
  return (
    <SketchfabViewer
      slug="evolucion"
      moduleName="Evolución y Selección Natural"
      uid="eda0fb9b28ed4d0399a605f22498819e"
      title="Evolución y Selección Natural"
      subtitle="🌿 Adaptación y Vida"
      accent="#f59e0b"
      intro="Explorá la teoría de la evolución: selección natural, adaptaciones y diversidad de la vida a través de animales reales."
      structures={[]}
      models={[
        {
          id: "galapagos",
          name: "Tortuga Galápagos",
          emoji: "🐢",
          uid: "eda0fb9b28ed4d0399a605f22498819e",
          structures: [
            {
              name: "Selección Natural",
              emoji: "🌿",
              color: "#f59e0b",
              simple: "Los individuos mejor adaptados a su ambiente sobreviven más, se reproducen más y transmiten sus características a sus hijos.",
              full: "Mecanismo evolutivo propuesto por Darwin (1859). Requiere: variación heredable en la población, presión del ambiente que afecta diferencialmente la supervivencia y reproducción, y tiempo. Las tortugas de Galápagos con mayor alcance de cuello sobrevivían mejor en islas con vegetación alta. Es el principal motor de la adaptación.",
            },
            {
              name: "Darwin y el Beagle",
              emoji: "⛵",
              color: "#d97706",
              simple: "Charles Darwin observó en las Islas Galápagos que cada isla tenía tortugas y pinzones diferentes. Eso lo llevó a proponer la evolución.",
              full: "Durante el viaje del HMS Beagle (1831-1836), Darwin observó que las tortugas de distintas islas de Galápagos diferían en la forma del caparazón: las de islas con vegetación baja tenían caparazón domo (no necesitaban estirar el cuello); las de islas áridas tenían caparazón en silla de montar (les permitía estirar el cuello hacia la vegetación alta). Esta observación fue clave para formular la teoría de la selección natural.",
            },
            {
              name: "Biogeografía Insular",
              emoji: "🏝️",
              color: "#b45309",
              simple: "Las islas tienen especies únicas porque los animales que llegaron allí evolucionaron por separado durante miles de años.",
              full: "Las islas son laboratorios naturales de evolución. Al estar aisladas, las poblaciones fundadoras acumulan diferencias genéticas sin flujo génico con el continente. Galápagos tiene 14 especies de tortugas gigantes (o tenía, algunas extintas), cada una adaptada a su isla. Es el mejor ejemplo de especiación alopátrica estudiado por Darwin.",
            },
            {
              name: "Adaptación",
              emoji: "🦎",
              color: "#92400e",
              simple: "Una adaptación es cualquier característica física o de comportamiento que ayuda a un ser vivo a sobrevivir y reproducirse en su ambiente.",
              full: "Un rasgo heredable que aumenta el fitness en un ambiente específico. Puede ser morfológica (caparazón en silla de montar), fisiológica (capacidad de ayunar meses) o conductual (migración, hibernación). Las tortugas de Galápagos tienen adaptaciones como enorme tamaño corporal (ectotermia eficiente), longevidad extrema (>150 años) y capacidad de almacenar agua y grasa.",
            },
            {
              name: "Especiación",
              emoji: "🌳",
              color: "#78350f",
              simple: "Cuando una especie se separa en dos grupos que ya no pueden reproducirse entre sí, se forman dos especies nuevas.",
              full: "La especiación ocurre cuando poblaciones acumulan diferencias genéticas hasta lograr aislamiento reproductivo. Alopátrica: barrera geográfica (océano entre islas). Simpátrica: diferente nicho en el mismo territorio. Las 14 especies de tortugas de Galápagos son el resultado de especiación alopátrica desde un ancestro común que llegó desde Sudamérica hace ~2-3 millones de años.",
            },
            {
              name: "Variación Genética",
              emoji: "🧬",
              color: "#f59e0b",
              simple: "Dentro de una misma especie, los individuos son todos distintos entre sí porque tienen variantes diferentes de sus genes.",
              full: "La variación genética es el sustrato de la evolución. Surge por mutaciones espontáneas, recombinación meiótica y flujo génico. En las tortugas de Galápagos, la variación en la forma del caparazón y el tamaño del cuerpo fue la materia prima sobre la que actuó la selección natural en cada isla con ambiente diferente.",
            },
            {
              name: "Extinción",
              emoji: "💀",
              color: "#b45309",
              simple: "Una especie se extingue cuando mueren todos sus individuos. Las tortugas de Galápagos estuvieron al borde de la extinción por la caza y las especies invasoras.",
              full: "La extinción ocurre cuando la tasa de mortalidad supera la de natalidad de forma sostenida. La tortuga Chelonoidis abingdonii (Pinta) se extinguió en 2012 con la muerte de 'Solitario George'. Causas humanas: caza para alimento en barcos balleneros, introducción de cabras y ratas. La extinción elimina linajes evolutivos únicos e irrecuperables.",
            },
            {
              name: "Ancestro Común",
              emoji: "🌱",
              color: "#d97706",
              simple: "Todas las especies de tortugas de Galápagos descienden de un mismo ancestro que llegó desde el continente hace millones de años.",
              full: "El concepto de ancestro común es central en evolución: todos los seres vivos comparten un ancestro (LUCA, hace ~3.800 Ma). Las tortugas de Galápagos derivan de una tortuga continental (posiblemente Chelonoidis chilensis de Sudamérica) que cruzó el océano. El árbol filogenético de las tortugas insulares reconstruye ese proceso usando ADN mitocondrial.",
            },
          ],
        },
        {
          id: "camaleon",
          name: "Camaleón",
          emoji: "🦎",
          uid: "3877371976754df68d2b93a181bd4893",
          structures: [
            {
              name: "Camuflaje y Mimetismo",
              emoji: "👁️",
              color: "#f59e0b",
              simple: "El camaleón cambia de color para confundirse con su entorno y evitar depredadores. Es una de las adaptaciones más asombrosas del reino animal.",
              full: "El cambio de color en camaleones ocurre por células especializadas: cromatóforos (pigmentos amarillo/rojo), melanóforos (melanina oscura) e iridóforos (cristales de guanina que reflejan luz). Contrario al mito, el objetivo principal NO es el camuflaje sino la comunicación social y la termorregulación. Sí es camuflaje cuando el animal está en reposo.",
            },
            {
              name: "Adaptación Morfológica",
              emoji: "🦎",
              color: "#d97706",
              simple: "El cuerpo del camaleón está lleno de adaptaciones: ojos independientes, lengua lanzadera, patas para trepar y cola prensil.",
              full: "El camaleón tiene: ojos telescópicos giratorios independientes (cobertura 360°), lengua explosiva que puede ser tan larga como el cuerpo y dispararse en 0.07s con una aceleración de 264 m/s², patas zigodáctilas (2+3 dedos opuestos para agarrar ramas), cola prensil y cuerpo lateralmente comprimido. Cada rasgo es una adaptación a la vida arborícola y la caza de insectos.",
            },
            {
              name: "Selección Natural",
              emoji: "🌿",
              color: "#b45309",
              simple: "Los camaleones que mejor se camuflaban o que tenían la lengua más precisa sobrevivían más y tenían más hijos.",
              full: "La selección natural opera sobre variaciones en el fenotipo. Un camaleón con cromatóforos que responden más rápido sobrevive más (menos depredación). Uno con lengua más precisa come más (mayor fitness). Cada adaptación existe porque ancestros con esa variante reprodujeron más. Después de miles de generaciones, estas adaptaciones se vuelven la norma de la población.",
            },
            {
              name: "Presión Selectiva",
              emoji: "🦅",
              color: "#92400e",
              simple: "Los depredadores, la competencia por comida y el clima son las 'fuerzas' que van moldeando a los animales a través del tiempo.",
              full: "Las presiones selectivas son factores ambientales que afectan diferencialmente la supervivencia: depredadores (que seleccionan mejor camuflaje), disponibilidad de insectos (que selecciona lengua más rápida y ojos más agudos), temperatura (que selecciona termorregulación eficiente mediante el cambio de color). Cuando el ambiente cambia, las presiones selectivas cambian y la especie evoluciona en nueva dirección.",
            },
            {
              name: "Evolución Convergente",
              emoji: "🔄",
              color: "#78350f",
              simple: "Distintas especies sin parentesco cercano desarrollan las mismas soluciones a los mismos problemas. Por ejemplo, la lengua adhesiva apareció en camaleones, ranas y salamandras por separado.",
              full: "La evolución convergente ocurre cuando presiones selectivas similares producen soluciones análogas en linajes independientes. La lengua lanzadera pegajosa aparece en camaleones (Reptilia), ranas y salamandras (Amphibia), y en el oso hormiguero (Mammalia): misma función, distinto origen. Son estructuras análogas (misma función, distinto origen) vs homólogas (mismo origen, diferente función).",
            },
            {
              name: "Deriva Génica",
              emoji: "🎲",
              color: "#f59e0b",
              simple: "En poblaciones pequeñas de camaleones aislados, el azar puede fijar características sin importar si son útiles o no.",
              full: "La deriva génica causa cambios aleatorios en las frecuencias alélicas, más intensos en poblaciones pequeñas. En islas pequeñas donde viven pocas decenas de camaleones, un alelo puede fijarse o perderse al azar. Esto explica diferencias entre poblaciones insulares que no parecen tener ventaja adaptativa. La combinación de selección natural + deriva génica + flujo génico explica la diversidad observada.",
            },
            {
              name: "Coevolución",
              emoji: "🔗",
              color: "#d97706",
              simple: "El camaleón y sus presas evolucionaron juntos: mientras el camaleón mejoraba su lengua, los insectos mejoraban sus reflejos para escapar.",
              full: "La coevolución ocurre cuando dos especies ejercen presión selectiva mutua. Depredador-presa: la lengua más rápida del camaleón selecciona moscas con reflejos más rápidos, que a su vez seleccionan lenguas aún más veloces (carrera armamentista evolutiva). Parásito-huésped: también coevolucionan. La coevolución impulsa la diversificación y el aumento de la complejidad biológica.",
            },
            {
              name: "Selección Sexual",
              emoji: "🦚",
              color: "#b45309",
              simple: "Los camaleones macho muestran colores brillantes para atraer hembras y ahuyentar a otros machos. Las hembras eligen al más vibrante.",
              full: "La selección sexual (Darwin, 1871) actúa sobre el éxito reproductivo. En camaleones, los machos despliegan colores vivos durante el cortejo y el enfrentamiento territorial. Las hembras prefieren machos con colores más intensos y contrastantes (señal honesta de salud). Esto explica el dimorfismo sexual: los machos son más coloridos aunque ese color los hace más visibles a depredadores.",
            },
          ],
        },
        {
          id: "jirafa",
          name: "Jirafa",
          emoji: "🦒",
          uid: "7c91bd719e594fcc930f3646db843265",
          structures: [
            {
              name: "El Cuello de la Jirafa",
              emoji: "🦒",
              color: "#f59e0b",
              simple: "El cuello largo de la jirafa es el ejemplo clásico de selección natural: los ancestros con cuellos más largos alcanzaban más hojas y sobrevivían mejor.",
              full: "La explicación darwiniana: en la población ancestral había variación en el largo del cuello. Las jirafas con cuello más largo alcanzaban hojas de acacia inaccesibles para las cortas, tenían más alimento, mayor fitness y más descendientes con cuello largo. Generación tras generación, el cuello promedio aumentó. Nota: investigaciones recientes sugieren que la selección sexual (ventaja en combates con el cuello) también fue un factor importante.",
            },
            {
              name: "Lamarck vs Darwin",
              emoji: "⚖️",
              color: "#d97706",
              simple: "Lamarck creía que la jirafa estiraba su cuello en vida y lo heredaba. Darwin demostró que la variación ya existía y la selección favorecía a los más largos.",
              full: "Lamarck (1809): la herencia de caracteres adquiridos. La jirafa estira el cuello → ese cuello alargado se hereda. Incorrecto: el genotipo no se modifica por el uso/desuso. Darwin (1859): la variación hereditaria ya existe en la población; el ambiente selecciona a los que sobreviven y se reproducen. La teoría sintética moderna (Mendel + Darwin) explica el mecanismo: mutaciones generan variación, la selección actúa sobre ella.",
            },
            {
              name: "Selección Direccional",
              emoji: "➡️",
              color: "#b45309",
              simple: "Cuando el ambiente favorece siempre a los individuos con más de algo (cuello más largo, cuerpo más grande), la población evoluciona en esa dirección.",
              full: "La selección direccional desplaza la distribución fenotípica hacia un extremo. En las jirafas, seleccionó cuellos progresivamente más largos. Otros ejemplos: tamaño corporal creciente en proboscídeos (de Moeritherium 55 Ma a Elephas moderno), resistencia a antibióticos en bacterias, oscurecimiento del ala en la polilla Biston betularia durante la Revolución Industrial.",
            },
            {
              name: "Aptitud Biológica (Fitness)",
              emoji: "💪",
              color: "#92400e",
              simple: "El 'fitness' no es ser el más fuerte, sino el que más hijos fértiles deja. Una jirafa con cuello largo tiene más fitness si come más y se reproduce más.",
              full: "La aptitud biológica (fitness) se mide en número de descendientes fértiles. No es fuerza ni tamaño per se: un ratón puede tener mayor fitness que un elefante si produce 100 crías por año vs 1 cada 4 años. Las jirafas con cuello largo tuvieron mayor fitness en ambientes con acacias altas porque: 1) accedían a más alimento, 2) competían menos con otros herbívoros, 3) tenían ventaja en luchas de apareamiento.",
            },
            {
              name: "Registro Fósil",
              emoji: "🗿",
              color: "#78350f",
              simple: "Los fósiles muestran cómo el cuello de los ancestros de la jirafa fue alargándose gradualmente a lo largo de millones de años.",
              full: "El registro fósil de los jiráfidos (familia Giraffidae) muestra la evolución gradual del cuello: Climacoceras (18 Ma, cuello corto), Samotherium (8 Ma, cuello intermedio), Sivatherium (7 Ma, cuello largo) hasta Giraffa camelopardalis actual. Los fósiles de vértebras cervicales muestran el alargamiento progresivo. El registro fósil es la evidencia directa de la evolución macroscópica.",
            },
            {
              name: "Equilibrio de Hardy-Weinberg",
              emoji: "📐",
              color: "#f59e0b",
              simple: "En una población ideal sin selección ni otros factores, las frecuencias de los genes se mantienen estables entre generaciones.",
              full: "El equilibrio de Hardy-Weinberg (1908): en una población infinita, con apareamiento aleatorio, sin mutación, selección, ni migración, las frecuencias alélicas (p + q = 1) y genotípicas (p² + 2pq + q²) permanecen constantes. Si las jirafas de cuello largo tienen mayor fitness, la frecuencia del alelo 'cuello largo' aumenta generación a generación: no hay equilibrio. El H-W sirve como modelo nulo para detectar evolución.",
            },
            {
              name: "Flujo Génico",
              emoji: "🌊",
              color: "#d97706",
              simple: "Cuando jirafas de una región migran a otra y se reproducen, llevan sus genes con ellas, mezclando las poblaciones.",
              full: "El flujo génico es la transferencia de alelos entre poblaciones por migración. En jirafas, el movimiento entre savanas africanas mezcla los genes de distintas poblaciones. Altos flujos génicos homogenizan las poblaciones (menos diferenciación). Bajos flujos génicos permiten que cada población evolucione independientemente. El flujo génico se opone a la especiación y a la deriva génica.",
            },
            {
              name: "Selección Natural en Humanos",
              emoji: "🧬",
              color: "#b45309",
              simple: "Los humanos también evolucionamos. La selección natural moldeó nuestros genes y sigue actuando, aunque la medicina cambió las reglas.",
              full: "Ejemplos de selección natural reciente en Homo sapiens: anemia falciforme (heterocigosis HbS protege contra malaria en África subsahariana), persistencia de lactasa (apareció ~7.500 a.p. en poblaciones ganaderas europeas y africanas), adaptación a altitud (haplogrupos EPAS1 en tibetanos). La medicina moderna redujo la mortalidad infantil por enfermedades genéticas, cambiando las presiones selectivas pero sin detener la evolución.",
            },
          ],
        },
        {
          id: "lucy",
          name: "Lucy",
          emoji: "🦶",
          uid: "12e9e659c40247a2bf911aa985828937",
          structures: [
            {
              name: "Quién es Lucy",
              emoji: "🌍",
              color: "#92400e",
              simple: "'Lucy' es el Australopithecus afarensis más famoso. Vivió hace 3,2 Ma en Etiopía. Esta reconstrucción del Cleveland Museum muestra su cuerpo completo.",
              full: "AL 288-1 'Lucy' fue hallada en Hadar, Etiopía, en 1974. Tenía 1,1 m de altura y ~29 kg. Caminaba erguida pero también trepaba árboles. La reconstrucción del Cleveland Museum of Natural History (CMNH) es de cuerpo completo con piel y proporciones reales: piernas más cortas que las humanas, brazos más largos y caja torácica en cono.",
            },
            {
              name: "Bipedismo",
              emoji: "🦶",
              color: "#a16207",
              simple: "Lucy caminaba erguida en dos piernas. Las huellas de Laetoli (3,6 Ma) confirman que los Australopithecus ya eran bípedos completos.",
              full: "Las huellas fosilizadas de Laetoli (Tanzania, 3,6 Ma) muestran dos individuos de A. afarensis caminando con zancada alternada completamente humana. La rodilla de Lucy muestra valgo y el pie tenía arco longitudinal. Sus falanges curvas indican habilidad para trepar. El bipedismo liberó las manos y cambió la dieta, la vista y el sistema locomotor.",
            },
            {
              name: "Ancestro del género Homo",
              emoji: "🌱",
              color: "#b45309",
              simple: "De los Australopithecus surgió el género Homo hace 2,5 Ma. Lucy representa el 'eslabón' entre los simios africanos y los humanos.",
              full: "A. afarensis es el candidato más sólido como ancestro directo del género Homo. La transición A. afarensis → Homo habilis (~2,5 Ma) implicó: aumento del cerebro de 450 a 600 cc, reducción de los dientes y fabricación de herramientas de piedra. Antes de Lucy vino Ardipithecus ramidus (4,4 Ma) y antes aún Sahelanthropus tchadensis (7 Ma), el homínido más antiguo conocido.",
            },
            {
              name: "Sahelanthropus (7 Ma)",
              emoji: "⏳",
              color: "#78350f",
              simple: "El homínido más antiguo conocido, Sahelanthropus, vivió hace 7 millones de años en Chad. Es el inicio de la línea evolutiva que llevaría a Lucy y luego a nosotros.",
              full: "Sahelanthropus tchadensis ('Toumaï') es el homínido más antiguo conocido. Tenía cara plana y cresta nucal baja (indicios de bipedismo), pero caja craneal pequeña (~350 cc). Marca la divergencia entre el linaje humano y el de los chimpancés hace 6-7 Ma. La secuencia es: Sahelanthropus → Ardipithecus → Australopithecus → Homo.",
            },
            {
              name: "Dieta y vida social",
              emoji: "🌿",
              color: "#d97706",
              simple: "Lucy comía frutos, tubérculos, semillas y quizás carroña. Vivía en grupos en sabanas arboladas de África oriental.",
              full: "El análisis de isótopos de carbono en dientes de A. afarensis muestra una dieta mixta: 30-40% de hierbas C4 (sabana), frutos y hojas. Sus muelas grandes procesaban alimentos duros. Vivía en grupos de ~20-30 individuos. Un estudio de 2016 propuso que Lucy murió al caer de un árbol, corroborando su vida semi-arborícola.",
            },
            {
              name: "Línea evolutiva completa",
              emoji: "📈",
              color: "#f59e0b",
              simple: "De Lucy a nosotros pasaron millones de años y varias especies: Homo habilis, Homo erectus, Neandertal y finalmente Homo sapiens.",
              full: "La línea evolutiva: Australopithecus afarensis (4-2 Ma) → Homo habilis (2,5 Ma) → Homo erectus (1,8 Ma) → Homo heidelbergensis (0,5 Ma) → Homo neanderthalensis / Homo sapiens (0,3 Ma). El cerebro creció de ~450 cc en Lucy a ~1.350 cc en nosotros. Los siguientes dos modelos (Homo erectus y Neandertal) muestran ese camino.",
            },
          ],
        },
        {
          id: "homo-erectus",
          name: "Homo erectus",
          emoji: "🔥",
          uid: "50f908557cfc410c899112e62414c208",
          structures: [
            {
              name: "Cuerpo moderno",
              emoji: "🏃",
              color: "#d97706",
              simple: "Homo erectus tenía proporciones corporales casi idénticas a las nuestras: piernas largas, brazos cortos y cuerpo erguido alto.",
              full: "Homo erectus ('hombre erguido', 1,9 Ma - 0,1 Ma) fue el primer homínido con proporciones corporales modernas: piernas largas para correr, cuerpo alto (~1,6-1,8 m). El 'niño de Turkana' (KNM-WT 15000, 1,6 Ma) es el esqueleto más completo: estimaba 1,6 m a los ~8 años.",
            },
            {
              name: "Primer éxodo de África",
              emoji: "🌍",
              color: "#b45309",
              simple: "Homo erectus fue el primero en salir de África hace 1,8 Ma. Llegó a Europa, Asia y hasta Indonesia.",
              full: "H. erectus abandonó África hace ~1,8 Ma: Dmanisi (Georgia, 1,8 Ma), Java (1,6 Ma), China (0,8 Ma). Es el primer registro de un homínido fuera de África. Las poblaciones asiáticas sobrevivieron hasta hace ~100.000 años en Java.",
            },
            {
              name: "Dominio del fuego",
              emoji: "🔥",
              color: "#92400e",
              simple: "Homo erectus fue el primero en controlar el fuego hace ~1 Ma. El fuego transformó su dieta, su cerebro y su vida social.",
              full: "Las evidencias más antiguas de uso controlado del fuego: Wonderwerk Cave (Sudáfrica, ~1 Ma) y Gesher Benot Ya'aqov (Israel, ~800.000 a.p.). La cocción aumenta la biodisponibilidad de proteínas y almidones, reduciendo el tiempo de masticación y liberando energía para el cerebro mayor.",
            },
            {
              name: "Herramientas achelenses",
              emoji: "🪓",
              color: "#78350f",
              simple: "Fabricaba bifaces de piedra tallados por ambos lados, herramientas más sofisticadas que cualquier cosa anterior.",
              full: "La industria achelense (modo 2, ~1,7 Ma-0,2 Ma): bifaces ovalados tallados por ambas caras con simetría bilateral. Requieren planificación y habilidad manual. H. erectus también usó lanzas de madera (Schöningen, Alemania, ~400.000 a.p.).",
            },
            {
              name: "Cerebro en expansión",
              emoji: "📈",
              color: "#a16207",
              simple: "El cerebro de Homo erectus era casi el doble del de Australopithecus. Este aumento permitió comportamientos más complejos.",
              full: "El volumen craneal de H. erectus varió de ~600 cc (primeros) a ~1.250 cc (tardíos). Este aumento se correlaciona con: dieta más proteica (carne + cocción), mayor socialización y fabricación de herramientas más complejas.",
            },
          ],
        },
        {
          id: "neandertal",
          name: "Neandertal",
          emoji: "❄️",
          uid: "f7a0890f15654e02b4ec34f5db48f52e",
          structures: [
            {
              name: "Quiénes eran",
              emoji: "❄️",
              color: "#78350f",
              simple: "Los Neandertales fueron una especie humana robusta que vivió en Europa y Asia entre 400.000 y 40.000 años atrás. Eran inteligentes y muy adaptados al frío.",
              full: "Homo neanderthalensis (400.000-40.000 a.p.) habitó Europa, Oriente Medio y Asia Central. Cuerpo robusto y bajo (~1,65 m, ~80 kg) adaptado al frío glacial: huesos gruesos, pecho en barril, nariz grande para calentar el aire. Cerebro grande (~1.600 cc, mayor que el Homo sapiens moderno).",
            },
            {
              name: "Cultura neandertal",
              emoji: "🎨",
              color: "#92400e",
              simple: "Los Neandertales enterraban a sus muertos, usaban ocre, fabricaban ornamentos y posiblemente tenían lenguaje.",
              full: "Evidencias de comportamiento simbólico: enterramientos con flores y ocre (Shanidar, Iraq), ornamentos de garras de águila (Krapina, Croacia, 130.000 a.p.), pinturas rupestres (Cueva de los Aviones, España, >115.000 a.p.). Fabricaban herramientas musterienses.",
            },
            {
              name: "Hibridación con Homo sapiens",
              emoji: "🧬",
              color: "#b45309",
              simple: "Neandertales y Homo sapiens se reprodujeron juntos. El 1-4% del ADN de personas no africanas actuales es de origen neandertal.",
              full: "El análisis del genoma neandertal (Svante Pääbo, Premio Nobel 2022) reveló hibridación con Homo sapiens hace ~60.000 años en Oriente Medio. Los no africanos actuales tienen 1-4% de ADN neandertal.",
            },
            {
              name: "Extinción",
              emoji: "💀",
              color: "#d97706",
              simple: "Los Neandertales desaparecieron hace 40.000 años. Las causas son debatidas: competencia con Homo sapiens, clima o absorción genética.",
              full: "Los Neandertales se extinguieron hace ~40.000-28.000 años. Hipótesis: competencia con Homo sapiens, epidemias, consanguinidad en poblaciones pequeñas, o absorción gradual por hibridación.",
            },
            {
              name: "Homo sapiens",
              emoji: "🧠",
              color: "#a16207",
              simple: "Nuestra especie evolucionó en África hace 300.000 años y es la única del género Homo que sobrevive. Salió de África hace 70.000 años y pobló el planeta.",
              full: "Homo sapiens evolucionó en África hace ~300.000 años. Cráneo redondeado, mentón prominente y esqueleto grácil. La principal oleada migratoria hace ~70.000 años pobló Eurasia, Oceanía y América. Hoy existen ~8.100 millones de Homo sapiens.",
            },
            {
              name: "Evolución del Cerebro",
              emoji: "📈",
              color: "#f59e0b",
              simple: "El cerebro creció de 350 cc en los primeros homínidos a 1.350 cc en Homo sapiens a lo largo de millones de años de evolución.",
              full: "Encefalización: Sahelanthropus ~350 cc → Australopithecus ~450 cc → H. habilis ~600 cc → H. erectus ~1.000 cc → Neandertal ~1.600 cc → H. sapiens ~1.350 cc. El parto humano es difícil por el tamaño craneal del bebé (compromiso obstétrico evolutivo).",
            },
          ],
        },

      ]}
    />
  );
}
