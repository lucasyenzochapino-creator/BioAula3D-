"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function PlantaViewer() {
  return (
    <SketchfabViewer
      uid="0640c7a14f41400fbdac382c7de1d776"
      title="Célula Vegetal"
      subtitle="🌿 Biología celular"
      accent="#4ade80"
      intro="Modelo 3D real de una célula vegetal con todos sus orgánulos. Compará sus diferencias con la célula animal: pared celular, cloroplastos y gran vacuola."
      structures={[
        { name: "Pared celular", color: "#15803d", desc: "Capa rígida de celulosa que rodea la membrana. Da forma y protección. Exclusiva de vegetales, hongos y bacterias." },
        { name: "Membrana plasmática", color: "#4ade80", desc: "Bicapa lipídica interior a la pared que regula el transporte selectivo de sustancias." },
        { name: "Cloroplasto", color: "#16a34a", desc: "Realiza la fotosíntesis: convierte luz solar, CO₂ y agua en glucosa y oxígeno. Contiene clorofila." },
        { name: "Vacuola central", color: "#06b6d4", desc: "Gran vacío que mantiene la turgencia y almacena agua, nutrientes y desechos. Ocupa hasta el 90% del volumen." },
        { name: "Núcleo", color: "#3b82f6", desc: "Centro de control genético que almacena el ADN y dirige la síntesis de proteínas." },
        { name: "Mitocondria", color: "#f97316", desc: "Produce ATP mediante la respiración celular. Presente tanto en células vegetales como animales." },
        { name: "Aparato de Golgi", color: "#eab308", desc: "Procesa y distribuye proteínas. En plantas también forma componentes de la pared celular." },
      ]}
    />
  );
}
