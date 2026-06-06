"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function ADNViewer() {
  return (
    <SketchfabViewer
      slug="adn"
      moduleName="ADN & Genética"
      uid="212e5422645f4432a61dc2f3aac3c8c8"
      title="ADN — Doble Hélice"
      subtitle="🧬 Genética molecular"
      accent="6B7FA8"
      intro="Modelo 3D real de la molécula de ADN. Explorá su estructura de doble hélice y las bases nitrogenadas que guardan nuestro código genético."
      structures={[
        {
          name: "Doble Hélice",
          emoji: "🧬",
          color: "#7A8FA8",
          simple: "El ADN tiene forma de escalera retorcida — como dos tiritas enroscadas juntas.",
          full: "La doble hélice fue descrita por Watson y Crick en 1953. Dos hebras antiparalelas de polinucleótidos se enrollan sobre un eje común. Los giros completos ocurren cada ~3,4 nm (10 pares de bases).",
        },
        {
          name: "Adenina (A)",
          emoji: "🔴",
          color: "#ef4444",
          simple: "Una de las cuatro 'letras' del código genético. La A siempre se une con la T.",
          full: "Base púrica (anillo de purina doble). Se empareja exclusivamente con Timina mediante 2 puentes de hidrógeno (regla de Chargaff). Componente también del ATP, molécula energética universal.",
        },
        {
          name: "Timina (T)",
          emoji: "🔵",
          color: "#6B7FA8",
          simple: "Otra 'letra' del ADN. La T siempre se une con la A.",
          full: "Base pirimidínica exclusiva del ADN (el ARN usa Uracilo en su lugar). Se empareja con Adenina mediante 2 puentes de hidrógeno. Su metilación en posición 5 es mecanismo epigenético en eucariotas.",
        },
        {
          name: "Guanina (G)",
          emoji: "🟢",
          color: "#5B8A6F",
          simple: "La G siempre se une con la C — y ese lazo es muy fuerte, con 3 conexiones.",
          full: "Base púrica (bicíclica). Se empareja con Citosina a través de 3 puentes de hidrógeno, creando una unión más fuerte que el par A-T. Alta proporción G-C eleva la temperatura de fusión del ADN.",
        },
        {
          name: "Citosina (C)",
          emoji: "🟡",
          color: "#f59e0b",
          simple: "La C siempre va con la G. Juntas forman un lazo muy resistente.",
          full: "Base pirimidínica monocíclica. Se empareja con Guanina mediante 3 puentes de hidrógeno. La metilación de la citosina (5-metilcitosina) es una modificación epigenética que silencia genes.",
        },
        {
          name: "Fosfato",
          emoji: "⚪",
          color: "#5C6472",
          simple: "Forma el 'esqueleto' externo de la escalera del ADN, dándole la estructura.",
          full: "Grupo fosfato (PO₄³⁻) que une los desoxirribosas de nucleótidos consecutivos mediante enlace fosfodiéster (3'→5'). Carga negativa que hace al ADN soluble y repele otras moléculas negativamente cargadas.",
        },
        {
          name: "Desoxirribosa",
          emoji: "🍬",
          color: "#8A7A5C",
          simple: "El azúcar que forma parte del esqueleto del ADN en cada escalón.",
          full: "Pentosa (monosacárido de 5 carbonos) que carece de grupo -OH en el carbono 2' (de ahí 'desoxi'). Forma el armazón carbohidratado del nucleótido junto con el fosfato. Diferencia química clave entre ADN y ARN.",
        },
        {
          name: "Puentes de Hidrógeno",
          emoji: "🔗",
          color: "#e879f9",
          simple: "Son las 'conexiones' invisibles que mantienen unidas las dos tiritas del ADN.",
          full: "Interacciones no covalentes débiles entre los pares de bases complementarias. Su carácter débil pero numeroso permite abrir las hebras durante replicación y transcripción sin romper la molécula completa.",
        },
        {
          name: "Sentido 5'→3'",
          emoji: "➡️",
          color: "#a78bfa",
          simple: "Indica la dirección en que se 'lee' el ADN, como leer de izquierda a derecha.",
          full: "Las dos hebras del ADN son antiparalelas: una corre 5'→3' y la otra 3'→5'. La ADN polimerasa solo puede añadir nucleótidos al extremo 3'-OH libre. Esto determina la hebra continua y la discontinua (fragmentos de Okazaki) en la replicación.",
        },
      ]}
    />
  );
}
