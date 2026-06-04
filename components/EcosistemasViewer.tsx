"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function EcosistemasViewer() {
  return (
    <SketchfabViewer
      slug="ecosistemas"
      moduleName="Ecosistemas"
      uid="3407138a2ed842079ad5dd5863b72c90"
      title="Ecosistemas"
      subtitle="🌳 Ecología y Biodiversidad"
      accent="#22c55e"
      intro="Un ecosistema es la red de relaciones entre los seres vivos y su ambiente. Explorá las cadenas alimentarias, los niveles tróficos y los ciclos de la materia."
      structures={[
        {
          name: "Productores (Plantas y Algas)",
          emoji: "🌿",
          color: "#4ade80",
          simple: "Son los seres vivos que fabrican su propio alimento con la luz solar.",
          full: "Organismos autótrofos fotosintetizadores que convierten CO₂ + H₂O + energía solar en glucosa y O₂. Son la base de todas las cadenas alimentarias. Incluyen plantas terrestres, algas, fitoplancton y bacterias fotosintéticas. Representan el primer nivel trófico.",
        },
        {
          name: "Consumidores Primarios (Herbívoros)",
          emoji: "🐰",
          color: "#86efac",
          simple: "Son los animales que comen directamente las plantas.",
          full: "Primer nivel de consumidores heterótrofos. Ingieren plantas, algas u otros autótrofos para obtener energía. Ejemplos: conejos, insectos fitófagos, vacas, ciervos, ñus. Solo el ~10% de la energía del nivel anterior se transfiere. La biomasa disminuye a lo largo de la cadena.",
        },
        {
          name: "Consumidores Secundarios (Carnívoros)",
          emoji: "🦊",
          color: "#22c55e",
          simple: "Son los animales que comen a los herbívoros.",
          full: "Segundo nivel de consumidores. Se alimentan de herbívoros. Ejemplos: zorros, serpientes, ranas, muchos peces. Regulan las poblaciones de herbívoros evitando el sobrepastoreo. También hay omnívoros que ocupan varios niveles simultáneamente.",
        },
        {
          name: "Consumidores Terciarios (Superdepredadores)",
          emoji: "🦅",
          color: "#16a34a",
          simple: "Son los depredadores del tope: no los caza nadie más.",
          full: "Tercer nivel de consumidores. Regulan toda la cadena trófica (efecto cascada trófica). Ejemplos: águilas, orcas, tiburones, leones. Su extinción causa explosión de poblaciones en niveles inferiores (ej: ausencia de lobos → explosión de ciervos → sobrepastoreo → erosión del suelo).",
        },
        {
          name: "Descomponedores",
          emoji: "🍄",
          color: "#bbf7d0",
          simple: "Son hongos y bacterias que 'reciclan' la materia de los seres muertos.",
          full: "Hongos y bacterias saprofíticos que descomponen la materia orgánica muerta liberando CO₂, agua y minerales al suelo. Son el cierre de los ciclos biogeoquímicos (C, N, P). Sin descomponedores, los nutrientes quedarían atrapados en materia muerta y la vida se detendría.",
        },
        {
          name: "Flujo de Energía",
          emoji: "⚡",
          color: "#fbbf24",
          simple: "La energía del sol fluye por los seres vivos de un nivel al siguiente, pero se pierde a cada paso.",
          full: "La energía solar entra por la fotosíntesis. En cada nivel trófico se pierde ~90% como calor (respiración, movimiento, calor corporal). Solo ~10% se incorpora a la biomasa del siguiente nivel (regla del 10%). Por eso las cadenas alimentarias tienen máximo 4-5 eslabones y las pirámides de biomasa/energía son siempre más anchas en la base.",
        },
        {
          name: "Ciclo del Carbono",
          emoji: "🔄",
          color: "#65a30d",
          simple: "El carbono pasa de la atmósfera a los seres vivos y vuelve al aire en un ciclo continuo.",
          full: "El CO₂ atmosférico se fija por fotosíntesis → materia orgánica → pasa por la cadena trófica → vuelve como CO₂ por respiración, descomposición y combustión. El carbono también se almacena en océanos, suelos y combustibles fósiles. La quema de fósiles altera el ciclo (calentamiento global).",
        },
        {
          name: "Biodiversidad y Biomas",
          emoji: "🗺️",
          color: "#166534",
          simple: "La biodiversidad es la variedad de seres vivos; los biomas son las grandes zonas del planeta con sus propios ecosistemas.",
          full: "Biodiversidad: genética, específica y ecosistémica. A mayor biodiversidad → mayor estabilidad, resiliencia y servicios ecosistémicos. Biomas principales: selva tropical (máxima biodiversidad), sabana, desierto, tundra, bosque templado, pradera, océanos. La pérdida de biodiversidad por actividad humana es la 6ª extinción masiva.",
        },
      ]}
    />
  );
}
