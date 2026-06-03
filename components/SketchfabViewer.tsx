"use client";
import { useState, useRef } from "react";
import Link from "next/link";

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
  slug?: string;
}

export default function SketchfabViewer({ uid, title, subtitle, accent, intro, structures, slug }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const [shared, setShared] = useState(false);
  const [presenting, setPresenting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: `BioAula3D — ${title}`, text: `Explorá ${title} en 3D interactivo`, url });
    } else {
      await navigator.clipboard.writeText(url);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const embed = `https://sketchfab.com/models/${uid}/embed?ui_theme=dark&autospin=0.2&ui_infos=0&ui_controls=1&ui_stop=0&annotations_visible=1&ui_annotations=1`;

  return (
    <div className="viewer-layout">
      {/* iframe container: normal o pantalla completa — nunca se desmonta para no recargar el modelo */}
      <div
        ref={containerRef}
        className={presenting ? "fixed inset-0 z-50 bg-black" : "viewer-3d"}
      >
        <iframe
          src={embed}
          title={title}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
        />
        {presenting ? (
          <>
            <button
              onClick={() => setPresenting(false)}
              className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black/60 hover:bg-black/80 text-white text-sm font-semibold transition-all"
            >
              ✕ Salir
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/50 text-xs pointer-events-none select-none">
              {title}
            </div>
          </>
        ) : (
          <>
            <button
              onClick={toggleFullscreen}
              className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-black/50 hover:bg-black/70 text-white transition-all"
              title="Pantalla completa"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-slate-500 text-[11px] pointer-events-none whitespace-nowrap select-none">
              Tocá y arrastrá · Pellizco para zoom · Puntos ⓘ = info
            </div>
          </>
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

        {/* Botones de acción — siempre visibles */}
        <div className="px-3 py-2 border-b border-slate-800 flex-shrink-0 flex items-center gap-2">
          {slug && (
            <Link
              href={`/ficha/${slug}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all"
            >
              🖨️ Ficha
            </Link>
          )}
          <button
            onClick={() => setPresenting(true)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all"
          >
            📽️ Presentar
          </button>
          <button
            onClick={handleShare}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all"
          >
            {shared ? "✓ Copiado" : "📤 Compartir"}
          </button>
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
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                  style={{ background: s.color }}
                />
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

      </div>
    </div>
  );
}
