"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function CelulaViewer() {
  return (
    <SketchfabViewer
      uid="0d9f7f4257224975b2ef83a283709b2f"
      title="Célula Animal"
      subtitle="🔬 Biología celular"
      accent="#4ade80"
      intro="Modelo 3D real de una célula eucariota animal con todos sus orgánulos. Rotá el modelo y tocá los puntos para explorar cada estructura."
      structures={[
        { name: "Núcleo", color: "#3b82f6", desc: "Centro de control celular. Almacena el ADN y dirige la síntesis de proteínas y la reproducción de la célula." },
        { name: "Nucléolo", color: "#1d4ed8", desc: "Estructura dentro del núcleo donde se sintetiza el ARN ribosomal y se ensamblan los ribosomas." },
        { name: "Mitocondria", color: "#f97316", desc: "Central energética de la célula. Produce ATP mediante la respiración celular aeróbica. Tiene ADN propio." },
        { name: "Retículo Endoplásmico Rugoso", color: "#a855f7", desc: "Membranas cubiertas de ribosomas. Sintetiza y procesa proteínas de secreción." },
        { name: "Retículo Endoplásmico Liso", color: "#ec4899", desc: "Red membranosa sin ribosomas. Sintetiza lípidos y esteroides, y desintoxica la célula." },
        { name: "Aparato de Golgi", color: "#eab308", desc: "Modifica, empaqueta y distribuye proteínas y lípidos hacia sus destinos finales." },
        { name: "Ribosomas", color: "#10b981", desc: "Nanomáquinas que traducen el ARN mensajero en proteínas. Libres o unidos al retículo." },
        { name: "Lisosoma", color: "#e879f9", desc: "Vesícula con enzimas digestivas que degrada moléculas, orgánulos viejos y partículas." },
        { name: "Membrana Plasmática", color: "#22c55e", desc: "Bicapa lipídica semipermeable que regula el paso de sustancias hacia adentro y afuera." },
        { name: "Citoplasma", color: "#86efac", desc: "Medio gelatinoso donde flotan los orgánulos y ocurren muchas reacciones metabólicas." },
      ]}
    />
  );
}
