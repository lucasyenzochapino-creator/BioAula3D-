"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function SistemaReproductorViewer() {
  return (
    <SketchfabViewer
      slug="reproductor-femenino"
      moduleName="Sistema Reproductor Femenino"
      uid="2ad78b1785c94bac83dcb623b53748f5"
      title="Sistema Reproductor Femenino"
      subtitle="♀ Anatomía Femenina"
      accent="#f472b6"
      intro="El sistema reproductor femenino produce óvulos y, en caso de fecundación, alberga el desarrollo del embrión. Explorá ovarios, útero, ciclo menstrual y fecundación en 3D."
      structures={[
        {
          name: "Ovarios",
          emoji: "🌸",
          color: "#f472b6",
          simple: "Son dos órganos que producen los óvulos y las hormonas femeninas.",
          full: "Par de glándulas de ~3×2 cm. Contienen folículos ováricos en distintos estadios de maduración. Producen estrógenos y progesterona bajo control hipofisario (FSH/LH). En cada ciclo menstrual un folículo (Graaf) madura y libera un oocito II en la ovulación.",
        },
        {
          name: "Trompa de Falopio",
          emoji: "〰️",
          color: "#fb7185",
          simple: "Es el tubo que lleva el óvulo desde el ovario hasta el útero. Aquí ocurre la fecundación.",
          full: "Conducto muscular de ~10 cm con 4 segmentos: infundíbulo (fimbrias), ampolla (sitio de fecundación), istmo y parte uterina. El epitelio ciliar y el peristaltismo transportan el gameto. El embarazo ectópico ocurre si el embrión se implanta en la trompa.",
        },
        {
          name: "Útero",
          emoji: "🫙",
          color: "#e879f9",
          simple: "Es el órgano donde se desarrolla el bebé durante el embarazo.",
          full: "Órgano muscular hueco de ~7×5 cm (no gestante). Tres capas: endometrio (mucosa interna que se renueva en el ciclo), miometrio (músculo liso — se contrae en el parto) y perimetrio (serosa). El cuello uterino (cérvix) conecta con la vagina.",
        },
        {
          name: "Endometrio",
          emoji: "🔴",
          color: "#c026d3",
          simple: "Es el revestimiento interno del útero donde se implanta el embrión.",
          full: "Mucosa uterina con dos capas: funcional (se desprende en la menstruación) y basal (regenera la funcional). Responde a estrógenos (proliferación) y progesterona (secretora). Si hay fecundación, el embrión (blastocisto) se implanta ~6-10 días post-fecundación.",
        },
        {
          name: "Folículo Ovárico",
          emoji: "🟡",
          color: "#f59e0b",
          simple: "Es la estructura en el ovario que contiene al óvulo mientras madura.",
          full: "Estructuras esféricas del ovario que rodean al oocito. Desarrollo: primordial → primario → secundario → antral → folículo de Graaf (preovulatorio). El pico de LH desencadena la ovulación. Después de la ovulación el folículo se transforma en cuerpo lúteo.",
        },
        {
          name: "Cuerpo Lúteo",
          emoji: "🟠",
          color: "#ea580c",
          simple: "Es lo que queda del folículo tras liberar el óvulo: produce progesterona para preparar el útero.",
          full: "Estructura glandular temporal formada por células de la granulosa y teca luteinizadas. Produce progesterona (y algo de estrógenos) durante la fase lútea (~14 días). Sin embarazo, degenera en corpus albicans. Con embarazo, la hCG mantiene el cuerpo lúteo.",
        },
        {
          name: "Ciclo Menstrual",
          emoji: "🔄",
          color: "#ec4899",
          simple: "Es el proceso mensual del cuerpo femenino que prepara al útero para un posible embarazo.",
          full: "Dura ~28 días. Fase menstrual (días 1-5): descamación del endometrio. Fase folicular (días 1-13): FSH estimula folículos, estrógenos proliferan el endometrio. Ovulación (día 14): pico de LH. Fase lútea (días 15-28): progesterona prepara el endometrio. Sin fertilización, el ciclo se repite.",
        },
        {
          name: "Fecundación y Cigoto",
          emoji: "✨",
          color: "#a855f7",
          simple: "La fecundación es cuando el espermatozoide se une al óvulo y forman una sola célula nueva.",
          full: "Ocurre en la ampolla de la trompa de Falopio. El espermatozoide atraviesa la zona pelúcida con enzimas acrosomales y se fusiona con la membrana del oocito II. Se completa la meiosis II y se forman 2 pronúcleos. Al fusionarse nace el cigoto (2n = 46 cromosomas), primera célula del nuevo individuo. En ~4 días llega al útero como mórula.",
        },
      ]}
    />
  );
}
