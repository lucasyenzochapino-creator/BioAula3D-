"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function ADNViewer() {
  return (
    <SketchfabViewer
      uid="212e5422645f4432a61dc2f3aac3c8c8"
      title="ADN — Doble Hélice"
      subtitle="🧬 Genética molecular"
      accent="#60a5fa"
      intro="Modelo 3D real de la doble hélice del ADN con apareamiento de bases (A-T, G-C), esqueleto de azúcar-fosfato y puentes de hidrógeno."
      structures={[
        { name: "Adenina (A)", color: "#ef4444", desc: "Base púrica (doble anillo). Se empareja con Timina mediante 2 puentes de hidrógeno." },
        { name: "Timina (T)", color: "#60a5fa", desc: "Base pirimidínica. Se empareja con Adenina. Exclusiva del ADN (en el ARN la reemplaza el Uracilo)." },
        { name: "Guanina (G)", color: "#22c55e", desc: "Base púrica. Se empareja con Citosina mediante 3 puentes de hidrógeno (unión más estable)." },
        { name: "Citosina (C)", color: "#f59e0b", desc: "Base pirimidínica. Se empareja con Guanina mediante 3 puentes de hidrógeno." },
        { name: "Esqueleto azúcar-fosfato", color: "#94a3b8", desc: "Cadena de desoxirribosa y grupos fosfato que forma los dos lados de la escalera del ADN." },
        { name: "Puentes de hidrógeno", color: "#cbd5e1", desc: "Enlaces débiles que mantienen unidas las dos hebras complementarias y permiten su separación." },
      ]}
    />
  );
}
