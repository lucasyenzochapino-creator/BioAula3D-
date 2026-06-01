"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function PlantaViewer() {
  return (
    <SketchfabViewer
      uid="0640c7a14f41400fbdac382c7de1d776"
      title="Célula Vegetal"
      subtitle="🌿 Biología vegetal"
      accent="#34d399"
      intro="Modelo 3D real de una célula vegetal. Descubrí qué la hace diferente a la célula animal y cómo realiza la fotosíntesis."
      structures={[
        {
          name: "Pared Celular",
          emoji: "🟫",
          color: "#15803d",
          simple: "Una capa dura que rodea la célula vegetal y le da su forma cuadrada.",
          full: "Estructura rígida compuesta principalmente de celulosa (polímero de glucosa), hemicelulosa y pectinas. Proporciona soporte mecánico, evita la lisis osmótica y participa en la comunicación célula-célula. Ausente en células animales.",
        },
        {
          name: "Membrana Plasmática",
          emoji: "🫧",
          color: "#4ade80",
          simple: "La 'piel' interna que controla qué entra y sale de la célula.",
          full: "Bicapa fosfolipídica con proteínas integrales (permeasa, ATPasa H⁺) ubicada bajo la pared celular. Regula transporte de agua (acuaporinas), iones y nutrientes. Clave en la homeostasis osmótica vegetal.",
        },
        {
          name: "Cloroplasto",
          emoji: "🌱",
          color: "#16a34a",
          simple: "Hace la fotosíntesis: convierte la luz del sol en azúcar para la planta.",
          full: "Plastidio con doble membrana, tilacoides apilados en grana y estroma. La fase luminosa ocurre en los tilacoides (fotosistemas I y II, cadena de transporte de electrones); el ciclo de Calvin ocurre en el estroma. Posee ADN propio (origen endosimbiótico).",
        },
        {
          name: "Vacuola Central",
          emoji: "🔷",
          color: "#06b6d4",
          simple: "Una gran bolsa de agua que mantiene la planta erguida y almacena nutrientes.",
          full: "Puede ocupar hasta el 90% del volumen celular maduro. Delimitada por el tonoplasto (membrana vacuolar). Mantiene la turgencia celular mediante presión osmótica, almacena iones, pigmentos (antocianinas), azúcares y productos de desecho.",
        },
        {
          name: "Núcleo",
          emoji: "🔵",
          color: "#3b82f6",
          simple: "El centro de control con toda la información genética de la planta.",
          full: "Núcleo con envoltura doble, poros nucleares y nucléolo. Contiene el ADN organizado en cromosomas lineales. En células vegetales suele ubicarse en la periferia del citoplasma, desplazado por la vacuola central.",
        },
        {
          name: "Mitocondria",
          emoji: "🟠",
          color: "#f97316",
          simple: "Produce la energía de la célula, igual que en los animales.",
          full: "Presente en células vegetales y animales. Realiza la respiración celular aeróbica. En plantas funciona de noche (sin fotosíntesis) y en todas las células no fotosintéticas. Coopera con los cloroplastos en el metabolismo del carbono.",
        },
        {
          name: "Plasmodesmos",
          emoji: "🔗",
          color: "#fbbf24",
          simple: "Pequeños canales que conectan células vecinas para compartir nutrientes.",
          full: "Canales citoplasmáticos que atraviesan la pared celular y conectan el citoplasma de células adyacentes. Permiten el transporte simplástico de agua, fotoasimilados, hormonas y señales (ARN, proteínas). Equivalentes funcionales a las uniones gap animales.",
        },
        {
          name: "Aparato de Golgi",
          emoji: "🟡",
          color: "#eab308",
          simple: "Empaqueta proteínas y materiales para construir la pared celular.",
          full: "Igual que en células animales, pero en vegetales tiene función adicional: sintetiza polisacáridos de la pared celular (hemicelulosa, pectinas) y los empaqueta en vesículas que se fusionan con la membrana durante la citocinesis.",
        },
        {
          name: "Ribosoma",
          emoji: "🟢",
          color: "#22c55e",
          simple: "Fabrica todas las proteínas que la planta necesita.",
          full: "En células vegetales hay ribosomas 80S en el citoplasma y RER, además de ribosomas 70S en cloroplastos y mitocondrias (reminiscencia evolutiva bacteriana). Los ribosomas cloroplásticos sintetizan las proteínas del aparato fotosintético.",
        },
      ]}
    />
  );
}
