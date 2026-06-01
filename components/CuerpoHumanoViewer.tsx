"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function CuerpoHumanoViewer() {
  return (
    <SketchfabViewer
      uid="035316622877438cb62de673b8f19217"
      title="Cuerpo Humano — Órganos"
      subtitle="🫀 Anatomía"
      accent="#f87171"
      intro="Modelo 3D real de los órganos internos del cuerpo humano. Rotá y explorá cómo se organizan los principales sistemas anatómicos."
      structures={[
        { name: "Cerebro — Sistema nervioso", color: "#a855f7", desc: "Coordina todas las funciones del cuerpo mediante señales eléctricas. Centro del pensamiento, memoria y movimiento." },
        { name: "Corazón — Sistema circulatorio", color: "#ef4444", desc: "Bomba muscular de 4 cámaras que impulsa la sangre con oxígeno y nutrientes por todo el cuerpo." },
        { name: "Pulmones — Sistema respiratorio", color: "#60a5fa", desc: "Realizan el intercambio gaseoso: incorporan oxígeno y eliminan dióxido de carbono. Tienen ~300 millones de alvéolos." },
        { name: "Estómago e intestinos — Digestivo", color: "#f59e0b", desc: "Procesan los alimentos y absorben nutrientes. El intestino delgado mide unos 6 metros." },
        { name: "Hígado", color: "#b45309", desc: "Filtra toxinas de la sangre, produce bilis y almacena energía. Es el órgano interno más grande." },
        { name: "Riñones", color: "#22d3ee", desc: "Filtran la sangre y producen orina, regulando el agua y los electrolitos del cuerpo." },
        { name: "Esqueleto — Sistema óseo", color: "#cbd5e1", desc: "206 huesos que dan sostén y protección. La médula ósea produce las células sanguíneas." },
      ]}
    />
  );
}
