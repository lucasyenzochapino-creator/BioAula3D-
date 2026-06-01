"use client";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Sphere, Cylinder, Html, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

const systems = [
  {id:"circulatorio",name:"Sistema Circulatorio",color:"#ef4444",icon:"🫀",desc:"Transporte de sangre, oxígeno y nutrientes por todo el cuerpo.",parts:["Corazón","Arterias","Venas","Capilares"]},
  {id:"respiratorio",name:"Sistema Respiratorio",color:"#60a5fa",icon:"🫁",desc:"Intercambio gaseoso entre el organismo y el ambiente.",parts:["Pulmones","Tráquea","Bronquios","Alvéolos"]},
  {id:"digestivo",name:"Sistema Digestivo",color:"#f59e0b",icon:"🍽️",desc:"Procesa los alimentos y absorbe los nutrientes necesarios.",parts:["Estómago","Intestino delgado","Intestino grueso","Hígado"]},
  {id:"nervioso",name:"Sistema Nervioso",color:"#a855f7",icon:"🧠",desc:"Coordina las funciones del cuerpo mediante impulsos eléctricos.",parts:["Cerebro","Médula espinal","Nervios periféricos","Neuronas"]},
  {id:"oseo",name:"Sistema Óseo",color:"#cbd5e1",icon:"🦴",desc:"Sostén y protección del cuerpo. Produce células sanguíneas.",parts:["Cráneo","Columna vertebral","Costillas","Fémur"]},
];

const bodyParts = [
  {id:"cabeza",systemId:"nervioso",position:[0,3.2,0] as [number,number,number],scale:[0.85,0.85,0.85] as [number,number,number],shape:"sphere"},
  {id:"torso",systemId:"circulatorio",position:[0,1.2,0] as [number,number,number],scale:[0.85,1.5,0.65] as [number,number,number],shape:"sphere"},
  {id:"pulmones",systemId:"respiratorio",position:[0,1.5,0.25] as [number,number,number],scale:[0.55,0.85,0.38] as [number,number,number],shape:"sphere"},
  {id:"abdomen",systemId:"digestivo",position:[0,-0.2,0] as [number,number,number],scale:[0.7,0.95,0.6] as [number,number,number],shape:"sphere"},
  {id:"brazo-izq",systemId:"oseo",position:[-1.55,1.1,0] as [number,number,number],scale:[0.22,1.4,0.22] as [number,number,number],shape:"cylinder"},
  {id:"brazo-der",systemId:"oseo",position:[1.55,1.1,0] as [number,number,number],scale:[0.22,1.4,0.22] as [number,number,number],shape:"cylinder"},
  {id:"pierna-izq",systemId:"oseo",position:[-0.5,-2.0,0] as [number,number,number],scale:[0.28,1.75,0.28] as [number,number,number],shape:"cylinder"},
  {id:"pierna-der",systemId:"oseo",position:[0.5,-2.0,0] as [number,number,number],scale:[0.28,1.75,0.28] as [number,number,number],shape:"cylinder"},
];

const sysColors:Record<string,string>={circulatorio:"#ef4444",respiratorio:"#60a5fa",digestivo:"#f59e0b",nervioso:"#a855f7",oseo:"#cbd5e1"};

function BodyPart({part,selected,onSelect}:{part:typeof bodyParts[0];selected:boolean;onSelect:(id:string)=>void}) {
  const ref=useRef<THREE.Mesh>(null);
  const [hov,setHov]=useState(false);
  const color=sysColors[part.systemId];
  const sys=systems.find(s=>s.id===part.systemId);
  const ei=selected?0.8:hov?0.4:0.15;
  const handleClick=(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSelect(part.systemId);};
  return (
    <group position={part.position}>
      {part.shape==="cylinder"?(
        <Cylinder ref={ref} args={[1,1,1,20]} scale={part.scale} onClick={handleClick} onPointerOver={()=>setHov(true)} onPointerOut={()=>setHov(false)}>
          <meshPhysicalMaterial color={selected?"#fff":color} emissive={color} emissiveIntensity={ei} roughness={0.3} metalness={0.05}/>
        </Cylinder>
      ):(
        <Sphere ref={ref} args={[0.7,32,32]} scale={part.scale} onClick={handleClick} onPointerOver={()=>setHov(true)} onPointerOut={()=>setHov(false)}>
          <meshPhysicalMaterial color={selected?"#fff":color} emissive={color} emissiveIntensity={ei} roughness={0.3} metalness={0} transmission={part.id==="pulmones"||part.id==="abdomen"?0.2:0} thickness={0.5} ior={1.3}/>
        </Sphere>
      )}
      {(hov||selected)&&sys&&(
        <Html distanceFactor={8} center>
          <div className="bg-black/80 text-white text-xs px-2 py-1 rounded-lg border border-white/20 whitespace-nowrap pointer-events-none">{sys.name}</div>
        </Html>
      )}
    </group>
  );
}

export default function CuerpoHumanoViewer() {
  const [selected,setSelected]=useState<string|null>(null);
  const active=systems.find(s=>s.id===selected);
  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-3.5rem)]">
      <div className="relative flex-1 min-h-[350px]">
        <Canvas camera={{position:[0,0,11],fov:50}} dpr={[1,2]}>
          <Suspense fallback={null}>
            <color attach="background" args={["#020617"]}/>
            <fog attach="fog" args={["#020617",14,28]}/>
            <ambientLight intensity={0.2}/>
            <pointLight position={[0,3,4]} intensity={1.2} color="#ffffff"/>
            <Environment preset="warehouse"/>
            {bodyParts.map(p=>(
              <BodyPart key={p.id} part={p} selected={selected===p.systemId} onSelect={setSelected}/>
            ))}
            <OrbitControls enablePan={false} minDistance={5} maxDistance={18}/>
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">Clic en cualquier parte del cuerpo</div>
      </div>
      <div className="lg:w-72 flex flex-col gap-3 p-4 overflow-y-auto">
        {active?(
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <div className="text-3xl mb-2">{active.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{active.name}</h2>
            <p className="text-slate-300 text-sm mb-3 leading-relaxed">{active.desc}</p>
            <ul className="space-y-1">{active.parts.map(p=><li key={p} className="text-slate-400 text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-500"/>{p}</li>)}</ul>
            <button onClick={()=>setSelected(null)} className="mt-4 text-xs text-slate-500 hover:text-slate-300">✕ Cerrar</button>
          </div>
        ):(
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-red-400 mb-2">Cuerpo Humano</h2>
            <p className="text-slate-400 text-sm">Clic en cualquier parte para explorar sus sistemas.</p>
          </div>
        )}
        <div className="space-y-2">
          {systems.map(s=>(
            <button key={s.id} onClick={()=>setSelected(s.id)} className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm flex items-center gap-3 ${selected===s.id?"bg-slate-700 border-slate-500 text-white":"bg-bio-card border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white"}`}>
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{background:sysColors[s.id]}}/>
              <span>{s.icon} {s.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
