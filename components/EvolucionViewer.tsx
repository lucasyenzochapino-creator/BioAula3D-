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
      intro="Explorá la caminata de la evolución humana: desde los primeros homínidos hasta el Homo sapiens, a lo largo de millones de años."
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
      ]}
    />
  );
}
