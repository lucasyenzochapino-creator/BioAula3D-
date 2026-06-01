"use client";
import { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

const BASES = [
  { id: "adenina", name: "Adenina (A)", color: "#ef4444", pair: "T", func: "Base púrica que se empareja con Timina mediante 2 enlaces de hidrógeno." },
  { id: "timina", name: "Timina (T)", color: "#3b82f6", pair: "A", func: "Base pirimidínica que se empareja con Adenina mediante 2 enlaces de hidrógeno." },
  { id: "guanina", name: "Guanina (G)", color: "#22c55e", pair: "C", func: "Base púrica que se empareja con Citosina mediante 3 enlaces de hidrógeno." },
  { id: "citosina", name: "Citosina (C)", color: "#f59e0b", pair: "G", func: "Base pirimidínica que se empareja con Guanina mediante 3 enlaces de hidrógeno." },
];

const BASE_COLORS: Record<string, string> = {
  A: "#ef4444",
  T: "#3b82f6",
  G: "#22c55e",
  C: "#f59e0b",
};

const SEQUENCE = ["A","T","G","C","A","G","T","C","G","A","T","G","C","A","T","G","C","A","G","T"];

function DNAHelix({ selected, onSelect }: { selected: string | null; onSelect: (b: string) => void }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.25;
  });

  const pairs = useMemo(() => {
    return SEQUENCE.map((base, i) => {
      const angle = (i / SEQUENCE.length) * Math.PI * 4;
      const y = (i / SEQUENCE.length) * 8 - 4;
      const r = 1.4;
      const x1 = Math.cos(angle) * r;
      const z1 = Math.sin(angle) * r;
      const x2 = Math.cos(angle + Math.PI) * r;
      const z2 = Math.sin(angle + Math.PI) * r;
      const complement: Record<string, string> = { A: "T", T: "A", G: "C", C: "G" };
      return { base, pair: complement[base], angle, y, x1, z1, x2, z2 };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {pairs.map((p, i) => (
        <group key={i}>
          {/* Base 1 */}
          <mesh
            position={[p.x1, p.y, p.z1]}
            onClick={(e) => { e.stopPropagation(); onSelect(p.base); }}
          >
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshStandardMaterial
              color={BASE_COLORS[p.base]}
              emissive={BASE_COLORS[p.base]}
              emissiveIntensity={selected === p.base ? 0.8 : 0.2}
            />
          </mesh>

          {/* Base 2 (complementaria) */}
          <mesh
            position={[p.x2, p.y, p.z2]}
            onClick={(e) => { e.stopPropagation(); onSelect(p.pair); }}
          >
            <sphereGeometry args={[0.22, 16, 16]} />
            <meshStandardMaterial
              color={BASE_COLORS[p.pair]}
              emissive={BASE_COLORS[p.pair]}
              emissiveIntensity={selected === p.pair ? 0.8 : 0.2}
            />
          </mesh>

          {/* Puente de hidrógeno */}
          <mesh position={[0, p.y, 0]}>
            <cylinderGeometry args={[0.04, 0.04, p.x1 * 2 * -1 + 0.1, 6]} />
            <meshStandardMaterial color="#475569" transparent opacity={0.5} />
          </mesh>

          {/* Backbone strand 1 */}
          {i < pairs.length - 1 && (
            <mesh position={[(p.x1 + pairs[i+1].x1)/2, (p.y + pairs[i+1].y)/2, (p.z1 + pairs[i+1].z1)/2]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial color="#64748b" />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

export default function ADNViewer() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedBase = BASES.find(b => b.id.startsWith(selected?.toLowerCase() || "__"));
  const directSelected = BASES.find(b => {
    const map: Record<string,string> = { A: "adenina", T: "timina", G: "guanina", C: "citosina" };
    return map[selected || ""] === b.id;
  });
  const activeBase = selectedBase || directSelected;

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-3.5rem)]">
      <div className="relative flex-1 min-h-[350px]">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1.5} />
            <pointLight position={[-5, -5, -5]} intensity={0.5} color="#3b82f6" />
            <DNAHelix selected={selected} onSelect={setSelected} />
            <OrbitControls enablePan={false} minDistance={4} maxDistance={15} />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">
          Arrastrá para rotar • Clic en una base nitrogenada
        </div>
      </div>

      <div className="lg:w-72 flex flex-col gap-3 p-4 overflow-y-auto">
        {activeBase ? (
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <div className="text-3xl font-black mb-2" style={{ color: BASE_COLORS[activeBase.id === "adenina" ? "A" : activeBase.id === "timina" ? "T" : activeBase.id === "guanina" ? "G" : "C"] }}>
              {activeBase.id === "adenina" ? "A" : activeBase.id === "timina" ? "T" : activeBase.id === "guanina" ? "G" : "C"}
            </div>
            <h2 className="text-xl font-bold text-white mb-1">{activeBase.name}</h2>
            <p className="text-slate-400 text-sm mb-2">Par complementario: <span className="font-bold text-white">{activeBase.pair}</span></p>
            <p className="text-slate-300 text-sm leading-relaxed">{activeBase.func}</p>
            <button onClick={() => setSelected(null)} className="mt-4 text-xs text-slate-500 hover:text-slate-300">✕ Cerrar</button>
          </div>
        ) : (
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-blue-400 mb-2">Doble Hélice del ADN</h2>
            <p className="text-slate-400 text-sm">Clic en una base nitrogenada para ver su información.</p>
          </div>
        )}

        <div className="space-y-2">
          {BASES.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelected(b.id.charAt(0).toUpperCase())}
              className="w-full text-left px-4 py-3 rounded-xl border border-slate-800 bg-bio-card text-slate-400 hover:border-slate-600 hover:text-white transition-all text-sm flex items-center gap-3"
            >
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: BASE_COLORS[b.id === "adenina" ? "A" : b.id === "timina" ? "T" : b.id === "guanina" ? "G" : "C"] }} />
              {b.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
