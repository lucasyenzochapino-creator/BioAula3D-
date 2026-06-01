"use client";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Html, Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface Org {
  id: string; name: string; position: [number,number,number];
  color: string; scale: [number,number,number];
  shape: "sphere"|"capsule"|"golgi"; desc: string; func: string;
}

const organelles: Org[] = [
  {id:"mitocondria1",name:"Mitocondria",position:[2.4,0.4,0.5],color:"#f97316",scale:[1,1,1],shape:"capsule",desc:"Planta de energía",func:"Produce ATP mediante la respiración celular aeróbica."},
  {id:"mitocondria2",name:"Mitocondria",position:[-2.1,1.1,0.3],color:"#f97316",scale:[0.85,0.85,0.85],shape:"capsule",desc:"Planta de energía",func:"Produce ATP mediante la respiración celular aeróbica."},
  {id:"reticulo-er",name:"Retículo Endoplasmático",position:[1.2,-1.5,0.2],color:"#a855f7",scale:[1.1,0.55,0.55],shape:"capsule",desc:"Sistema de transporte",func:"Transporta proteínas y lípidos dentro de la célula."},
  {id:"golgi",name:"Aparato de Golgi",position:[-1.4,-1.1,0.5],color:"#eab308",scale:[1,1,1],shape:"golgi",desc:"Centro de distribución",func:"Modifica, empaqueta y distribuye proteínas y lípidos."},
  {id:"lisosoma",name:"Lisosoma",position:[1.8,1.7,-0.5],color:"#ec4899",scale:[0.55,0.55,0.55],shape:"sphere",desc:"Digestión celular",func:"Contiene enzimas digestivas que descomponen moléculas."},
  {id:"ribosoma1",name:"Ribosoma",position:[0.8,0.8,1.8],color:"#10b981",scale:[0.28,0.28,0.28],shape:"sphere",desc:"Fábrica de proteínas",func:"Sintetiza proteínas leyendo el ARN mensajero."},
  {id:"ribosoma2",name:"Ribosoma",position:[-0.5,0.9,2.0],color:"#10b981",scale:[0.25,0.25,0.25],shape:"sphere",desc:"Fábrica de proteínas",func:"Sintetiza proteínas leyendo el ARN mensajero."},
  {id:"vacuola",name:"Vacuola",position:[-1.8,0.2,-1.2],color:"#06b6d4",scale:[0.8,0.8,0.8],shape:"sphere",desc:"Almacén celular",func:"Almacena nutrientes, agua y productos de desecho."},
  {id:"centrosoma",name:"Centrosoma",position:[0.5,2.0,-0.8],color:"#f43f5e",scale:[0.38,0.38,0.38],shape:"sphere",desc:"Centro organizador",func:"Organiza los microtúbulos y participa en la división celular."},
];

const nucleusInfo = {id:"nucleo",name:"Núcleo",color:"#3b82f6",desc:"Centro de control",func:"Contiene el ADN y dirige todas las actividades de la célula."};

function OrgMesh({org,selected,onSelect}:{org:Org;selected:boolean;onSelect:(id:string)=>void}) {
  const [hov,setHov]=useState(false);
  const ei = selected?1.0:hov?0.5:0.2;
  const col = selected?"#fff":org.color;
  const h={onClick:(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSelect(org.id);},onPointerOver:()=>setHov(true),onPointerOut:()=>setHov(false)};
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.35} position={org.position}>
      <group scale={org.scale} {...h}>
        {org.shape==="capsule"&&<mesh><capsuleGeometry args={[0.28,0.8,10,20]}/><meshPhysicalMaterial color={col} emissive={org.color} emissiveIntensity={ei} roughness={0.25} metalness={0.05}/></mesh>}
        {org.shape==="golgi"&&[0,0.18,0.36,0.52].map((y,i)=>(<mesh key={i} position={[0,y-0.27,0]}><torusGeometry args={[0.55-i*0.05,0.07,10,40]}/><meshPhysicalMaterial color={col} emissive={org.color} emissiveIntensity={ei} roughness={0.2} metalness={0.1}/></mesh>))}
        {org.shape==="sphere"&&<mesh><sphereGeometry args={[0.6,32,32]}/><meshPhysicalMaterial color={col} emissive={org.color} emissiveIntensity={ei} roughness={0.3} metalness={0} transmission={org.id==="vacuola"?0.55:0} thickness={org.id==="vacuola"?1.5:0} ior={1.35}/></mesh>}
        {(hov||selected)&&<Html distanceFactor={8} center><div className="bg-black/80 text-white text-xs px-2 py-1 rounded-lg border border-white/20 whitespace-nowrap pointer-events-none">{org.name}</div></Html>}
      </group>
    </Float>
  );
}

function NucleusComp({selected,onSelect}:{selected:boolean;onSelect:(id:string)=>void}) {
  const [hov,setHov]=useState(false);
  return (
    <group onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSelect("nucleo");}} onPointerOver={()=>setHov(true)} onPointerOut={()=>setHov(false)}>
      <mesh><sphereGeometry args={[1.08,48,48]}/><meshPhysicalMaterial color="#3b82f6" transmission={0.65} roughness={0.1} thickness={0.6} ior={1.4} emissive="#3b82f6" emissiveIntensity={selected?0.8:0.15}/></mesh>
      <mesh position={[0.1,-0.05,0.15]}><sphereGeometry args={[0.38,24,24]}/><meshPhysicalMaterial color="#1e40af" roughness={0.4} emissive="#3b82f6" emissiveIntensity={selected?0.6:0.25}/></mesh>
      {(hov||selected)&&<Html distanceFactor={8} center><div className="bg-black/80 text-white text-xs px-2 py-1 rounded-lg border border-white/20 whitespace-nowrap pointer-events-none">Núcleo</div></Html>}
    </group>
  );
}

function Membrane() {
  const ref=useRef<THREE.Mesh>(null);
  useFrame((_,d)=>{if(ref.current)ref.current.rotation.y+=d*0.04;});
  return <mesh ref={ref}><sphereGeometry args={[3.65,64,64]}/><meshPhysicalMaterial color="#4ade80" transmission={0.93} roughness={0.05} thickness={0.4} ior={1.33} side={THREE.FrontSide} emissive="#22c55e" emissiveIntensity={0.05}/></mesh>;
}

export default function CelulaViewer() {
  const [selected,setSelected]=useState<string|null>(null);
  const allInfo=[nucleusInfo,...organelles];
  const sel=allInfo.find(o=>o.id===selected);
  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-3.5rem)]">
      <div className="relative flex-1 min-h-[350px]">
        <Canvas camera={{position:[0,2,10],fov:50}} dpr={[1,2]}>
          <Suspense fallback={null}>
            <color attach="background" args={["#020617"]}/>
            <fog attach="fog" args={["#020617",18,30]}/>
            <ambientLight intensity={0.15}/>
            <pointLight position={[0,0,0]} intensity={0.6} color="#22c55e"/>
            <Environment preset="warehouse"/>
            <Membrane/>
            <NucleusComp selected={selected==="nucleo"} onSelect={setSelected}/>
            {organelles.map(org=><OrgMesh key={org.id} org={org} selected={selected===org.id} onSelect={setSelected}/>)}
            <ContactShadows position={[0,-4.2,0]} opacity={0.15} scale={20} blur={2.5}/>
            <OrbitControls enablePan={false} minDistance={5} maxDistance={14}/>
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">Arrastrá para rotar • Scroll para zoom • Clic en un orgánulo</div>
      </div>
      <div className="lg:w-72 flex flex-col gap-3 p-4 overflow-y-auto">
        {sel?(
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <div className="w-10 h-10 rounded-xl mb-3 flex items-center justify-center text-lg" style={{background:sel.color+"33",border:`2px solid ${sel.color}`}}>🔬</div>
            <h2 className="text-xl font-bold text-white mb-1">{sel.name}</h2>
            <p className="text-slate-400 text-sm mb-3 italic">{sel.desc}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{sel.func}</p>
            <button onClick={()=>setSelected(null)} className="mt-4 text-xs text-slate-500 hover:text-slate-300">✕ Cerrar</button>
          </div>
        ):(
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-green-400 mb-2">Célula Animal</h2>
            <p className="text-slate-400 text-sm">Hacé clic en cualquier orgánulo para ver su función.</p>
          </div>
        )}
        <div className="space-y-2">
          {allInfo.filter((o,i,arr)=>arr.findIndex(x=>x.name===o.name)===i).map(org=>(
            <button key={org.id} onClick={()=>setSelected(org.id)} className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm flex items-center gap-3 ${selected===org.id?"bg-slate-700 border-slate-500 text-white":"bg-bio-card border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-200"}`}>
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{background:org.color}}/>
              {org.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
