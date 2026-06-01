"use client";
import { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Environment, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const BASES = [
  {id:"adenina",name:"Adenina (A)",color:"#ef4444",pair:"T",func:"Base púrica que se empareja con Timina mediante 2 enlaces de hidrógeno."},
  {id:"timina",name:"Timina (T)",color:"#60a5fa",pair:"A",func:"Base pirimidínica que se empareja con Adenina mediante 2 enlaces de hidrógeno."},
  {id:"guanina",name:"Guanina (G)",color:"#22c55e",pair:"C",func:"Base púrica que se empareja con Citosina mediante 3 enlaces de hidrógeno."},
  {id:"citosina",name:"Citosina (C)",color:"#f59e0b",pair:"G",func:"Base pirimidínica que se empareja con Guanina mediante 3 enlaces de hidrógeno."},
];
const BASE_COLORS:Record<string,string>={A:"#ef4444",T:"#60a5fa",G:"#22c55e",C:"#f59e0b"};
const COMPLEMENT:Record<string,string>={A:"T",T:"A",G:"C",C:"G"};
const SEQUENCE=["A","T","G","C","A","G","T","C","G","A","T","G","C","A","T","G","C","A","G","T"];

function HelixStrand({angleOffset,color}:{angleOffset:number;color:string}) {
  const geom=useMemo(()=>{
    const pts:THREE.Vector3[]=[];
    for(let i=0;i<=300;i++){const t=i/300;const a=t*Math.PI*4+angleOffset;pts.push(new THREE.Vector3(Math.cos(a)*1.4,t*8-4,Math.sin(a)*1.4));}
    return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),200,0.09,8,false);
  },[angleOffset]);
  return <mesh geometry={geom}><meshPhysicalMaterial color={color} emissive={color} emissiveIntensity={1.0} roughness={0.12} metalness={0.45}/></mesh>;
}

function DNAHelix({selected,onSelect}:{selected:string|null;onSelect:(b:string)=>void}) {
  const groupRef=useRef<THREE.Group>(null);
  useFrame((_,d)=>{if(groupRef.current)groupRef.current.rotation.y+=d*0.3;});
  const pairs=useMemo(()=>SEQUENCE.map((base,i)=>{
    const angle=(i/SEQUENCE.length)*Math.PI*4;
    const y=(i/SEQUENCE.length)*8-4;
    const x1=Math.cos(angle)*1.4,z1=Math.sin(angle)*1.4;
    const x2=Math.cos(angle+Math.PI)*1.4,z2=Math.sin(angle+Math.PI)*1.4;
    return {base,pair:COMPLEMENT[base],y,x1,z1,x2,z2};
  }),[]);

  return (
    <group ref={groupRef}>
      <HelixStrand angleOffset={0} color="#94a3b8"/>
      <HelixStrand angleOffset={Math.PI} color="#64748b"/>
      {pairs.map((p,i)=>{
        const dir=new THREE.Vector3(p.x2-p.x1,0,p.z2-p.z1);
        const len=dir.length()*0.72;
        const mid=new THREE.Vector3((p.x1+p.x2)/2,p.y,(p.z1+p.z2)/2);
        const q=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),dir.normalize());
        return (
          <group key={i}>
            <mesh position={[p.x1,p.y,p.z1]} onClick={(e)=>{e.stopPropagation();onSelect(p.base);}}>
              <sphereGeometry args={[0.21,16,16]}/>
              <meshPhysicalMaterial color={BASE_COLORS[p.base]} emissive={BASE_COLORS[p.base]} emissiveIntensity={selected===p.base?4.0:1.8} roughness={0.1} metalness={0.1}/>
            </mesh>
            <mesh position={[p.x2,p.y,p.z2]} onClick={(e)=>{e.stopPropagation();onSelect(p.pair);}}>
              <sphereGeometry args={[0.21,16,16]}/>
              <meshPhysicalMaterial color={BASE_COLORS[p.pair]} emissive={BASE_COLORS[p.pair]} emissiveIntensity={selected===p.pair?4.0:1.8} roughness={0.1} metalness={0.1}/>
            </mesh>
            <mesh position={[mid.x,mid.y,mid.z]} quaternion={[q.x,q.y,q.z,q.w]}>
              <cylinderGeometry args={[0.035,0.035,len,6]}/>
              <meshStandardMaterial color="#475569" transparent opacity={0.5}/>
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export default function ADNViewer() {
  const [selected,setSelected]=useState<string|null>(null);
  const activeBase=BASES.find(b=>{const m:Record<string,string>={A:"adenina",T:"timina",G:"guanina",C:"citosina"};return m[selected||""]===b.id;});
  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-3.5rem)]">
      <div className="relative flex-1 min-h-[350px]">
        <Canvas camera={{position:[0,0,9],fov:50}} dpr={[1,2]}
          gl={{toneMapping:THREE.ACESFilmicToneMapping,toneMappingExposure:1.0,antialias:true}}>
          <Suspense fallback={null}>
            <color attach="background" args={["#020617"]}/>
            <fog attach="fog" args={["#020617",12,25]}/>
            <Stars radius={80} depth={40} count={1500} factor={2.5} fade speed={0.4}/>
            <ambientLight intensity={0.12}/>
            <Environment preset="warehouse"/>
            <DNAHelix selected={selected} onSelect={setSelected}/>
            <EffectComposer>
              <Bloom luminanceThreshold={0.12} intensity={2.8} mipmapBlur levels={9}/>
            </EffectComposer>
            <OrbitControls enablePan={false} minDistance={4} maxDistance={15}/>
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">Arrastrá para rotar • Clic en una base nitrogenada</div>
      </div>
      <div className="lg:w-72 flex flex-col gap-3 p-4 overflow-y-auto">
        {activeBase?(
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <div className="text-3xl font-black mb-2" style={{color:BASE_COLORS[selected as string]}}>{selected}</div>
            <h2 className="text-xl font-bold text-white mb-1">{activeBase.name}</h2>
            <p className="text-slate-400 text-sm mb-2">Par: <span className="font-bold text-white">{activeBase.pair}</span></p>
            <p className="text-slate-300 text-sm leading-relaxed">{activeBase.func}</p>
            <button onClick={()=>setSelected(null)} className="mt-4 text-xs text-slate-500 hover:text-slate-300">✕ Cerrar</button>
          </div>
        ):(
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-blue-400 mb-2">Doble Hélice del ADN</h2>
            <p className="text-slate-400 text-sm">Clic en una base nitrogenada.</p>
          </div>
        )}
        <div className="space-y-2">
          {BASES.map(b=>(
            <button key={b.id} onClick={()=>setSelected(b.id.charAt(0).toUpperCase())} className="w-full text-left px-4 py-3 rounded-xl border border-slate-800 bg-bio-card text-slate-400 hover:border-slate-600 hover:text-white transition-all text-sm flex items-center gap-3">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{background:BASE_COLORS[b.id==="adenina"?"A":b.id==="timina"?"T":b.id==="guanina"?"G":"C"]}}/>
              {b.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
