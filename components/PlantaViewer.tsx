"use client";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";

const parts = [
  { id: "pared", name: "Pared Celular", pos: [0,0,0] as [number,number,number], scale: [1,1,1] as [number,number,number], color: "#15803d", func: "Capa rígida de celulosa que rodea la membrana. Da forma y protección mecánica.", extra: "Solo en células vegetales, hongos y bacterias." },
  { id: "membrana", name: "Membrana Plasmática", pos: [0,0,0] as [number,number,number], scale: [0.92,0.92,0.92] as [number,number,number], color: "#4ade80", func: "Regula el paso de sustancias hacia adentro y afuera de la célula.", extra: "Presente en todas las células." },
  { id: "cloroplasto1", name: "Cloroplasto", pos: [2.0, 0.5, 0.3] as [number,number,number], scale: [0.7,0.45,0.45] as [number,number,number], color: "#16a34a", func: "Realiza la fotosíntesis convirtiendo luz solar en glucosa.", extra: "Contiene clorofila, que da el color verde a las plantas." },
  { id: "cloroplasto2", name: "Cloroplasto", pos: [-1.8, 1.0, 0.2] as [number,number,number], scale: [0.6,0.4,0.4] as [number,number,number], color: "#16a34a", func: "Realiza la fotosíntesis convirtiendo luz solar en glucosa.", extra: "Contiene clorofila, que da el color verde a las plantas." },
  { id: "vacuola", name: "Vacuola Central", pos: [0.2, -0.2, 0.1] as [number,number,number], scale: [0.85,0.85,0.85] as [number,number,number], color: "#06b6d4", func: "Gran vacuola central que mantiene la turgencia celular y almacena nutrientes.", extra: "Puede ocupar hasta el 90% del volumen celular." },
  { id: "nucleo", name: "Núcleo", pos: [0, 0, 0] as [number,number,number], scale: [0.35,0.35,0.35] as [number,number,number], color: "#3b82f6", func: "Contiene el ADN y dirige la síntesis de proteínas.", extra: "Centro de control de toda la célula." },
  { id: "mitocondria", name: "Mitocondria", pos: [1.5, -1.2, 0.4] as [number,number,number], scale: [0.55,0.38,0.38] as [number,number,number], color: "#f97316", func: "Produce ATP (energía) mediante la respiración celular.", extra: "Presente tanto en células animales como vegetales." },
  { id: "plasmodesmos", name: "Plasmodesmos", pos: [3.2, 0, 0] as [number,number,number], scale: [0.15,0.15,0.15] as [number,number,number], color: "#fbbf24", func: "Canales que conectan células vegetales vecinas para comunicación.", extra: "Equivalente a las uniones comunicantes animales." },
];

function PlantPart({ part, selected, onSelect }: { part: typeof parts[0]; selected: boolean; onSelect: (id: string) => void }) {
  const ref = useRef<THREE.Mesh>(null);
  const [hov, setHov] = useState(false);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * 0.3; });

  const transparent = part.id === "pared" || part.id === "membrana";
  return (
    <group position={part.pos}>
      <Sphere ref={ref} args={[0.6, 32, 32]} scale={part.scale}
        onClick={(e: ThreeEvent<MouseEvent>) => { e.stopPropagation(); onSelect(part.id); }}
        onPointerOver={() => setHov(true)} onPointerOut={() => setHov(false)}
      >
        <meshStandardMaterial color={selected ? "#fff" : hov ? "#e2e8f0" : part.color} emissive={part.color} emissiveIntensity={selected ? 0.5 : 0.15} transparent={transparent} opacity={part.id === "pared" ? 0.08 : part.id === "membrana" ? 0.12 : 0.95} side={transparent ? THREE.BackSide : THREE.FrontSide} />
      </Sphere>
      {(hov || selected) && (
        <Html distanceFactor={8} center>
          <div className="bg-slate-900/90 text-white text-xs px-2 py-1 rounded-lg border border-slate-600 whitespace-nowrap pointer-events-none">{part.name}</div>
        </Html>
      )}
    </group>
  );
}

export default function PlantaViewer() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = parts.find(p => p.id === selected);

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-3.5rem)]">
      <div className="relative flex-1 min-h-[350px]">
        <Canvas camera={{ position: [0, 2, 9], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[5, 5, 5]} intensity={1.2} />
            <pointLight position={[-5, -3, -5]} intensity={0.6} color="#22c55e" />
            {parts.map(p => <PlantPart key={p.id} part={p} selected={selected === p.id} onSelect={setSelected} />)}
            <OrbitControls enablePan={false} minDistance={4} maxDistance={12} />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">Arrastrá para rotar • Clic en un orgánulo</div>
      </div>
      <div className="lg:w-72 flex flex-col gap-3 p-4 overflow-y-auto">
        {active ? (
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-xl font-bold text-white mb-2">{active.name}</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">{active.func}</p>
            {active.extra && <p className="text-emerald-400 text-xs italic border-t border-slate-700 pt-2 mt-2">{active.extra}</p>}
            <button onClick={() => setSelected(null)} className="mt-4 text-xs text-slate-500 hover:text-slate-300">✕ Cerrar</button>
          </div>
        ) : (
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-emerald-400 mb-2">Célula Vegetal 🌿</h2>
            <p className="text-slate-400 text-sm">Clic en cualquier estructura para explorarla.</p>
          </div>
        )}
        <div className="space-y-2">
          {parts.filter((p,i,arr)=>arr.findIndex(x=>x.name===p.name)===i).map(p => (
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
