"use client";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { OrbitControls, Html, Environment, Float, ContactShadows, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const parts = [
  {id:"pared",name:"Pared Celular",pos:[0,0,0] as [number,number,number],scale:[1,1,1] as [number,number,number],color:"#15803d",func:"Capa rígida de celulosa que rodea la membrana. Da forma y protección mecánica.",extra:"Solo en células vegetales, hongos y bacterias.",shape:"wall"},
  {id:"membrana",name:"Membrana Plasmática",pos:[0,0,0] as [number,number,number],scale:[0.88,0.88,0.88] as [number,number,number],color:"#4ade80",func:"Regula el paso de sustancias hacia adentro y afuera de la célula.",extra:"Presente en todas las células.",shape:"wall"},
  {id:"cloroplasto1",name:"Cloroplasto",pos:[2.0,0.5,0.3] as [number,number,number],scale:[1,1,1] as [number,number,number],color:"#16a34a",func:"Realiza la fotosíntesis convirtiendo luz solar en glucosa.",extra:"Contiene clorofila, que da el color verde.",shape:"capsule"},
  {id:"cloroplasto2",name:"Cloroplasto",pos:[-1.8,1.0,0.2] as [number,number,number],scale:[0.85,0.85,0.85] as [number,number,number],color:"#16a34a",func:"Realiza la fotosíntesis convirtiendo luz solar en glucosa.",extra:"Contiene clorofila, que da el color verde.",shape:"capsule"},
  {id:"vacuola",name:"Vacuola Central",pos:[0.1,-0.1,0.1] as [number,number,number],scale:[0.82,0.82,0.82] as [number,number,number],color:"#06b6d4",func:"Gran vacuola central que mantiene la turgencia y almacena nutrientes.",extra:"Puede ocupar hasta el 90% del volumen celular.",shape:"vacuola"},
  {id:"nucleo",name:"Núcleo",pos:[0,0,0] as [number,number,number],scale:[0.35,0.35,0.35] as [number,number,number],color:"#3b82f6",func:"Contiene el ADN y dirige la síntesis de proteínas.",extra:"Centro de control de toda la célula.",shape:"sphere"},
  {id:"mitocondria",name:"Mitocondria",pos:[1.5,-1.2,0.4] as [number,number,number],scale:[0.9,0.9,0.9] as [number,number,number],color:"#f97316",func:"Produce ATP (energía) mediante la respiración celular.",extra:"Presente tanto en células animales como vegetales.",shape:"capsule"},
  {id:"plasmodesmos",name:"Plasmodesmos",pos:[3.2,0,0] as [number,number,number],scale:[0.2,0.2,0.2] as [number,number,number],color:"#fbbf24",func:"Canales que conectan células vegetales vecinas.",extra:"Equivalente a las uniones comunicantes animales.",shape:"sphere"},
];

function PlantPart({part,selected,onSelect}:{part:typeof parts[0];selected:boolean;onSelect:(id:string)=>void}) {
  const [hov,setHov]=useState(false);
  const ei=selected?3.5:hov?2.0:0.9;
  const col=selected?"#fff":part.color;
  const handlers={onClick:(e:ThreeEvent<MouseEvent>)=>{e.stopPropagation();onSelect(part.id);},onPointerOver:()=>setHov(true),onPointerOut:()=>setHov(false)};
  if(part.shape==="wall") {
    return (
      <mesh scale={part.scale} {...handlers}>
        <sphereGeometry args={[3.6,64,64]}/>
        <meshPhysicalMaterial color={part.color} transmission={part.id==="pared"?0.88:0.75} roughness={0.06} thickness={0.5} ior={1.35} side={THREE.FrontSide} emissive={part.color} emissiveIntensity={0.15}/>
      </mesh>
    );
  }
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.3} position={part.pos}>
      <group scale={part.scale} {...handlers}>
        {part.shape==="capsule"&&<mesh><capsuleGeometry args={[0.28,0.8,10,20]}/><meshPhysicalMaterial color={col} emissive={part.color} emissiveIntensity={ei} roughness={0.2} metalness={0.05}/></mesh>}
        {part.shape==="vacuola"&&<mesh><sphereGeometry args={[0.6,32,32]}/><meshPhysicalMaterial color={col} emissive={part.color} emissiveIntensity={ei*0.7} roughness={0.08} metalness={0} transmission={0.6} thickness={2} ior={1.35}/></mesh>}
        {part.shape==="sphere"&&<mesh><sphereGeometry args={[0.6,32,32]}/><meshPhysicalMaterial color={col} emissive={part.color} emissiveIntensity={ei} roughness={0.25} metalness={0} transmission={part.id==="nucleo"?0.5:0} thickness={part.id==="nucleo"?1:0} ior={1.4}/></mesh>}
        {(hov||selected)&&<Html distanceFactor={8} center><div className="bg-black/80 text-white text-xs px-2 py-1 rounded-lg border border-white/20 whitespace-nowrap pointer-events-none">{part.name}</div></Html>}
      </group>
    </Float>
  );
}

export default function PlantaViewer() {
  const [selected,setSelected]=useState<string|null>(null);
  const active=parts.find(p=>p.id===selected);
  return (
    <div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-3.5rem)]">
      <div className="relative flex-1 min-h-[350px]">
        <Canvas camera={{position:[0,2,10],fov:50}} dpr={[1,2]}
          gl={{toneMapping:THREE.ACESFilmicToneMapping,toneMappingExposure:1.4,antialias:true}}>
          <Suspense fallback={null}>
            <color attach="background" args={["#020617"]}/>
            <fog attach="fog" args={["#020617",18,30]}/>
            <ambientLight intensity={0.08}/>
            <pointLight position={[0,0,0]} intensity={0.8} color="#22c55e"/>
            <Environment preset="warehouse"/>
            <Sparkles count={120} scale={7} size={2.0} speed={0.35} color="#4ade80" opacity={0.2}/>
            {parts.filter(p=>p.shape==="wall").map(p=><PlantPart key={p.id} part={p} selected={selected===p.id} onSelect={setSelected}/>)}
            {parts.filter(p=>p.shape!=="wall").map(p=><PlantPart key={p.id} part={p} selected={selected===p.id} onSelect={setSelected}/>)}
            <ContactShadows position={[0,-4.2,0]} opacity={0.12} scale={20} blur={2.5}/>
            <OrbitControls enablePan={false} minDistance={5} maxDistance={14}/>
          </Suspense>
        </Canvas>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-500 text-xs">Arrastrá para rotar • Clic en un orgánulo</div>
      </div>
      <div className="lg:w-72 flex flex-col gap-3 p-4 overflow-y-auto">
        {active?(
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-xl font-bold text-white mb-2">{active.name}</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">{active.func}</p>
            {active.extra&&<p className="text-emerald-400 text-xs italic border-t border-slate-700 pt-2 mt-2">{active.extra}</p>}
            <button onClick={()=>setSelected(null)} className="mt-4 text-xs text-slate-500 hover:text-slate-300">✕ Cerrar</button>
          </div>
        ):(
          <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
            <h2 className="text-lg font-bold text-emerald-400 mb-2">Célula Vegetal 🌿</h2>
            <p className="text-slate-400 text-sm">Clic en cualquier estructura para explorarla.</p>
          </div>
        )}
        <div className="space-y-2">
          {parts.filter((p,i,arr)=>arr.findIndex(x=>x.name===p.name)===i).map(p=>(
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
