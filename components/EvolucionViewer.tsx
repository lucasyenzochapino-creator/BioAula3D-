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
          id: "hominidos",
          name: "Marcha del Progreso",
          emoji: "🚶",
          uid: "7b510388e19d40ee8a703ecd707bdc42",
          structures: [
            {
              name: "Sahelanthropus (7 Ma)",
              emoji: "🌍",
              color: "#92400e",
              simple: "El homínido más antiguo conocido. Vivió hace ~7 millones de años en África central. Era bípedo incipiente con cerebro pequeño.",
              full: "Sahelanthropus tchadensis ('Toumaï') es el homínido más antiguo conocido. Hallado en Chad en 2001. Tenía cara plana y cresta nucal baja (indicios de bipedismo), pero caja craneal pequeña (~350 cc, similar a un chimpancé). Marca la separación del linaje humano del de los chimpancés hace 6-7 millones de años.",
            },
            {
              name: "Australopithecus (4–2 Ma)",
              emoji: "🦶",
              color: "#a16207",
              simple: "Caminaban erguidos en dos piernas pero tenían cerebros pequeños. El más famoso es 'Lucy', hallada en Etiopía en 1974.",
              full: "El género Australopithecus (4-2 Ma) presentaba bipedismo completo pero volumen craneal pequeño (430-530 cc). A. afarensis ('Lucy', 3.2 Ma) tenía cara prognata y brazos largos. A. africanus, A. robustus y A. boisei muestran diversidad adaptativa. Usaban herramientas de piedra simples. Se consideran ancestros directos del género Homo.",
            },
            {
              name: "Homo habilis (2.5 Ma)",
              emoji: "🪨",
              color: "#b45309",
              simple: "El primer miembro del género Homo. Fabricaba herramientas de piedra y tenía el cerebro más grande que los Australopithecus.",
              full: "Homo habilis ('hombre hábil', 2.5-1.5 Ma) tenía un volumen craneal de 510-600 cc. Fabricó las primeras herramientas de piedra documentadas (industria olduvayense/modo 1): lascas y núcleos para cortar carne. Coexistió con Australopithecus robustus en África oriental. Representa la transición entre Australopithecus y Homo erectus.",
            },
            {
              name: "Homo erectus (1.8 Ma)",
              emoji: "🔥",
              color: "#d97706",
              simple: "Primer homínido que salió de África. Dominó el fuego, fabricó herramientas más sofisticadas y llegó hasta Asia y Europa.",
              full: "Homo erectus ('hombre erguido', 1.8 Ma - 0.1 Ma) tenía volumen craneal de 900-1100 cc, cuerpo moderno con piernas largas para el trote. Fue el primer homínido en salir de África (hasta China e Indonesia). Dominó el fuego (~1 Ma), fabricó bifaces achelenses (modo 2) y vivió en grupos sociales organizados. Persiste como H. georgicus, H. antecessor, etc.",
            },
            {
              name: "Homo heidelbergensis (0.5 Ma)",
              emoji: "🧊",
              color: "#f59e0b",
              simple: "Ancestro común de los Neandertales y los Homo sapiens. Vivía en Europa y África y fabricaba herramientas avanzadas.",
              full: "Homo heidelbergensis (0.5-0.2 Ma) tenía volumen craneal de 1100-1400 cc, casi como el Homo sapiens. Es el ancestro común de Neandertales (Europa) y Homo sapiens (África). Fabricaba lanzas de madera (las de Schöningen, 400.000 a.p., son las más antiguas del mundo) y herramientas musterienses. Cazaba grandes presas en grupo.",
            },
            {
              name: "Homo neanderthalensis (0.4–0.04 Ma)",
              emoji: "❄️",
              color: "#78350f",
              simple: "Especie humana extinta. Vivió en Europa y Asia hasta hace 40.000 años. Tenía cerebros grandes, enterraba a sus muertos y usaba arte.",
              full: "Homo neanderthalensis (400.000-40.000 a.p.) tenía un volumen craneal promedio de 1.600 cc (mayor que el Homo sapiens). Cuerpo robusto adaptado al frío glacial. Fabricaba herramientas musterienses (modo 3), enterraba a sus muertos con flores y ocre, usaba pigmentos corporales. Se hibridó con Homo sapiens: el 1-4% del ADN de las personas no africanas actuales es de origen neandertal.",
            },
            {
              name: "Homo sapiens (0.3 Ma – hoy)",
              emoji: "🧠",
              color: "#b45309",
              simple: "Nuestra especie. Evolucionó en África hace 300.000 años y colonizó todos los continentes. Se distingue por el lenguaje, el arte y la cultura.",
              full: "Homo sapiens ('hombre sabio') evolucionó en África hace ~300.000 años. Volumen craneal promedio ~1.350 cc con forma redondeada (globular). Desarrolló lenguaje articulado complejo, pensamiento abstracto, arte rupestre, música e instrumentos musicales. Salió de África en varias oleadas; la principal hace ~70.000 años pobló Europa, Asia, Oceanía y América. Es la única especie del género Homo que sobrevive.",
            },
            {
              name: "Evolución del Cerebro",
              emoji: "📈",
              color: "#92400e",
              simple: "A lo largo de la evolución humana, el cerebro fue creciendo progresivamente: de 350 cc en Sahelanthropus a 1.350 cc en Homo sapiens.",
              full: "La encefalización es la tendencia evolutiva al aumento del tamaño cerebral relativo al cuerpo. Sahelanthropus: ~350 cc → Australopithecus: ~450 cc → H. habilis: ~600 cc → H. erectus: ~1000 cc → H. sapiens: ~1350 cc. El cerebro humano tiene un córtex prefrontal muy desarrollado (planificación, lenguaje, empatía). El parto humano es difícil por el tamaño craneal del bebé (compromiso obstétrico).",
            },
          ],
        },

      ]}
    />
  );
}
