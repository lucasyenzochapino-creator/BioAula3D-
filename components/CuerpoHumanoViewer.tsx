"use client";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Sphere, Cylinder, Html } from "@react-three/drei";
import * as THREE from "three";

const systems = [
  { id: "circulatorio", name: "Sistema Circulatorio", color: "#ef4444", icon: "🫀",
    desc: "Transporte de sangre, oxígeno y nutrientes por todo el cuerpo.",
    parts: ["Corazón", "Arterias", "Venas", "Capilares"] },
  { id: "respiratorio", name: "Sistema Respiratorio", color: "#3b82f6", icon: "🫁",
    desc: "Intercambio gaseoso entre el organismo y el ambiente.",
    parts: ["Pulmones", "Tráquea", "Bronquios", "Alvéolos"] },
  { id: "digestivo", name: "Sistema Digestivo", color: "#f59e0b", icon: "🍽️",
    desc: "Procesa los alimentos y absorbe los nutrientes necesarios.",
    parts: ["Estómago", "Intestino delgado", "Intestino grueso", "Hígado"] },
  { id: "nervioso", name: "Sistema Nervioso", color: "#a855f7", icon: "🧠",
    desc: "Coordina las funciones del cuerpo mediante impulsos eléctricos.",
    parts: ["Cerebro", "Médula espinal", "Nervios periféricos", "Neuronas"] },
  { id: "oseo", name: "Sistema Óseo", color: "#cbd5e1", icon: "🦴",
    desc: "Sostén y protección del cuerpo. Produce células sanguíneas.",
    parts: ["Cráneo", "Columna vertebral", "Costillas", "Fémur"] },
];

const bodyParts = [
  { id: "cabeza", systemId: "nervioso", position: [0, 3.2, 0] as [number,number,number], scale: [1, 1, 1] as [number,number,number], shape: "sphere" },
  { id: "torso", systemId: "circulatorio", position: [0, 1.2, 0] as [number,number,number], scale: [0.9, 1.6, 0.7] as [number,number,number], shape: "sphere" },
  { id: "pulmones", systemId: "respiratorio", position: [0, 1.5, 0.3] as [number,number,number], scale: [0.6, 0.9, 0.4] as [number,number,number], shape: "sphere" },
  { id: "abdomen", systemId: "digestivo", position: [0, -0.2, 0] as [number,number,number], scale: [0.75, 1.0, 0.65] as [number,number,number], shape: "sphere" },
  { id: "brazo-izq", systemId: "oseo", position: [-1.6, 1.2, 0] as [number,number,number], scale: [0.25, 1.5, 0.25] as [number,number,number], shape: "cylinder" },
  { id: "brazo-der", systemId: "oseo", position: [1.6, 1.2, 0] as [number,number,number], scale: [0.25, 1.5, 0.25] as [number,number,number], shape: "cylinder" },
  { id: "pierna-izq", systemId: "oseo", position: [-0.55, -2.0, 0] as [number,number,number], scale: [0.3, 1.8, 0.3] as [number,number,number], shape: "cylinder" },
  { id: "pierna-der", systemId: "oseo", position: [0.55, -2.0, 0] as [number,number,number], scale: [0.3, 1.8, 0.3] as [number,number,number], shape: "cylinder" },
];

const sysColors: Record<string, string> = {
  circulatorio: "#ef4444", respiratorio: "#3b82f6", digestivo: "#f59e0b",
  nervioso: "#a855f7", oseo: "#cbd5e1",
};

function BodyPart({ part, selected, onSelect }: { part: typeof bodyParts[0]; selected: boolean; onSelect: (id: string) => void }) {
  const ref = useRef<THREE.Mesh>(null);
  const [hov, setHov] = useState(false);
  const color = sysColors[part.systemId];
  const sys = systems.find(s => s.id === part.systemId);
  const handleClick = (e: ThreeEvent<MouseEvent>) => { e.stopPropagation(); onSelect(part.systemId); };

  return (
    <group position={part.position}>
      {part.shape === "cylinder" ? (
        <Cylinder ref={ref} args={[1, 1, 1, 16]} scale={part.scale} onClick={handleClick} onPointerOver={() => setHov(true)} onPointerOut={() => setHov(false)}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={selected ? 0.6 : hov ? 0.3 : 0.1} roughness={0.5} />
        </Cylinder>
      ) : (
        <Sphere ref={ref} args={[0.7, 24, 24]} scale={part.scale} onClick={handleClick} onPointerOver={() => setHov(true)} onPointerOut={() => setHov(false)}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={selected ? 0.6 : hov ? 0.3 : 0.1} roughness={0.5} transparent opacity={0.9} />
        </Sphere>
      )}
      {(hov || selected) && sys && (
        <Html distanceFactor={8} center>
          <div className="bg-slate-900/90 text-white text-xs px-2 py-1 rounded-lg border border-slate-600 whitespace-nowrap pointer-events-none">{sys.name}</div>
        </Html>
      )}
    </group>
  );
}

export default function CuerpoHumanoViewer() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = systems.find(s => s.id === selected);

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-3.5rem)]">
      <div className="relative flex-1 min-h-[350px]">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 8, 5]} intensity={1.5} />
            <pointLight position={[-5, -5, 5]} intensity={0.5} color="#3b82f6" />
            {bodyParts.map(p => (
              <BodyPart key={p.id} part={p} selected={selected === p.systemId} onSelect={setSelected} />
            ))}
            <OrbitControls enablePan={false} minDistance={5} maxDistance={16} />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">Clic en cualquier parte del cuerpo</div>
      </div>
      <div className="lg:w-72 flex flex-col gap-3 p-4 overflow-y-auto">
        {active ? (
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <div className="text-3xl mb-2">{active.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{active.name}</h2>
            <p className="text-slate-300 text-sm mb-3 leading-relaxed">{active.desc}</p>
            <ul className="space-y-1">
              {active.parts.map(p => <li key={p} className="text-slate-400 text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-500" />{p}</li>)}
            </ul>
            <button onClick={() => setSelected(null)} className="mt-4 text-xs text-slate-500 hover:text-slate-300">✕ Cerrar</button>
          </div>
        ) : (
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-red-400 mb-2">Cuerpo Humano</h2>
            <p className="text-slate-400 text-sm">Clic en cualquier parte para explorar sus sistemas.</p>
          </div>
        )}
        <div className="space-y-2">
          {systems.map(s => (
            <button key={s.id} onClick={() => setSelected(s.id)} className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm flex items-center gap-3 ${selected === s.id ? "bg-slate-700 border-slate-500 text-white" : "bg-bio-card border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white"}`}>
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: sysColors[s.id] }} />
              <span>{s.icon} {s.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
