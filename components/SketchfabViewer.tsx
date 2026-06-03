"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export interface Structure {
  name: string;
  emoji?: string;
  simple: string;
  full: string;
  color: string;
  group?: string;
}

interface Props {
  uid: string;
  title: string;
  subtitle: string;
  accent: string;
  intro: string;
  structures: Structure[];
  slug?: string;
  moduleName?: string;
}

const ACTION_DEFAULTS = ["ficha", "proyector", "compartir", "glosario", "evaluacion", "quiz"];

export default function SketchfabViewer({ uid, title, subtitle, accent, intro, structures, slug, moduleName }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const [shared, setShared] = useState(false);
  const [presenting, setPresenting] = useState(false);
  const [level, setLevel] = useState<"primaria" | "secundaria">("primaria");
  const [toolsOpen, setToolsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [actionOrder, setActionOrder] = useState<string[]>(ACTION_DEFAULTS);
  const [selecting, setSelecting] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bioaula-actions");
      if (saved) {
        const parsed: string[] = JSON.parse(saved);
        if (ACTION_DEFAULTS.every(a => parsed.includes(a))) setActionOrder(parsed);
      }
    } catch {}
  }, []);

  const saveOrder = (order: string[]) => {
    setActionOrder(order);
    try { localStorage.setItem("bioaula-actions", JSON.stringify(order)); } catch {}
  };

  const handleEditTap = (id: string) => {
    if (!editMode) return;
    if (!selecting) {
      setSelecting(id);
    } else if (selecting === id) {
      setSelecting(null);
    } else {
      const arr = [...actionOrder];
      const a = arr.indexOf(selecting);
      const b = arr.indexOf(id);
      if (a >= 0 && b >= 0) { [arr[a], arr[b]] = [arr[b], arr[a]]; saveOrder(arr); }
      setSelecting(null);
    }
  };

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
    if (!document.fullscreenElement) el.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const embed = `https://sketchfab.com/models/${uid}/embed?ui_theme=dark&autospin=0.2&ui_infos=0&ui_controls=1&ui_stop=0&annotations_visible=1&ui_annotations=1`;
  const glosarioHref = moduleName ? `/glosario?modulo=${encodeURIComponent(moduleName)}` : "/glosario";
  const evalHref = moduleName ? `/evaluaciones?modulo=${encodeURIComponent(moduleName)}` : "/evaluaciones";

  // ── Group structures ──
  const groupOrder: string[] = [];
  const groupMap = new Map<string, { s: Structure; idx: number }[]>();
  structures.forEach((s, idx) => {
    const key = s.group ?? "";
    if (!groupMap.has(key)) { groupMap.set(key, []); groupOrder.push(key); }
    groupMap.get(key)!.push({ s, idx });
  });

  // ── Action renderer ──
  const renderAction = (id: string) => {
    if (id === "ficha" && !slug) return null;

    const isSelected = selecting === id;
    const dimmed = selecting !== null && !isSelected;
    const wrapCls = [
      "flex-1 min-w-[calc(33%-4px)] rounded-lg transition-all",
      editMode ? "cursor-pointer select-none" : "",
      isSelected ? "ring-2 ring-blue-400 scale-105 shadow-blue-400/30 shadow-lg" : "",
      dimmed ? "opacity-40" : "",
    ].join(" ");

    const s = "flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-xs font-semibold transition-all";
    const c0 = `${s} bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white`;
    const cAmber = `${s} bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 hover:text-amber-200`;
    const cYellow = `${s} bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-300 hover:text-yellow-200`;

    if (editMode) {
      const label =
        id === "ficha" ? "🖨️ Ficha" :
        id === "proyector" ? "📽️ Proyector" :
        id === "compartir" ? "📤 Compartir" :
        id === "glosario" ? "📖 Glosario" :
        id === "evaluacion" ? "📝 Evaluación" : "🏆 Quiz";
      const cls = id === "evaluacion" ? cAmber : id === "quiz" ? cYellow : c0;
      return (
        <div key={id} className={wrapCls} onClick={() => handleEditTap(id)}>
          <div className={cls}>{label}</div>
        </div>
      );
    }

    const content =
      id === "ficha"      ? <Link href={`/ficha/${slug!}`} className={c0}>🖨️ Ficha</Link> :
      id === "proyector"  ? <button onClick={() => setPresenting(true)} className={c0}>📽️ Proyector</button> :
      id === "compartir"  ? <button onClick={handleShare} className={c0}>{shared ? "✓ Copiado" : "📤 Compartir"}</button> :
      id === "glosario"   ? <Link href={glosarioHref} className={c0}>📖 Glosario</Link> :
      id === "evaluacion" ? <Link href={evalHref} className={cAmber}>📝 Evaluación</Link> :
      id === "quiz"       ? <Link href="/quiz" className={cYellow}>🏆 Quiz</Link> : null;

    return <div key={id} className="flex-1 min-w-[calc(33%-4px)]">{content}</div>;
  };

  const actions = actionOrder.flatMap(id => {
    const el = renderAction(id);
    return el ? [el] : [];
  });

  return (
    <div className="viewer-layout">
      {/* Modelo 3D */}
      <div ref={containerRef} className={presenting ? "fixed inset-0 z-50 bg-black" : "viewer-3d"}>
        <iframe src={embed} title={title} allow="autoplay; fullscreen; xr-spatial-tracking" allowFullScreen
          style={{ width: "100%", height: "100%", border: "none", display: "block" }} />
        {presenting ? (
          <>
            <button onClick={() => setPresenting(false)}
              className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black/60 hover:bg-black/80 text-white text-sm font-semibold transition-all">
              ✕ Salir
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/50 text-xs pointer-events-none select-none">{title}</div>
          </>
        ) : (
          <>
            <button onClick={toggleFullscreen} title="Pantalla completa"
              className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-black/50 hover:bg-black/70 text-white transition-all">
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
        {/* Encabezado */}
        <div className="px-4 pt-4 pb-3 border-b border-slate-800 flex-shrink-0">
          <div className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: accent }}>{subtitle}</div>
          <h1 className="text-lg font-bold text-white leading-tight">{title}</h1>
          <p className="text-slate-400 text-xs mt-1 leading-snug">{intro}</p>
        </div>

        {/* Herramientas — colapsado por defecto */}
        <div className="px-3 py-2 border-b border-slate-800 flex-shrink-0">
          <button
            onClick={() => { setToolsOpen(v => !v); if (toolsOpen) { setEditMode(false); setSelecting(null); } }}
            className="w-full flex items-center justify-between px-1 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all"
          >
            <span>🛠️ Herramientas</span>
            <span className="text-slate-600">{toolsOpen ? "▲" : "▼"}</span>
          </button>

          {toolsOpen && (
            <div className="mt-2 space-y-1.5">
              <div className="flex flex-wrap gap-1.5">{actions}</div>
              <div className="flex items-center justify-end pt-0.5">
                {editMode && (
                  <span className="text-xs text-slate-500 mr-auto">
                    {selecting ? "Tocá otro para intercambiar" : "Tocá un ícono para moverlo"}
                  </span>
                )}
                <button
                  onClick={() => { setEditMode(v => !v); setSelecting(null); }}
                  className={`text-xs px-2 py-1 rounded-md transition-all ${editMode ? "bg-blue-500/20 text-blue-300 font-semibold" : "text-slate-600 hover:text-slate-400"}`}
                >
                  {editMode ? "✓ Listo" : "✏️ Organizar"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Toggle Primaria / Secundaria */}
        <div className="px-3 pt-2.5 pb-1 flex-shrink-0">
          <div className="flex rounded-lg overflow-hidden border border-slate-700 text-xs font-semibold">
            <button
              onClick={() => setLevel("primaria")}
              className={`flex-1 py-1.5 transition-all ${level === "primaria" ? "bg-emerald-500 text-black" : "bg-transparent text-slate-400 hover:text-white"}`}
            >
              🌱 Primaria
            </button>
            <button
              onClick={() => setLevel("secundaria")}
              className={`flex-1 py-1.5 transition-all ${level === "secundaria" ? "bg-blue-500 text-white" : "bg-transparent text-slate-400 hover:text-white"}`}
            >
              🔬 Secundaria
            </button>
          </div>
        </div>

        {/* Lista de estructuras con soporte de grupos */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {groupOrder.map(key => {
            const items = groupMap.get(key)!;
            const label = key || null;
            return (
              <div key={key || "__default"}>
                {label && (
                  <div className="flex items-center gap-2 px-1 pt-2 pb-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</span>
                    <div className="flex-1 h-px bg-slate-700" />
                  </div>
                )}
                {items.map(({ s, idx }) => (
                  <div key={idx}>
                    <button
                      onClick={() => setOpen(open === idx ? null : idx)}
                      className="w-full text-left rounded-xl border transition-all flex items-start gap-3 px-3 py-3"
                      style={{
                        minHeight: "54px",
                        background: open === idx ? accent + "18" : "transparent",
                        borderColor: open === idx ? accent + "70" : "#1e293b",
                      }}
                    >
                      <span className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{ background: s.color }} />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {s.emoji && <span className="text-base leading-none">{s.emoji}</span>}
                          <span className="text-sm font-bold text-white">{s.name}</span>
                        </div>
                        <p className="text-slate-400 text-xs mt-0.5 leading-snug">
                          {level === "primaria" ? s.simple : s.full}
                        </p>
                      </div>
                      <span className="text-slate-600 text-xs mt-1.5 flex-shrink-0">{open === idx ? "▲" : "▼"}</span>
                    </button>
                    {open === idx && (
                      <div
                        className="mx-3 mb-1 px-3 py-3 rounded-b-xl border-x border-b text-xs leading-relaxed space-y-2"
                        style={{ borderColor: accent + "50", background: accent + "0a" }}
                      >
                        {level === "secundaria" ? (
                          <>
                            <div><span className="font-semibold text-emerald-400">🌱 Primaria: </span><span className="text-slate-300">{s.simple}</span></div>
                            <div><span className="font-semibold text-blue-400">🔬 Secundaria: </span><span className="text-slate-200">{s.full}</span></div>
                          </>
                        ) : (
                          <div><span className="font-semibold text-blue-400">🔬 Secundaria: </span><span className="text-slate-300">{s.full}</span></div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
