"use client";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Html, Sphere, Cylinder } from "@react-three/drei";
import * as THREE from "three";

const parts = [
  { id: "soma", name: "Cuerpo Celular (Soma)", position: [0, 0, 0] as [number,number,number], color: "#a855f7", scale: [1,1,1] as [number,number,number], func: "Centro metabólico de la neurona. Contiene el núcleo y dirige las funciones celulares." },
  { id: "nucleo", name: "Núcleo Neuronal", position: [0, 0, 0] as [number,number,number], color: "#3b82f6", scale: [0.5,0.5,0.5] as [number,number,number], func: "Contiene el ADN y controla la expresión génica de la neurona." },
  { id: "dendrita1", name: "Dendrita", position: [1.5, 1.2, 0.5] as [number,number,number], color: "#f59e0b", scale: [0.15,0.9,0.15] as [number,number,number], func: "Recibe señales eléctricas de otras neuronas y las transmite al soma." },
  { id: "dendrita2", name: "Dendrita", position: [-1.8, 1.0, 0.3] as [number,number,number], color: "#f59e0b", scale: [0.15,0.8,0.15] as [number,number,number], func: "Recibe señales eléctricas de otras neuronas y las transmite al soma." },
  { id: "axon", name: "Axón", position: [0, -3, 0] as [number,number,number], color: "#22c55e", scale: [0.2, 2.5, 0.2] as [number,number,number], func: "Conduce el impulso nervioso desde el soma hacia la terminal axónica." },
  { id: "mielina", name: "Vaina de Mielina", position: [0, -2.5, 0] as [number,number,number], color: "#e2e8f0", scale: [0.45, 1.8, 0.45] as [number,number,number], func: "Acelera la conducción del impulso nervioso actuando como aislante eléctrico." },
  { id: "terminal", name: "Terminal Axónica", position: [0, -5.5, 0] as [number,number,number], color: "#ef4444", scale: [0.5,0.5,0.5] as [number,number,number], func: "Libera neurotransmisores a la sinapsis para comunicarse con otras células." },
];

function NeuronPart({ part, selected, onSelect }: { part: typeof parts[0]; selected: boolean; onSelect: (id: string) => void }) {
  const ref = useRef<THREE.Mesh>(null);
  const [hov, setHov] = useState(false);
  const handleClick = (e: ThreeEvent<MouseEvent>) => { e.stopPropagation(); onSelect(part.id); };

  return (
    <group position={part.position}>
      {part.id === "axon" || part.id === "mielina" ? (
        <Cylinder ref={ref} args={[1, 1, 1, 16]} scale={part.scale} onClick={handleClick} onPointerOver={() => setHov(true)} onPointerOut={() => setHov(false)}>
          <meshStandardMaterial color={selected ? "#fff" : hov ? "#e2e8f0" : part.color} emissive={part.color} emissiveIntensity={selected ? 0.5 : 0.15} transparent opacity={part.id === "mielina" ? 0.5 : 1} />
        </Cylinder>
      ) : (
        <Sphere ref={ref} args={[0.6, 24, 24]} scale={part.scale} onClick={handleClick} onPointerOver={() => setHov(true)} onPointerOut={() => setHov(false)}>
          <meshStandardMaterial color={selected ? "#fff" : hov ? "#e2e8f0" : part.color} emissive={part.color} emissiveIntensity={selected ? 0.5 : 0.15} />
        </Sphere>
      )}
      {(hov || selected) && (
        <Html distanceFactor={8} center>
          <div className="bg-slate-900/90 text-white text-xs px-2 py-1 rounded-lg border border-slate-600 whitespace-nowrap pointer-events-none">{part.name}</div>
        </Html>
      )}
    </group>
  );
}

export default function SistemaNerviosoViewer() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = parts.find(p => p.id === selected);

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-3.5rem)]">
      <div className="relative flex-1 min-h-[350px]">
        <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1.5} />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#a855f7" />
            {parts.map(p => (
              <NeuronPart key={p.id} part={p} selected={selected === p.id} onSelect={setSelected} />
            ))}
            <OrbitControls enablePan={false} minDistance={5} maxDistance={18} />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">Arrastrá para rotar • Clic en una parte</div>
      </div>
      <div className="lg:w-72 flex flex-col gap-3 p-4 overflow-y-auto">
        {active ? (
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-xl font-bold text-white mb-2">{active.name}</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{active.func}</p>
            <button onClick={() => setSelected(null)} className="mt-4 text-xs text-slate-500 hover:text-slate-300">✕ Cerrar</button>
          </div>
        ) : (
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-purple-400 mb-2">Neurona 3D</h2>
            <p className="text-slate-400 text-sm">Clic en cualquier parte de la neurona para ver su función.</p>
          </div>
        )}
        <div className="space-y-2">
          {parts.filter((p,i,arr) => arr.findIndex(x=>x.name===p.name)===i).map(p => (
            <button key={p.id} onClick={() => setSelected(p.id)} className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm flex items-center gap-3 ${selected === p.id ? "bg-slate-700 border-slate-500 text-white" : "bg-bio-card border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white"}`}>
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: p.color }} />
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
