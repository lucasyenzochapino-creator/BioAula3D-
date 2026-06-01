"use client";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Html, Sphere, Torus, Text } from "@react-three/drei";
import * as THREE from "three";

interface Organelle {
  id: string;
  name: string;
  position: [number, number, number];
  color: string;
  scale: [number, number, number];
  shape: "sphere" | "torus" | "elongated";
  desc: string;
  func: string;
}

const organelles: Organelle[] = [
  {
    id: "nucleo",
    name: "Núcleo",
    position: [0, 0, 0],
    color: "#3b82f6",
    scale: [1, 1, 1],
    shape: "sphere",
    desc: "Centro de control celular",
    func: "Contiene el ADN y dirige todas las actividades de la célula.",
  },
  {
    id: "mitocondria1",
    name: "Mitocondria",
    position: [2.5, 0.5, 0.5],
    color: "#f97316",
    scale: [0.7, 0.45, 0.45],
    shape: "elongated",
    desc: "Planta de energía de la célula",
    func: "Produce ATP mediante la respiración celular aeróbica.",
  },
  {
    id: "mitocondria2",
    name: "Mitocondria",
    position: [-2.2, 1.2, 0.3],
    color: "#f97316",
    scale: [0.6, 0.4, 0.4],
    shape: "elongated",
    desc: "Planta de energía de la célula",
    func: "Produce ATP mediante la respiración celular aeróbica.",
  },
  {
    id: "reticulo-er",
    name: "Retículo Endoplasmático",
    position: [1.2, -1.5, 0.2],
    color: "#a855f7",
    scale: [1.2, 0.3, 0.5],
    shape: "elongated",
    desc: "Sistema de transporte interno",
    func: "Transporta proteínas y lípidos dentro de la célula.",
  },
  {
    id: "golgi",
    name: "Aparato de Golgi",
    position: [-1.5, -1.2, 0.5],
    color: "#eab308",
    scale: [0.9, 0.25, 0.6],
    shape: "torus",
    desc: "Centro de procesamiento y distribución",
    func: "Modifica, empaqueta y distribuye proteínas y lípidos.",
  },
  {
    id: "lisosoma",
    name: "Lisosoma",
    position: [1.8, 1.8, -0.5],
    color: "#ec4899",
    scale: [0.4, 0.4, 0.4],
    shape: "sphere",
    desc: "Sistema digestivo celular",
    func: "Contiene enzimas digestivas que descomponen moléculas.",
  },
  {
    id: "ribosoma1",
    name: "Ribosoma",
    position: [0.8, 0.8, 1.8],
    color: "#22c55e",
    scale: [0.2, 0.2, 0.2],
    shape: "sphere",
    desc: "Fábrica de proteínas",
    func: "Sintetiza proteínas leyendo el ARN mensajero.",
  },
  {
    id: "ribosoma2",
    name: "Ribosoma",
    position: [-0.5, 0.9, 2.1],
    color: "#22c55e",
    scale: [0.2, 0.2, 0.2],
    shape: "sphere",
    desc: "Fábrica de proteínas",
    func: "Sintetiza proteínas leyendo el ARN mensajero.",
  },
  {
    id: "vacuola",
    name: "Vacuola",
    position: [-1.8, 0.2, -1.2],
    color: "#06b6d4",
    scale: [0.6, 0.6, 0.6],
    shape: "sphere",
    desc: "Almacén celular",
    func: "Almacena nutrientes, agua y productos de desecho.",
  },
  {
    id: "centrosoma",
    name: "Centrosoma",
    position: [0.5, 2.0, -0.8],
    color: "#f43f5e",
    scale: [0.3, 0.3, 0.3],
    shape: "sphere",
    desc: "Centro organizador",
    func: "Organiza los microtúbulos y participa en la división celular.",
  },
];

function OrganelleModel({
  org,
  selected,
  onSelect,
}: {
  org: Organelle;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSelect(org.id);
  };

  const color = selected ? "#ffffff" : hovered ? "#e2e8f0" : org.color;

  return (
    <group position={org.position}>
      {org.shape === "torus" ? (
        <Torus
          ref={meshRef as React.Ref<THREE.Mesh>}
          args={[0.5, 0.18, 8, 20]}
          scale={org.scale}
          onClick={handleClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={selected ? 0.6 : hovered ? 0.3 : 0.15}
            roughness={0.3}
            metalness={0.2}
          />
        </Torus>
      ) : (
        <Sphere
          ref={meshRef as React.Ref<THREE.Mesh>}
          args={[0.6, 32, 32]}
          scale={org.scale}
          onClick={handleClick}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={selected ? 0.6 : hovered ? 0.3 : 0.15}
            roughness={0.4}
            metalness={0.1}
            transparent
            opacity={0.92}
          />
        </Sphere>
      )}
      {(hovered || selected) && (
        <Html distanceFactor={8} center>
          <div className="bg-slate-900/90 text-white text-xs px-2 py-1 rounded-lg border border-slate-600 whitespace-nowrap pointer-events-none">
            {org.name}
          </div>
        </Html>
      )}
    </group>
  );
}

function CellMembrane() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (meshRef.current) meshRef.current.rotation.y += delta * 0.05;
  });
  return (
    <Sphere ref={meshRef} args={[3.5, 48, 48]}>
      <meshStandardMaterial
        color="#22c55e"
        transparent
        opacity={0.07}
        side={THREE.BackSide}
        roughness={0.8}
      />
    </Sphere>
  );
}

function NucleusShell() {
  return (
    <Sphere args={[1.05, 32, 32]}>
      <meshStandardMaterial
        color="#3b82f6"
        transparent
        opacity={0.18}
        wireframe={false}
        roughness={0.5}
      />
    </Sphere>
  );
}

function Scene({ selected, onSelect }: { selected: string | null; onSelect: (id: string) => void }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -3, -5]} intensity={0.6} color="#3b82f6" />
      <pointLight position={[0, 0, 0]} intensity={0.4} color="#22c55e" />
      <CellMembrane />
      <NucleusShell />
      {organelles.map((org) => (
        <OrganelleModel
          key={org.id}
          org={org}
          selected={selected === org.id}
          onSelect={onSelect}
        />
      ))}
      <OrbitControls enablePan={false} minDistance={4} maxDistance={12} />
    </>
  );
}

export default function CelulaViewer() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedOrg = organelles.find((o) => o.id === selected);

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-3.5rem)]">
      {/* Canvas 3D */}
      <div className="relative flex-1 min-h-[350px]">
        <Canvas camera={{ position: [0, 2, 9], fov: 50 }}>
          <Suspense fallback={null}>
            <Scene selected={selected} onSelect={setSelected} />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">
          Arrastrá para rotar • Scroll para zoom • Clic en un orgánulo
        </div>
      </div>

      {/* Panel lateral */}
      <div className="lg:w-72 flex flex-col gap-3 p-4 overflow-y-auto">
        {selectedOrg ? (
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <div
              className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center text-lg font-bold"
              style={{ background: selectedOrg.color + "33", border: `2px solid ${selectedOrg.color}` }}
            >
              🔬
            </div>
            <h2 className="text-xl font-bold text-white mb-1">{selectedOrg.name}</h2>
            <p className="text-slate-400 text-sm mb-3 italic">{selectedOrg.desc}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{selectedOrg.func}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-4 text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              ✕ Cerrar
            </button>
          </div>
        ) : (
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-green-400 mb-2">Célula Animal</h2>
            <p className="text-slate-400 text-sm mb-4">
              Hacé clic en cualquier orgánulo para ver su nombre y función.
            </p>
          </div>
        )}

        <div className="space-y-2">
          {organelles.filter((o, i, arr) => arr.findIndex(x => x.name === o.name) === i).map((org) => (
            <button
              key={org.id}
              onClick={() => setSelected(org.id)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm flex items-center gap-3 ${
                selected === org.id
                  ? "bg-slate-700 border-slate-500 text-white"
                  : "bg-bio-card border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200"
              }`}
            >
              <span
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ background: org.color }}
              />
              {org.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
