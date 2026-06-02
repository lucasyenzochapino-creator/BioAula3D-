"use client";
import { useState, useRef } from "react";

export interface Structure {
  name: string;
  emoji?: string;
  simple: string;
  full: string;
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
  const [loaded, setLoaded] = useState(false);
  const [offline, setOffline] = useState(typeof navigator !== "undefined" && !navigator.onLine);
  const containerRef = useRef<HTMLDivElement>(null);

  const embed = `https://sketchfab.com/models/${uid}/embed?ui_theme=dark&autospin=0.2&ui_infos=0&ui_controls=1&ui_stop=0&annotations_visible=1&ui_annotations=1`;

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  return (
    <div className="viewer-layout">
      <div className="viewer-3d" ref={containerRef}>
        {offline ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-slate-900">
            <span className="text-5xl">📵</span>
            <p className="text-slate-300 font-semibold text-lg">Sin conexión a internet</p>
            <p className="text-slate-500 text-sm text-center px-8">Conectate a internet para ver los modelos 3D de Sketchfab.</p>
            <button
              onClick={() => setOffline(!navigator.onLine)}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl text-sm text-slate-200 transition-all"
            >
              Reintentar
            </button>
          </div>
        ) : (
          <>
            {!loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black z-10 pointer-events-none">
                <div
                  className="w-14 h-14 rounded-full border-4 border-slate-700 animate-spin"
                  style={{ borderTopColor: accent }}
                />
                <p className="text-slate-400 text-sm">Cargando modelo 3D…</p>
              </div>
            )}
            <iframe
              src={embed}
              title={title}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              onLoad={() => setLoaded(true)}
              style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            />
          </>
        )}

        {/* Fullscreen button */}
        <button
          onClick={toggleFullscreen}
          title="Pantalla completa"
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-lg bg-black/60 hover:bg-black/80 border border-slate-700 flex items-center justify-center transition-all backdrop-blur-sm"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.8">
            <path d="M1 6V1h5M10 1h5v5M15 10v5h-5M6 15H1v-5" />
          </svg>
        </button>

        {loaded && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-500 text-[11px] pointer-events-none whitespace-nowrap select-none">
            Tocá y arrastrá · Pellizco para zoom · Puntos ⓘ = info
          </div>
        )}
      </div>

      <div className="viewer-panel">
        <div className="px-4 pt-4 pb-3 border-b border-slate-800 flex-shrink-0">
          <div className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: accent }}>
            {subtitle}
          </div>
          <h1 className="text-lg font-bold text-white leading-tight">{title}</h1>
          <p className="text-slate-400 text-xs mt-1 leading-snug">{intro}</p>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {structures.map((s, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left rounded-xl border transition-all flex items-start gap-3 px-3 py-3"
                style={{
                  minHeight: "54px",
                  background: open === i ? accent + "18" : "transparent",
                  borderColor: open === i ? accent + "70" : "#1e293b",
                }}
              >
                <span className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{ background: s.color }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {s.emoji && <span className="text-base leading-none">{s.emoji}</span>}
                    <span className="text-sm font-bold text-white">{s.name}</span>
                  </div>
                  <p className="text-slate-400 text-xs mt-0.5 leading-snug">{s.simple}</p>
                </div>
                <span className="text-slate-600 text-xs mt-1.5 flex-shrink-0">{open === i ? "▲" : "▼"}</span>
              </button>
              {open === i && (
                <div
                  className="mx-3 mb-1 px-3 py-3 rounded-b-xl border-x border-b text-xs text-slate-300 leading-relaxed"
                  style={{ borderColor: accent + "50", background: accent + "0a" }}
                >
                  <span className="font-semibold text-white">Secundaria: </span>
                  {s.full}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="px-4 py-2 border-t border-slate-800 flex-shrink-0 text-center">
          <p className="text-slate-600 text-[11px]">Tocá cada estructura para ver info de secundaria</p>
        </div>
      </div>
    </div>
  );
}
