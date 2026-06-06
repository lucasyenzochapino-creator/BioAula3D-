"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function CelulaViewer() {
  return (
    <SketchfabViewer
      slug="celula"
      moduleName="Célula Animal"
      uid="0d9f7f4257224975b2ef83a283709b2f"
      title="Célula Animal"
      subtitle="🔬 Biología celular"
      accent="5B8A6F"
      intro="Explorá un modelo 3D real de una célula eucariota animal. Tocá los puntos ⓘ en el modelo o las estructuras de abajo."
      structures={[
        {
          name: "Núcleo",
          emoji: "🔵",
          color: "#6B7FA8",
          simple: "Es el 'cerebro' de la célula — guarda la información genética.",
          full: "Organela delimitada por la envoltura nuclear (doble membrana con poros). Contiene el ADN organizado en cromosomas y el nucléolo. Dirige la transcripción del ARNm y por ende toda la síntesis proteica.",
        },
        {
          name: "Mitocondria",
          emoji: "🟠",
          color: "#8A7A5C",
          simple: "Produce la energía que necesita la célula para vivir.",
          full: "Organela de doble membrana con crestas internas. Realiza la fosforilación oxidativa (cadena respiratoria) para sintetizar ATP. Posee su propio ADN circular, evidencia de origen endosimbiótico.",
        },
        {
          name: "Retículo Endoplasmático",
          emoji: "🟣",
          color: "#7A6B9A",
          simple: "Es como una red de caminos que transporta proteínas por la célula.",
          full: "Sistema de membranas interconectadas. El RER (rugoso) tiene ribosomas adosados y sintetiza proteínas de secreción; el REL (liso) sintetiza lípidos y detoxifica sustancias.",
        },
        {
          name: "Aparato de Golgi",
          emoji: "🟡",
          color: "#8A7A5C",
          simple: "Empaqueta y envía proteínas a donde se necesitan, como un correo postal.",
          full: "Conjunto de cisternas membranosas apiladas (cis, medial, trans). Modifica proteínas con azúcares (glicosilación), las clasifica y envía en vesículas hacia la membrana plasmática o lisosomas.",
        },
        {
          name: "Lisosoma",
          emoji: "🩷",
          color: "#8A6B8A",
          simple: "Digiere y recicla los desechos y partes viejas de la célula.",
          full: "Vesícula con enzimas hidrolíticas activas a pH ácido (~4,5). Realiza autofagia (recicla orgánulos dañados) y heterofagia (degrada material externo). Su ruptura puede desencadenar apoptosis.",
        },
        {
          name: "Ribosoma",
          emoji: "🟢",
          color: "#5B8A6F",
          simple: "Fabrica las proteínas que la célula necesita para funcionar.",
          full: "Complejo ARN-proteínas formado por subunidad mayor (60S) y menor (40S). Lee el ARNm y sintetiza cadenas polipeptídicas mediante la traducción. Puede estar libre en citoplasma o unido al RER.",
        },
        {
          name: "Membrana Plasmática",
          emoji: "🫧",
          color: "#5C7A8A",
          simple: "Es la 'piel' de la célula: controla qué entra y qué sale.",
          full: "Bicapa fosfolipídica con proteínas integrales y periféricas (modelo mosaico fluido). Regula el transporte de iones y moléculas mediante canales, bombas y transporte activo/pasivo.",
        },
        {
          name: "Centrosoma",
          emoji: "⭐",
          color: "#9A5C5C",
          simple: "Organiza la división celular y ayuda a mover los cromosomas.",
          full: "Par de centríolos rodeados de material pericentriolar. Nuclea los microtúbulos del huso mitótico durante la división. Clave en la organización del citoesqueleto y la formación de cilios.",
        },
        {
          name: "Vacuola",
          emoji: "🔷",
          color: "#5C7A8A",
          simple: "Almacena agua, nutrientes o desechos como un depósito.",
          full: "Vesícula membranosa (tonoplasto). En células animales son pequeñas y temporales; participan en endocitosis/exocitosis. Regulan la osmosis y eliminan sustancias de desecho.",
        },
        {
          name: "Citoesqueleto",
          emoji: "🕸️",
          color: "#5C6472",
          simple: "Es como los huesos de la célula: le da forma y permite que se mueva.",
          full: "Red de filamentos proteicos: microtúbulos (tubulina), filamentos de actina y filamentos intermedios. Mantiene la forma celular, posiciona orgánulos, permite la migración y la división celular.",
        },
      ]}
    />
  );
}
