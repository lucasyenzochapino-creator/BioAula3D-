"use client";
import { useState } from "react";

export interface Structure {
  name: string;
  desc: string;
  color: string;
}

interface Props {
  uid: string;
  title: string;
  subtitle: string;
  accent: string;
  intro: string;
  structures: Structure[];
}

export default function SketchfabViewer({ uid, title, subtitle, accent, intro, structures }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const embed = `https://sketchfab.com/models/${uid}/embed?ui_theme=dark&autospin=0.2&ui_infos=0&ui_controls=1&ui_stop=0&annotations_visible=1&ui_annotations=1`;

  return (
    <div className="flex flex-col lg:flex-row gap-0 h-[calc(100vh-3.5rem)]">
      <div className="relative flex-1 min-h-[350px] bg-black">
        <iframe
          src={embed}
          title={title}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-500 text-xs pointer-events-none bg-black/40 px-3 py-1 rounded-full">
          Arrastrá para rotar · Scroll para zoom · Tocá los puntos ⓘ para ver cada estructura
        </div>
      </div>
      <div className="lg:w-80 lg:min-w-80 flex flex-col bg-bio-card border-l border-slate-800 overflow-hidden">
        <div className="p-4 border-b border-slate-800">
          <div className="text-[11px] font-bold uppercase tracking-wider" style={{ color: accent }}>{subtitle}</div>
          <h1 className="text-lg font-bold text-white mt-0.5">{title}</h1>
          <p className="text-slate-400 text-xs mt-2 leading-relaxed">{intro}</p>
        </div>
        <div className="overflow-y-auto p-3 flex-1">
          <div className="text-[11px] text-slate-500 font-medium uppercase tracking-wide mb-2 px-1">Estructuras</div>
          <div className="space-y-1.5">
            {structures.map((s, i) => (
              <div key={s.name}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl border transition-all text-sm flex items-center gap-2.5 ${open === i ? "bg-slate-700/60 border-slate-500 text-white" : "bg-slate-800/40 border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white"}`}
                >
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                  <span className="flex-1">{s.name}</span>
                  <span className="text-slate-500 text-xs">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <p className="text-slate-400 text-xs leading-relaxed px-3 py-2.5">{s.desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 border-t border-slate-800 text-[10px] text-slate-600">
          Modelo 3D profesional · Sketchfab · Licencia CC
        </div>
      </div>
    </div>
  );
}
