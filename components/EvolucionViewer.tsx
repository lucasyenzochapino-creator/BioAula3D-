"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function EvolucionViewer() {
  return (
    <SketchfabViewer
      slug="evolucion"
      moduleName="Evolución y Selección Natural"
      uid=""
      title="Evolución y Selección Natural"
      subtitle="🌿 Adaptación y Vida"
      accent="#f59e0b"
      intro="Explorá la evolución humana, la historia de los vertebrados, el caballo como ejemplo clásico de macroevolución y la selección natural de Darwin."
      structures={[]}
      models={[
        {
          id: "evolucion-humana",
          name: "Evolución Humana",
          emoji: "🦴",
          imageUrl: "/evolution-humana.png",
          structures: [
            {
              name: "Sahelanthropus tchadensis",
              emoji: "⏳",
              color: "#92400e",
              simple: "El homínido más antiguo conocido. Vivió hace 7-6 millones de años en Chad. Ya tenía rasgos que lo separan de los chimpancés.",
              full: "Sahelanthropus tchadensis ('Toumaï') es el homínido más antiguo conocido. Tenía cara plana, cresta nucal baja e indicios de bipedismo, pero cráneo pequeño (~350 cc). Marca la divergencia entre el linaje humano y el de los chimpancés hace 6-7 Ma.",
            },
            {
              name: "Ardipithecus ramidus",
              emoji: "🌿",
              color: "#b45309",
              simple: "Vivió hace 4,4 millones de años en Etiopía. Podía caminar erguido pero también trepar árboles con facilidad.",
              full: "Ardipithecus ramidus ('Ardi') fue descubierto en Etiopía. Caminaba erguido ocasionalmente, pero su pie tenía el dedo gordo oponible para trepar árboles. Cerebro de ~350 cc. Es el eslabón entre los primeros homínidos y los Australopithecus.",
            },
            {
              name: "Australopithecus afarensis — Lucy",
              emoji: "🦶",
              color: "#d97706",
              simple: "Lucy vivió hace 3,2 millones de años. Caminaba erguida en dos piernas, pero todavía trepaba árboles. Es el ancestro más conocido del género Homo.",
              full: "AL 288-1 'Lucy' fue hallada en Hadar, Etiopía, en 1974. Tenía 1,1 m de altura y ~29 kg. Las huellas de Laetoli (3,6 Ma) confirman que A. afarensis ya era bípedo completo. La secuencia es: Sahelanthropus → Ardipithecus → Australopithecus → Homo.",
            },
            {
              name: "Homo habilis",
              emoji: "🪨",
              color: "#a16207",
              simple: "El primer miembro del género Homo. Fabricó las primeras herramientas de piedra hace 2,4 millones de años.",
              full: "Homo habilis (2,4-1,4 Ma) fue el primer fabricante de herramientas de piedra (industria olduvayense). Su cerebro creció a ~600 cc. Fue el primero en consumir carroña de grandes animales usando lascas de piedra para cortar la carne.",
            },
            {
              name: "Homo erectus",
              emoji: "🔥",
              color: "#f59e0b",
              simple: "El primero en salir de África hace 1,9 Ma. Dominó el fuego y tenía proporciones corporales casi idénticas a las nuestras.",
              full: "Homo erectus (1,9 Ma-110.000 a.p.) fue el primer homínido con proporciones modernas: piernas largas, cuerpo alto (~1,7 m). Salió de África y llegó a Europa, Asia e Indonesia. Usó el fuego hace ~1 Ma y fabricó bifaces achelenses.",
            },
            {
              name: "Homo neanderthalensis",
              emoji: "❄️",
              color: "#78350f",
              simple: "Los Neandertales vivieron en Europa hace 400.000-40.000 años. Tenían cerebro grande, enterraban a sus muertos y poseían cultura.",
              full: "Homo neanderthalensis fue robusto y adaptado al frío glacial europeo. Cerebro de ~1.600 cc (mayor que el nuestro). Se hibridó con Homo sapiens: el 1-4% del ADN de personas no africanas actuales es de origen neandertal. Se extinguió hace ~40.000 años.",
            },
            {
              name: "Homo sapiens",
              emoji: "🧠",
              color: "#f59e0b",
              simple: "Nuestra especie. Evolucionó en África hace 300.000 años y pobló todo el planeta hace ~70.000 años. Somos la única especie del género Homo que sobrevive.",
              full: "Homo sapiens evolucionó en África hace ~300.000 años. Cráneo redondeado, mentón prominente y esqueleto grácil. La oleada migratoria fuera de África hace ~70.000 años pobló Eurasia, Oceanía y América. Hoy existen ~8.100 millones de Homo sapiens.",
            },
          ],
        },

        {
          id: "vertebrados",
          name: "Vertebrados",
          emoji: "🐟",
          imageUrl: "/evolution-vertebrados.svg",
          structures: [
            {
              name: "Peces sin mandíbula — Agnatos",
              emoji: "🐟",
              color: "#1d4ed8",
              simple: "Los primeros vertebrados. Aparecieron hace 530 Ma en los océanos del Cámbrico. No tenían mandíbula ni aletas pares — se alimentaban filtrando agua.",
              full: "Los agnatos (lampreas y mixinas actuales) son los vertebrados más primitivos. Aparecieron en el Cámbrico (~530 Ma). Carecen de mandíbula (agnatos = sin mandíbula) y de aletas pares. La columna vertebral ya está presente como estructura de soporte. Su sistema nervioso y cerebro son simples pero ya muestran las regiones básicas presentes en todos los vertebrados.",
            },
            {
              name: "Tiktaalik — la transición tierra-agua",
              emoji: "🦎",
              color: "#047857",
              simple: "Vivió hace 375 Ma. Es el 'eslabón perdido' entre los peces con aletas y los primeros tetrápodos. Tenía aletas musculosas que podía usar como patas para apoyarse.",
              full: "Tiktaalik roseae fue descubierto en Canadá en 2004. Tenía cuello (algo único en peces), costillas robustas para respirar fuera del agua, y aletas pectorales con húmero, radio y cúbito — los mismos huesos de nuestro brazo. Podía 'hacer lagartijas' con esas aletas. Representa el momento en que los vertebrados comenzaron a explorar la tierra firme.",
            },
            {
              name: "Ichthyostega — primer tetrápodo",
              emoji: "🐸",
              color: "#0e7490",
              simple: "Vivió hace 365 Ma en Groenlandia. Fue uno de los primeros animales con cuatro patas verdaderas. Vivía en tierra y agua, como una mezcla entre pez y salamandra.",
              full: "Ichthyostega tenía 8 dedos en las patas traseras — los vertebrados primitivos no seguían la regla de 5 dedos que predomina hoy. Tenía pulmones y podía respirar aire, pero también conservaba cola de pez y escamas. Su columna vertebral estaba adaptada para soportar el peso del cuerpo fuera del agua — un cambio estructural fundamental.",
            },
            {
              name: "Reptiles — el huevo amniótico",
              emoji: "🦎",
              color: "#b45309",
              simple: "Hace 310 Ma, los reptiles desarrollaron el huevo amniótico: un huevo con cáscara que protege al embrión y lo hidrata sin necesitar agua. Esto los liberó completamente del agua.",
              full: "El huevo amniótico es una de las mayores innovaciones de la evolución. Tiene 4 membranas: amnios (protege al embrión en líquido), corion (intercambio de gases), alantoides (almacena desechos), y saco vitelino (nutrición). Esta 'pecera portátil' permitió a los reptiles colonizar ambientes áridos. De los reptiles primitivos derivan todos los reptiles actuales, las aves y los mamíferos.",
            },
            {
              name: "Archaeopteryx — origen de las aves",
              emoji: "🦅",
              color: "#7c3aed",
              simple: "Vivió hace 150 Ma. Es la transición entre los dinosaurios terópodos y las aves modernas. Tenía plumas y podía volar, pero también dientes, garras y cola ósea de dinosaurio.",
              full: "Archaeopteryx lithographica fue descubierto en Baviera en 1861. Mide ~50 cm y combina caracteres de reptil (dientes, garras en las alas, cola larga con vértebras) con caracteres de ave (plumas asimétricas para volar, clavículas fusionadas en furcula). Hoy se sabe que las aves son dinosaurios terópodos que sobrevivieron a la extinción del K-Pg hace 66 Ma.",
            },
            {
              name: "Cinodonto — ancestro de los mamíferos",
              emoji: "🦁",
              color: "#dc2626",
              simple: "Los cinodontos vivieron hace 250-120 Ma. Eran reptiles mamiferoides que ya tenían características de mamífero: pelo, mandíbula con un solo hueso y posiblemente sangre caliente.",
              full: "Los cinodontos (del griego 'diente de perro') son el grupo del que evolucionaron los mamíferos. Tenían mandíbula inferior formada por un solo hueso (el dentario — igual que nosotros), mientras que los 2 huesos restantes migraron al oído medio como martillo y yunque. Esta transformación es un ejemplo extraordinario de cambio evolutivo documentado en el registro fósil. Probablemente eran endotermos (sangre caliente).",
            },
            {
              name: "Mamíferos placentados — radiación adaptativa",
              emoji: "🐘",
              color: "#991b1b",
              simple: "Tras la extinción de los dinosaurios hace 66 Ma, los mamíferos placentados se diversificaron rápidamente en todos los nichos ecológicos: ballenas, murciélagos, elefantes, humanos.",
              full: "La extinción masiva del Cretácico-Paleógeno (K-Pg) eliminó al 76% de las especies, incluidos todos los dinosaurios no avianos. Los mamíferos placentados, que ya existían pero eran pequeños y nocturnos, aprovecharon los nichos vacíos. En solo 10 millones de años (poco en términos evolutivos) evolucionaron hacia formas tan diversas como cetáceos (ballenas), quirópteros (murciélagos), proboscídeos (elefantes) y primates (nosotros).",
            },
          ],
        },

        {
          id: "caballo",
          name: "Evolución del Caballo",
          emoji: "🐴",
          imageUrl: "/evolution-caballo.svg",
          structures: [
            {
              name: "Eohippus — el caballo del amanecer",
              emoji: "🌅",
              color: "#854d0e",
              simple: "El ancestro del caballo moderno. Vivió hace 55 Ma en Norteamérica. Era del tamaño de un zorro, con 4 dedos en las patas delanteras y 3 en las traseras.",
              full: "Eohippus (también llamado Hyracotherium) medía apenas 30-60 cm de altura al lomo — del tamaño de un fox terrier. Vivía en bosques tropicales y se alimentaba de hojas blandas. Tenía 4 dedos en las patas delanteras y 3 en las traseras, todos con pequeñas pezuñas. No tenía los molares de esmalte duro que tienen los caballos modernos — sus dientes eran aptos para hojas, no para hierba.",
            },
            {
              name: "Mesohippus — tres dedos iguales",
              emoji: "🌿",
              color: "#92400e",
              simple: "Vivió hace 37 Ma. Ya tenía 3 dedos en todas las patas (el dedo central más grande). Medía ~60 cm y comenzó a comer hierbas más duras.",
              full: "Mesohippus ('caballo intermedio') es el género del Oligoceno que mejor documenta la transición a 3 dedos. El dedo central creció y los laterales se redujeron pero aún tocaban el suelo en terrenos blandos. El cerebro aumentó en tamaño, especialmente en las áreas relacionadas con la visión y el procesamiento sensorial. Comenzó a diversificarse el esmalte dental para procesar pastos más abrasivos.",
            },
            {
              name: "Merychippus — el pastador de praderas",
              emoji: "🌾",
              color: "#a16207",
              simple: "Vivió hace 17 Ma. Fue el primer caballo verdaderamente adaptado a comer hierba. Sus molares tenían capas de esmalte duro para resistir el desgaste del silicio de los pastos.",
              full: "Merychippus ('caballo rumiante') marcó un cambio crucial: el clima del Mioceno enfrió América del Norte y los bosques tropicales cedieron a pastizales abiertos. Merychippus se adaptó: molares de corona alta (hipsodonte) que crecen desde la raíz para compensar el desgaste, cuello más largo para pastar, y ojos laterales para ver depredadores en campo abierto. Solo el dedo central toca el suelo.",
            },
            {
              name: "Pliohippus — proto-casco y velocidad",
              emoji: "💨",
              color: "#b45309",
              simple: "Vivió hace 5 Ma. El primer équido con un solo dedo funcional por pata — los dedos laterales solo quedan como vestigios. Su velocidad aumentó notablemente.",
              full: "Pliohippus es el primer équido que usa exclusivamente el dedo central para caminar, con los dedos 2 y 4 reducidos a 'espolones' vestigiales que no tocan el suelo. Esta modificación aumentó la longitud del paso y la velocidad de carrera en los pastizales abiertos donde debía escapar de félidos y cánidos. Medía ~130 cm — ya claramente reconocible como pariente del caballo moderno.",
            },
            {
              name: "Equus — el caballo moderno",
              emoji: "🐎",
              color: "#d97706",
              simple: "Evolucionó hace 4 Ma en Norteamérica. Un solo dedo en cada pata, completamente transformado en casco. Se dispersó por todos los continentes (excepto Australia y Antártida).",
              full: "Equus caballus tiene un único dedo en cada pata (el casco es la uña modificada del dedo 3). Los restos de los dedos 2 y 4 sobreviven como los 'huesos de los espolones' dentro de la pata — órganos vestigiales que evidencian la historia evolutiva. Paradójicamente, el caballo se extinguió en América hace ~10.000 años (probablemente por caza humana y cambio climático) y fue reintroducido por los españoles en el siglo XVI.",
            },
            {
              name: "Lecciones evolutivas del caballo",
              emoji: "📚",
              color: "#f59e0b",
              simple: "La evolución del caballo muestra que la evolución NO es lineal (hubo muchas ramas extintas) y que los cambios ambientales (bosques → pastizales) dirigen la selección natural.",
              full: "La secuencia Eohippus → Equus parece lineal en los museos, pero en realidad el árbol filogenético del caballo tiene decenas de ramas extintas. Hubo caballos con 3 dedos que coexistieron con caballos con 1 dedo. La evolución no tiene 'dirección' predeterminada — responde al ambiente. El cambio de bosques a pastizales en el Mioceno seleccionó favorablemente: molares más duros, patas más rápidas, ojos más separados, cuerpos más grandes. Estas tendencias surgieron independientemente en diferentes ramas.",
            },
          ],
        },

        {
          id: "seleccion-natural",
          name: "Selección Natural",
          emoji: "🌍",
          imageUrl: "/evolution-humana.png",
          structures: [
            {
              name: "¿Qué es la selección natural?",
              emoji: "🔬",
              color: "#0891b2",
              simple: "Es el mecanismo central de la evolución. Los individuos con características más ventajosas para su ambiente sobreviven más y dejan más descendencia. Esas características se vuelven más comunes.",
              full: "Charles Darwin formuló la selección natural en 1859 en 'El origen de las especies'. Requiere 3 condiciones: (1) Variación: los individuos de una población difieren entre sí. (2) Herencia: esas diferencias son heredables. (3) Selección diferencial: algunos individuos sobreviven y se reproducen más que otros. El resultado a lo largo de generaciones es la adaptación de la población al ambiente.",
            },
            {
              name: "Pinzones de Darwin — radiación adaptativa",
              emoji: "🐦",
              color: "#0e7490",
              simple: "Darwin observó 13 especies de pinzones en las Islas Galápagos, todas descendientes de un único ancestro continental. Cada especie tiene un pico distinto adaptado a su fuente de alimento.",
              full: "Los pinzones de Darwin son el ejemplo más famoso de radiación adaptativa. Un ancestro colonizó las Galápagos. Sin competidores, sus descendientes se diversificaron en diferentes islas y nichos: picos finos para insectos (G. fuliginosa), picos anchos para semillas duras (G. magnirostris), pico de madera similar al de los pájaros carpinteros (C. pallidus). El aislamiento geográfico + selección natural = especiación.",
            },
            {
              name: "Polilla del abedul — evolución en tiempo real",
              emoji: "🦋",
              color: "#1d4ed8",
              simple: "Durante la Revolución Industrial en Inglaterra, la polilla Biston betularia cambió de blanca a negra en pocas décadas. Los pájaros comían las polillas blancas en los árboles ennegrecidos por el hollín.",
              full: "Biston betularia existe en dos formas: carbonaria (negra) y typica (blanca con manchas). Antes de 1850, >98% eran blancas, camufladas en los líquenes blancos de los árboles. La Revolución Industrial cubrió los árboles de hollín: las polillas blancas se volvieron visibles y los pájaros las comieron. Para 1895, el 98% eran negras. Cuando se limpió el hollín con regulaciones ambientales en 1970, las blancas volvieron a ser dominantes. Evolución documentada en ~150 años.",
            },
            {
              name: "Resistencia antibiótica — evolución bacterial",
              emoji: "🦠",
              color: "#dc2626",
              simple: "Las bacterias desarrollan resistencia a los antibióticos por selección natural en pocos días. La bacteria que sobrevive al antibiótico transmite esa resistencia a su descendencia.",
              full: "Las bacterias se reproducen cada 20-30 minutos. Una mutación aleatoria puede conferir resistencia a un antibiótico. Si se usa el antibiótico, todas las bacterias sensibles mueren y solo la resistente sobrevive — y se reproduce. En días, toda la población es resistente. Por eso es crítico terminar el tratamiento completo: no dejar sobrevivientes que puedan heredar la resistencia. Staphylococcus aureus resistente a meticilina (MRSA) mata más personas en EE.UU. que el VIH.",
            },
            {
              name: "Selección artificial — lo que hacemos los humanos",
              emoji: "🌽",
              color: "#d97706",
              simple: "Los humanos aplicamos selección artificial al elegir qué plantas y animales se reproducen. El maíz moderno (Zea mays) es irreconocible comparado con el teosinte ancestral gracias a 10.000 años de selección.",
              full: "La selección artificial es como la natural, pero el 'ambiente' es el criterio humano. El teosinte (ancestro silvestre del maíz) tiene mazorcas de 5-12 granos. El maíz moderno tiene 500-800 granos. En perros, todos los ~400 razas actuales descienden del lobo gris en ~15.000 años de selección artificial. Darwin usó la selección artificial como prueba de que la variación + selección producen cambios dramáticos. Si el humano puede crear la diferencia entre un chihuahua y un gran danés en 15.000 años, la naturaleza puede hacer mucho más en millones.",
            },
            {
              name: "Coevolución — evolución en pareja",
              emoji: "🌸",
              color: "#7c3aed",
              simple: "Dos especies pueden evolucionar juntas en respuesta una a la otra. Las flores y sus polinizadores coevolucionaron: flor roja + pico largo de colibrí; flor nocturna blanca + mariposa nocturna.",
              full: "La coevolución ocurre cuando dos especies ejercen presión selectiva mutua a lo largo del tiempo. Ejemplos: (1) Carrera armamentista: la presa evoluciona defensas, el depredador evoluciona contramedidas. La tortuga evoluciona caparazón, el águila aprende a dejar caer la tortuga desde altura. (2) Mutualismo: la flor de Madagascar Angraecum sesquipedale tiene néctar a 30 cm de profundidad — Darwin predijo que debía existir una polilla con trompa de 30 cm. 41 años después se descubrió Xanthopan morganii praedicta.",
            },
          ],
        },
      ]}
    />
  );
}
