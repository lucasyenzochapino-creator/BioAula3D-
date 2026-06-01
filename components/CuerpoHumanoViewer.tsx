"use client";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Environment, Stars } from "@react-three/drei";
import * as THREE from "three";

const systems = [
  {id:"nervioso",name:"Sistema Nervioso",color:"#a855f7",icon:"🧠",desc:"Coordina las funciones del cuerpo mediante impulsos eléctricos.",parts:["Cerebro","Médula espinal","Nervios periféricos","Neuronas"]},
  {id:"circulatorio",name:"Sistema Circulatorio",color:"#ef4444",icon:"🫀",desc:"Transporte de sangre, oxígeno y nutrientes por todo el cuerpo.",parts:["Corazón","Arterias","Venas","Capilares"]},
  {id:"respiratorio",name:"Sistema Respiratorio",color:"#60a5fa",icon:"🫁",desc:"Intercambio gaseoso entre el organismo y el ambiente.",parts:["Pulmones","Tráquea","Bronquios","Alvéolos"]},
  {id:"digestivo",name:"Sistema Digestivo",color:"#f59e0b",icon:"🍽️",desc:"Procesa los alimentos y absorbe los nutrientes necesarios.",parts:["Estómago","Intestino delgado","Intestino grueso","Hígado"]},
  {id:"oseo",name:"Sistema Óseo",color:"#cbd5e1",icon:"🦴",desc:"Sostén y protección del cuerpo. Produce células sanguíneas.",parts:["Cráneo","Columna vertebral","Costillas","Fémur"]},
];

function Heart({sel,onSel}:{sel:boolean;onSel:()=>void}) {
  const g=useRef<THREE.Group>(null);
  useFrame(({clock})=>{
    if(!g.current) return;
    const s=1+Math.sin(clock.elapsedTime*5.5)*0.15;
    g.current.scale.setScalar(s);
  });
  return (
    <group ref={g} onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSel();}}>
      <mesh position={[-0.14,1.38,0.32] as [number,number,number]}>
        <sphereGeometry args={[0.2,20,20]}/>
        <meshPhysicalMaterial color={sel?"#fff":"#dc2626"} emissive="#ff0000" emissiveIntensity={sel?3.5:1.5} roughness={0.18} metalness={0.12}/>
      </mesh>
      <mesh position={[0.04,1.38,0.32] as [number,number,number]}>
        <sphereGeometry args={[0.17,20,20]}/>
        <meshPhysicalMaterial color={sel?"#fff":"#dc2626"} emissive="#ff0000" emissiveIntensity={sel?3.5:1.5} roughness={0.18} metalness={0.12}/>
      </mesh>
    </group>
  );
}

function Lungs({sel,onSel}:{sel:boolean;onSel:()=>void}) {
  const g=useRef<THREE.Group>(null);
  useFrame(({clock})=>{
    if(!g.current) return;
    const s=1+Math.sin(clock.elapsedTime*1.55)*0.07;
    g.current.scale.set(s,s*0.93,s);
  });
  return (
    <group ref={g} onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSel();}}>
      <mesh position={[-0.42,1.52,0.12] as [number,number,number]}>
        <capsuleGeometry args={[0.19,0.5,8,16]}/>
        <meshPhysicalMaterial color={sel?"#fff":"#93c5fd"} emissive="#60a5fa" emissiveIntensity={sel?3.0:1.0} roughness={0.3} transparent opacity={0.92}/>
      </mesh>
      <mesh position={[0.42,1.52,0.12] as [number,number,number]}>
        <capsuleGeometry args={[0.19,0.5,8,16]}/>
        <meshPhysicalMaterial color={sel?"#fff":"#93c5fd"} emissive="#60a5fa" emissiveIntensity={sel?3.0:1.0} roughness={0.3} transparent opacity={0.92}/>
      </mesh>
    </group>
  );
}

function Brain({sel,onSel}:{sel:boolean;onSel:()=>void}) {
  const ref=useRef<THREE.Mesh>(null);
  useFrame(({clock})=>{
    if(ref.current){
      const mat=ref.current.material as THREE.MeshPhysicalMaterial;
      mat.emissiveIntensity=sel?3.5:0.5+Math.sin(clock.elapsedTime*1.1)*0.2;
    }
  });
  return (
    <mesh ref={ref} position={[0,3.28,0.04] as [number,number,number]} onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSel();}}>
      <sphereGeometry args={[0.43,32,32]}/>
      <meshPhysicalMaterial color={sel?"#fff":"#f9a8d4"} emissive="#e879f9" emissiveIntensity={sel?3.5:0.5} roughness={0.78}/>
    </mesh>
  );
}

function Spine({sel,onSel}:{sel:boolean;onSel:()=>void}) {
  return (
    <group onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSel();}}>
      {Array.from({length:16},(_,i)=>(
        <mesh key={i} position={[0,-2.05+i*0.38,-0.24] as [number,number,number]}>
          <cylinderGeometry args={[0.07,0.08,0.22,8]}/>
          <meshPhysicalMaterial color={sel?"#fff":"#e2e8f0"} emissive="#94a3b8" emissiveIntensity={sel?2.5:0.3} roughness={0.28} metalness={0.12}/>
        </mesh>
      ))}
    </group>
  );
}

function Digestive({sel,onSel}:{sel:boolean;onSel:()=>void}) {
  const ei=sel?3.0:0.8;
  return (
    <group onClick={(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSel();}}>
      <mesh position={[-0.22,0.62,0.3] as [number,number,number]}>
        <sphereGeometry args={[0.22,16,16]}/>
        <meshPhysicalMaterial color={sel?"#fff":"#fbbf24"} emissive="#f59e0b" emissiveIntensity={ei} roughness={0.4}/>
      </mesh>
      <mesh position={[0.3,0.72,0.2] as [number,number,number]} scale={[1.25,0.62,0.62] as [number,number,number]}>
        <sphereGeometry args={[0.22,16,16]}/>
        <meshPhysicalMaterial color={sel?"#fff":"#b45309"} emissive="#92400e" emissiveIntensity={ei} roughness={0.5}/>
      </mesh>
      <mesh position={[0,-0.28,0.14] as [number,number,number]} scale={[1,0.52,0.72] as [number,number,number]}>
        <torusGeometry args={[0.27,0.09,8,24]}/>
        <meshPhysicalMaterial color={sel?"#fff":"#fbbf24"} emissive="#f59e0b" emissiveIntensity={ei} roughness={0.4}/>
      </mesh>
    </group>
  );
}

const SKIN_COLOR="#fde8d5";
const SKIN_EMI="#f97316";

export default function CuerpoHumanoViewer() {
  const [selected,setSelected]=useState<string|null>(null);
  const active=systems.find(s=>s.id===selected);
  const sel=(id:string)=>()=>setSelected(id);

  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-3.5rem)]">
      <div className="relative flex-1 min-h-[350px]">
        <Canvas camera={{position:[0,0.5,8.5],fov:48}} dpr={[1,2]}
          gl={{toneMapping:THREE.ACESFilmicToneMapping,toneMappingExposure:1.2,antialias:true}}>
          <Suspense fallback={null}>
            <color attach="background" args={["#020617"]}/>
            <fog attach="fog" args={["#020617",14,28]}/>
            <Stars radius={80} depth={40} count={2000} factor={3} fade speed={0.4}/>
            <ambientLight intensity={0.1}/>
            <pointLight position={[0,3,4]} intensity={2.0} color="#ffffff"/>
            <pointLight position={[-3,1,2]} intensity={0.8} color="#60a5fa"/>
            <pointLight position={[3,-1,2]} intensity={0.6} color="#f97316"/>
            <Environment preset="warehouse"/>

            {/* Skin shell */}
            <mesh position={[0,3.2,0]}><sphereGeometry args={[0.58,48,48]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[0,2.56,0]}><cylinderGeometry args={[0.19,0.22,0.44,16]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[0,1.35,0]} scale={[1.05,1.35,0.76]}><sphereGeometry args={[0.72,48,48]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[0,0.08,0]} scale={[0.9,0.7,0.76]}><sphereGeometry args={[0.65,32,32]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[-0.82,2.12,0]} scale={0.55}><sphereGeometry args={[0.48,24,24]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[0.82,2.12,0]} scale={0.55}><sphereGeometry args={[0.48,24,24]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[-1.12,1.62,0]}><capsuleGeometry args={[0.16,0.72,8,12]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[1.12,1.62,0]}><capsuleGeometry args={[0.16,0.72,8,12]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[-1.14,1.08,0]} scale={0.38}><sphereGeometry args={[0.35,16,16]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[1.14,1.08,0]} scale={0.38}><sphereGeometry args={[0.35,16,16]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[-1.14,0.68,0]}><capsuleGeometry args={[0.13,0.6,8,12]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[1.14,0.68,0]}><capsuleGeometry args={[0.13,0.6,8,12]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[-1.14,0.28,0]} scale={0.48}><sphereGeometry args={[0.28,16,16]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[1.14,0.28,0]} scale={0.48}><sphereGeometry args={[0.28,16,16]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[-0.44,-0.95,0]}><capsuleGeometry args={[0.23,0.85,8,12]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[0.44,-0.95,0]}><capsuleGeometry args={[0.23,0.85,8,12]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[-0.44,-1.55,0]} scale={0.48}><sphereGeometry args={[0.35,16,16]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[0.44,-1.55,0]} scale={0.48}><sphereGeometry args={[0.35,16,16]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[-0.44,-2.1,0]}><capsuleGeometry args={[0.18,0.8,8,12]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[0.44,-2.1,0]}><capsuleGeometry args={[0.18,0.8,8,12]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[-0.44,-2.66,0.15]} scale={[1,0.42,1.5]}><sphereGeometry args={[0.22,16,16]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>
            <mesh position={[0.44,-2.66,0.15]} scale={[1,0.42,1.5]}><sphereGeometry args={[0.22,16,16]}/><meshPhysicalMaterial color={SKIN_COLOR} transmission={0.62} roughness={0.5} thickness={0.9} ior={1.36} emissive={SKIN_EMI} emissiveIntensity={0.06}/></mesh>

            {/* Internal organs */}
            <Brain sel={selected==="nervioso"} onSel={sel("nervioso")}/>
            <Heart sel={selected==="circulatorio"} onSel={sel("circulatorio")}/>
            <Lungs sel={selected==="respiratorio"} onSel={sel("respiratorio")}/>
            <Digestive sel={selected==="digestivo"} onSel={sel("digestivo")}/>
            <Spine sel={selected==="oseo"} onSel={sel("oseo")}/>

            <OrbitControls enablePan={false} minDistance={4} maxDistance={16}/>
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">Clic en los órganos para explorar cada sistema</div>
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
            <h2 className="text-lg font-bold text-red-400 mb-2">Cuerpo Humano 3D</h2>
            <p className="text-slate-400 text-sm">Explorá los sistemas internos haciendo clic en los órganos iluminados.</p>
          </div>
        )}
        <div className="space-y-2">
          {systems.map(s=>(
            <button key={s.id} onClick={()=>setSelected(s.id)} className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm flex items-center gap-3 ${selected===s.id?"bg-slate-700 border-slate-500 text-white":"bg-bio-card border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white"}`}>
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{background:s.color}}/>
              <span>{s.icon} {s.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
