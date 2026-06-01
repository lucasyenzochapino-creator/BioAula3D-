"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function SistemaNerviosoViewer() {
  return (
    <SketchfabViewer
      uid="03a5173f3d2e46958b6f8be81b1c88be"
      title="Neurona"
      subtitle="⚡ Sistema nervioso"
      accent="#a855f7"
      intro="Modelo 3D real de una neurona con sus partes principales. Las neuronas transmiten información mediante impulsos eléctricos y químicos."
      structures={[
        { name: "Soma (cuerpo celular)", color: "#a855f7", desc: "Centro metabólico de la neurona. Contiene el núcleo e integra las señales entrantes." },
        { name: "Núcleo", color: "#3b82f6", desc: "Contiene el ADN y dirige la síntesis de proteínas específicas de la neurona." },
        { name: "Dendritas", color: "#f59e0b", desc: "Prolongaciones ramificadas que reciben señales de otras neuronas y las llevan al soma." },
        { name: "Axón", color: "#22c55e", desc: "Prolongación única que conduce el impulso nervioso desde el soma hasta la terminal. Puede medir hasta 1 metro." },
        { name: "Vaina de mielina", color: "#e2e8f0", desc: "Aislante lipídico que recubre el axón y acelera la conducción del impulso (conducción saltatoria)." },
        { name: "Terminal axonal", color: "#ef4444", desc: "Extremo del axón que libera neurotransmisores en la sinapsis para comunicarse con otras células." },
      ]}
    />
  );
}
