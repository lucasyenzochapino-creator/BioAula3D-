"use client";
import { useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Html, Environment, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

const partsInfo = [
  {id:"soma",name:"Cuerpo Celular (Soma)",color:"#a855f7",func:"Centro metabólico de la neurona. Contiene el núcleo y dirige las funciones celulares."},
  {id:"nucleo",name:"Núcleo Neuronal",color:"#3b82f6",func:"Contiene el ADN y controla la expresión génica de la neurona."},
  {id:"dendrita",name:"Dendrita",color:"#f59e0b",func:"Recibe señales eléctricas de otras neuronas y las transmite al soma."},
  {id:"axon",name:"Axón",color:"#22c55e",func:"Conduce el impulso nervioso desde el soma hacia la terminal axónica."},
  {id:"mielina",name:"Vaina de Mielina",color:"#e2e8f0",func:"Acelera la conducción del impulso nervioso actuando como aislante eléctrico."},
  {id:"terminal",name:"Terminal Axónica",color:"#ef4444",func:"Libera neurotransmisores a la sinapsis para comunicarse con otras células."},
];

function SynapticPulse() {
  const ref = useRef<THREE.Mesh>(null);
  const axonPts = useMemo(() => [
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(0.1,-1.5,0),
    new THREE.Vector3(-0.1,-3,0),
    new THREE.Vector3(0,-4.5,0),
    new THREE.Vector3(0,-5.5,0)
  ], []);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(axonPts), [axonPts]);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = (clock.elapsedTime * 0.38) % 1;
    const pos = curve.getPoint(t);
    ref.current.position.copy(pos);
    (ref.current.material as THREE.MeshPhysicalMaterial).emissiveIntensity = 3.5 + Math.sin(clock.elapsedTime * 28) * 0.8;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.11, 12, 12]}/>
      <meshPhysicalMaterial color="#22c55e" emissive="#22c55e" emissiveIntensity={3.5} roughness={0.05}/>
    </mesh>
  );
}

function Neuron({selected,onSelect}:{selected:string|null;onSelect:(id:string)=>void}) {
  const dendrites=[
    [new THREE.Vector3(0,0,0),new THREE.Vector3(1.2,1.4,0.3),new THREE.Vector3(1.8,2.2,0.5),new THREE.Vector3(1.5,3.0,0.2)],
    [new THREE.Vector3(0,0,0),new THREE.Vector3(-1.3,1.2,0.2),new THREE.Vector3(-2.0,2.0,0.4),new THREE.Vector3(-1.7,2.9,0.1)],
    [new THREE.Vector3(0,0,0),new THREE.Vector3(0.5,1.5,-0.8),new THREE.Vector3(0.2,2.4,-1.2)],
    [new THREE.Vector3(0,0,0),new THREE.Vector3(-0.8,1.3,-0.6),new THREE.Vector3(-1.2,2.2,-0.9)],
    [new THREE.Vector3(0,0,0),new THREE.Vector3(1.0,1.0,0.9),new THREE.Vector3(1.6,1.8,1.3)],
  ];
  const axonPts=[new THREE.Vector3(0,0,0),new THREE.Vector3(0.1,-1.5,0),new THREE.Vector3(-0.1,-3,0),new THREE.Vector3(0,-4.5,0),new THREE.Vector3(0,-5.5,0)];
  return (
    <group>
      <Float speed={0.8} floatIntensity={0.2}>
        <mesh onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSelect("soma");}}>
          <sphereGeometry args={[0.85,48,48]}/>
          <meshPhysicalMaterial color={selected==="soma"?"#fff":"#a855f7"} emissive="#a855f7" emissiveIntensity={selected==="soma"?3.5:1.1} roughness={0.18} metalness={0}/>
        </mesh>
        <mesh onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSelect("nucleo");}}>
          <sphereGeometry args={[0.4,32,32]}/>
          <meshPhysicalMaterial color={selected==="nucleo"?"#fff":"#3b82f6"} transmission={0.5} roughness={0.08} thickness={0.5} ior={1.4} emissive="#3b82f6" emissiveIntensity={selected==="nucleo"?3.0:1.0}/>
        </mesh>
      </Float>
      {dendrites.map((pts,i)=>(
        <mesh key={i} onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSelect("dendrita");}}>
          <primitive object={new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),30,0.07,8,false)} attach="geometry"/>
          <meshPhysicalMaterial color={selected==="dendrita"?"#fff":"#f59e0b"} emissive="#f59e0b" emissiveIntensity={selected==="dendrita"?3.0:0.9} roughness={0.2} metalness={0}/>
        </mesh>
      ))}
      <mesh onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSelect("axon");}}>
        <primitive object={new THREE.TubeGeometry(new THREE.CatmullRomCurve3(axonPts),60,0.1,8,false)} attach="geometry"/>
        <meshPhysicalMaterial color={selected==="axon"?"#fff":"#22c55e"} emissive="#22c55e" emissiveIntensity={selected==="axon"?3.0:0.8} roughness={0.18} metalness={0.05}/>
      </mesh>
      {[-1.2,-2.2,-3.2,-4.2].map((y,i)=>(
        <mesh key={i} position={[0,y,0]} onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSelect("mielina");}}>
          <cylinderGeometry args={[0.22,0.22,0.7,16]}/>
          <meshPhysicalMaterial color={selected==="mielina"?"#fff":"#e2e8f0"} transmission={0.4} roughness={0.08} thickness={0.3} ior={1.3} emissive="#e2e8f0" emissiveIntensity={selected==="mielina"?2.5:0.4}/>
        </mesh>
      ))}
      <Float speed={1.5} floatIntensity={0.3} position={[0,-5.5,0]}>
        <mesh onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSelect("terminal");}}>
          <sphereGeometry args={[0.35,24,24]}/>
          <meshPhysicalMaterial color={selected==="terminal"?"#fff":"#ef4444"} emissive="#ef4444" emissiveIntensity={selected==="terminal"?3.5:2.0} roughness={0.12} metalness={0.1}/>
        </mesh>
      </Float>
      <SynapticPulse/>
    </group>
  );
}

export default function SistemaNerviosoViewer() {
  const [selected,setSelected]=useState<string|null>(null);
  const active=partsInfo.find(p=>p.id===selected);
  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-3.5rem)]">
      <div className="relative flex-1 min-h-[350px]">
        <Canvas camera={{position:[0,0,13],fov:50}} dpr={[1,2]}
          gl={{toneMapping:THREE.ACESFilmicToneMapping,toneMappingExposure:1.3,antialias:true}}>
          <Suspense fallback={null}>
            <color attach="background" args={["#020617"]}/>
            <fog attach="fog" args={["#020617",15,30]}/>
            <Stars radius={80} depth={40} count={1500} factor={2.5} fade speed={0.4}/>
            <ambientLight intensity={0.08}/>
            <pointLight position={[3,3,3]} intensity={1.8} color="#a855f7"/>
            <Environment preset="warehouse"/>
            <Neuron selected={selected} onSelect={setSelected}/>
            <OrbitControls enablePan={false} minDistance={6} maxDistance={20}/>
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">Observá el impulso eléctrico • Arrastrá para rotar • Clic en una parte</div>
      </div>
      <div className="lg:w-72 flex flex-col gap-3 p-4 overflow-y-auto">
        {active?(
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <div className="w-3 h-3 rounded-full mb-3" style={{background:active.color}}/>
            <h2 className="text-xl font-bold text-white mb-2">{active.name}</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{active.func}</p>
            <button onClick={()=>setSelected(null)} className="mt-4 text-xs text-slate-500 hover:text-slate-300">✕ Cerrar</button>
          </div>
        ):(
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-purple-400 mb-2">Neurona 3D</h2>
            <p className="text-slate-400 text-sm">Observá el impulso eléctrico viajando por el axón. Clic en cualquier parte.</p>
          </div>
        )}
        <div className="space-y-2">
          {partsInfo.map(p=>(
            <button key={p.id} onClick={()=>setSelected(p.id)} className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm flex items-center gap-3 ${selected===p.id?"bg-slate-700 border-slate-500 text-white":"bg-bio-card border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white"}`}>
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{background:p.color}}/>
              {p.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
