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

export interface ModelTab {
  id: string;
  name: string;
  emoji?: string;
  uid?: string;
  imageUrl?: string;
  structures: Structure[];
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
  models?: ModelTab[];
}

const ACTION_DEFAULTS = ["ficha", "proyector", "compartir", "glosario", "evaluacion", "quiz", "notas"];

export default function SketchfabViewer({ uid, title, subtitle, accent, intro, structures, slug, moduleName, models }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const [shared, setShared] = useState(false);
  const [presenting, setPresenting] = useState(false);
  const [level, setLevel] = useState<"primaria" | "secundaria">("primaria");
  const [toolsOpen, setToolsOpen] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [actionOrder, setActionOrder] = useState<string[]>(ACTION_DEFAULTS);
  const [selecting, setSelecting] = useState<string | null>(null);
  const [activeModelIdx, setActiveModelIdx] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [notasOpen, setNotasOpen] = useState(false);
  const loadTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [notasDate, setNotasDate] = useState(() =>
    new Date().toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" })
  );
  const [notasText, setNotasText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const activeModel = models?.[activeModelIdx];
  const activeUid = activeModel?.uid ?? uid;
  const activeImageUrl = activeModel?.imageUrl;
  const activeStructures = models ? models[activeModelIdx].structures : structures;

  useEffect(() => {
    setLoaded(false);
    setLoadError(false);
    if (loadTimerRef.current) clearTimeout(loadTimerRef.current);
    if (!activeImageUrl) {
      loadTimerRef.current = setTimeout(() => setLoadError(true), 20000);
    }
    return () => { if (loadTimerRef.current) clearTimeout(loadTimerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUid, activeImageUrl, resetKey]);

  useEffect(() => {
    if (!slug) return;
    try {
      const raw = localStorage.getItem("bioaula-visited");
      const set: string[] = raw ? JSON.parse(raw) : [];
      if (!set.includes(slug)) {
        localStorage.setItem("bioaula-visited", JSON.stringify([...set, slug]));
      }
    } catch {}
  }, [slug]);

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

  const handleExportNotas = async () => {
    const { default: jsPDF } = await import("jspdf");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const W = 210; const mx = 15; const cW = W - mx * 2; let y = 15;
    pdf.setFillColor(17, 18, 20);
    pdf.rect(0, 0, W, 22, "F");
    pdf.setFontSize(13); pdf.setFont("helvetica", "bold"); pdf.setTextColor(232, 234, 240);
    pdf.text(`Notas · ${title}`, mx, 11);
    pdf.setFontSize(8); pdf.setFont("helvetica", "normal"); pdf.setTextColor(155, 163, 178);
    pdf.text(`BioAula3D · ${notasDate}`, mx, 18);
    y = 30;
    pdf.setFontSize(10); pdf.setFont("helvetica", "normal"); pdf.setTextColor(30, 30, 30);
    const lines = pdf.splitTextToSize(notasText || "(Sin contenido)", cW);
    pdf.text(lines, mx, y);
    y += lines.length * 5 + 6;
    pdf.setDrawColor(200, 200, 200); pdf.line(mx, y, mx + cW, y);
    pdf.save(`BioAula3D-Notas-${slug ?? title}-${notasDate.replace(/\//g, "-")}.pdf`);
  };

  const handleShareNotas = async () => {
    const text = `📝 ${title} — ${notasDate}\n\n${notasText}`;
    if (navigator.share) {
      await navigator.share({ title: `Notas · ${title}`, text });
    } else {
      await navigator.clipboard.writeText(text);
    }
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) el.requestFullscreen?.();
    else document.exitFullscreen?.();
  };

  const embed = `https://sketchfab.com/models/${activeUid}/embed?ui_theme=dark&autospin=0&ui_infos=0&ui_controls=1&ui_stop=0&annotations_visible=1&ui_annotations=1&dnt=1`;
  const glosarioHref = moduleName ? `/glosario?modulo=${encodeURIComponent(moduleName)}` : "/glosario";
  const evalHref = moduleName ? `/evaluaciones?modulo=${encodeURIComponent(moduleName)}` : "/evaluaciones";

  // ── Group structures ──
  const groupOrder: string[] = [];
  const groupMap = new Map<string, { s: Structure; idx: number }[]>();
  activeStructures.forEach((s, idx) => {
    const key = s.group ?? "";
    if (!groupMap.has(key)) { groupMap.set(key, []); groupOrder.push(key); }
    groupMap.get(key)!.push({ s, idx });
  });

  // ── Botón de acción ──
  // Clases base sin colores neón
  const btnBase = "flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-xs font-semibold transition-all";
  const btnDefault  = `${btnBase} bg-[#23272E] hover:bg-[#2A2F38] text-[#9BA3B2] hover:text-[#E8EAF0] border border-[#2A2F38] hover:border-[#373E4A]`;
  const btnAccent   = `${btnBase} bg-[#4A7FA5]/15 hover:bg-[#4A7FA5]/25 text-[#7AABC8] hover:text-[#9CC4DC] border border-[#4A7FA5]/20`;
  const btnWarm     = `${btnBase} bg-[#8A7A5C]/15 hover:bg-[#8A7A5C]/25 text-[#B09A74] hover:text-[#C8B08C] border border-[#8A7A5C]/20`;

  const renderAction = (id: string) => {
    if (id === "ficha" && !slug) return null;
    const isSelected = selecting === id;
    const dimmed = selecting !== null && !isSelected;
    const wrapCls = [
      "flex-1 min-w-[calc(33%-4px)] rounded-lg transition-all",
      editMode ? "cursor-pointer select-none" : "",
      isSelected ? "ring-2 ring-[#4A7FA5] scale-105" : "",
      dimmed ? "opacity-40" : "",
    ].join(" ");

    if (editMode) {
      const label =
        id === "ficha"       ? "🖨️ Ficha"       :
        id === "proyector"   ? "📽️ Proyector"   :
        id === "compartir"   ? "📤 Compartir"   :
        id === "glosario"    ? "📖 Glosario"    :
        id === "evaluacion"  ? "📝 Evaluación"  :
        id === "quiz"        ? "🏆 Quiz"         : "📝 Notas";
      const cls = id === "evaluacion" ? btnAccent : id === "quiz" ? btnWarm : btnDefault;
      return (
        <div key={id} className={wrapCls} onClick={() => handleEditTap(id)}>
          <div className={cls}>{label}</div>
        </div>
      );
    }

    const content =
      id === "ficha"      ? <Link href={`/ficha/${slug!}`} className={btnDefault}>🖨️ Ficha</Link> :
      id === "proyector"  ? <button onClick={() => setPresenting(true)} className={btnDefault}>📽️ Proyector</button> :
      id === "compartir"  ? <button onClick={handleShare} className={btnDefault}>{shared ? "✓ Copiado" : "📤 Compartir"}</button> :
      id === "glosario"   ? <Link href={glosarioHref} className={btnDefault}>📖 Glosario</Link> :
      id === "evaluacion" ? <Link href={evalHref} className={btnAccent}>📝 Evaluación</Link> :
      id === "quiz"       ? <Link href="/quiz" className={btnWarm}>🏆 Quiz</Link> :
      id === "notas"      ? <button onClick={() => setNotasOpen(true)} className={btnDefault}>📝 Notas</button> : null;

    return <div key={id} className="flex-1 min-w-[calc(33%-4px)]">{content}</div>;
  };

  const actions = actionOrder.flatMap(id => {
    const el = renderAction(id);
    return el ? [el] : [];
  });

  return (
    <div className="viewer-layout">
      {/* ── Modelo 3D ── */}
      <div ref={containerRef} className={presenting ? "fixed inset-0 z-50 bg-black" : "viewer-3d"}>
        {activeImageUrl ? (
          <img
            src={activeImageUrl}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "contain", background: "var(--bg-0)", display: "block" }}
          />
        ) : (
          <iframe
            key={`${activeUid}-${resetKey}`}
            src={embed}
            title={title}
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            onLoad={() => { setLoaded(true); if (loadTimerRef.current) clearTimeout(loadTimerRef.current); }}
            style={{ width: "100%", height: "100%", border: "none", display: "block", opacity: loaded ? 1 : 0, transition: "opacity 0.4s ease" }}
          />
        )}

        {/* Loading / error */}
        {!activeImageUrl && !loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111214] z-20 gap-3">
            {loadError ? (
              <>
                <span className="text-3xl">🌐</span>
                <span className="text-[#9BA3B2] text-sm font-semibold">No se pudo cargar el modelo 3D</span>
                <span className="text-[#5C6472] text-xs text-center px-6">Revisá tu conexión a internet</span>
                <button
                  onClick={() => setResetKey(k => k + 1)}
                  className="mt-2 px-4 py-2 rounded-lg text-xs font-semibold text-white transition-colors"
                  style={{ background: accent }}
                >
                  Reintentar
                </button>
              </>
            ) : (
              <div className="w-full h-full relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: "var(--bg-0)" }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full border-2 border-[#2A2F38] animate-spin"
                    style={{ borderTopColor: accent }}
                  />
                  <span className="text-[#5C6472] text-xs font-medium">Cargando modelo 3D…</span>
                  <span className="text-[#373E4A] text-[10px]">Puede tardar unos segundos</span>
                </div>
              </div>
            )}
          </div>
        )}

        {presenting ? (
          <>
            <button
              onClick={() => setPresenting(false)}
              className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-black/60 hover:bg-black/80 text-white text-sm font-semibold transition-all"
            >
              ✕ Salir
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/40 text-xs pointer-events-none select-none">{title}</div>
          </>
        ) : !activeImageUrl ? (
          <>
            <button onClick={() => setResetKey(k => k + 1)} title="Reiniciar vista"
              className="absolute top-2 right-11 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-black/50 hover:bg-black/70 text-white text-base transition-all select-none">
              ⟲
            </button>
            <button onClick={toggleFullscreen} title="Pantalla completa"
              className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center rounded-lg bg-black/50 hover:bg-black/70 text-white transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#373E4A] text-[11px] pointer-events-none whitespace-nowrap select-none">
              Tocá y arrastrá · Pellizco para zoom · ⟲ reinicia vista
            </div>
          </>
        ) : null}
      </div>

      {/* ── Panel lateral / inferior ── */}
      <div className="viewer-panel">

        {/* Encabezado */}
        <div className="px-4 pt-4 pb-3 border-b border-[#2A2F38] flex-shrink-0">
          <div
            className="text-[10px] font-semibold tracking-[0.14em] uppercase mb-1"
            style={{ color: accent }}
          >
            {subtitle}
          </div>
          <h1 className="text-[17px] font-bold text-[#E8EAF0] leading-tight">{title}</h1>
          <p className="text-[#5C6472] text-xs mt-1.5 leading-relaxed">{intro}</p>
        </div>

        {/* Selector de modelos */}
        {models && models.length > 1 && (
          <div className="px-3 py-2 border-b border-[#2A2F38] flex-shrink-0">
            <div className="flex gap-1.5 flex-wrap">
              {models.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => { setActiveModelIdx(i); setOpen(null); }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                    i === activeModelIdx
                      ? "text-white border-transparent"
                      : "bg-transparent text-[#5C6472] border-[#2A2F38] hover:text-[#9BA3B2] hover:border-[#373E4A]"
                  }`}
                  style={i === activeModelIdx ? { background: accent, borderColor: accent } : {}}
                >
                  {m.emoji && <span>{m.emoji}</span>}
                  <span>{m.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Herramientas */}
        <div className="px-3 py-2 border-b border-[#2A2F38] flex-shrink-0">
          <button
            onClick={() => { setToolsOpen(v => !v); if (toolsOpen) { setEditMode(false); setSelecting(null); } }}
            className="w-full flex items-center justify-between px-1 py-1 rounded-lg text-xs font-semibold text-[#5C6472] hover:text-[#9BA3B2] transition-all"
          >
            <span>🛠️ Herramientas</span>
            <span className="text-[#373E4A]">{toolsOpen ? "▲" : "▼"}</span>
          </button>
          {toolsOpen && (
            <div className="mt-2 space-y-1.5">
              <div className="flex flex-wrap gap-1.5">{actions}</div>
              <div className="flex items-center justify-end pt-0.5">
                {editMode && (
                  <span className="text-xs text-[#5C6472] mr-auto">
                    {selecting ? "Tocá otro para intercambiar" : "Tocá un ícono para moverlo"}
                  </span>
                )}
                <button
                  onClick={() => { setEditMode(v => !v); setSelecting(null); }}
                  className={`text-xs px-2 py-1 rounded-md transition-all ${
                    editMode
                      ? "bg-[#4A7FA5]/15 text-[#7AABC8] font-semibold border border-[#4A7FA5]/20"
                      : "text-[#373E4A] hover:text-[#5C6472]"
                  }`}
                >
                  {editMode ? "✓ Listo" : "✏️ Organizar"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Toggle Primaria / Secundaria */}
        <div className="px-3 pt-2.5 pb-1 flex-shrink-0">
          <div className="flex rounded-lg overflow-hidden border border-[#2A2F38] text-xs font-semibold">
            <button
              onClick={() => setLevel("primaria")}
              className={`flex-1 py-1.5 transition-all ${
                level === "primaria"
                  ? "text-white"
                  : "bg-transparent text-[#5C6472] hover:text-[#9BA3B2]"
              }`}
              style={level === "primaria" ? { background: "#5B8A6F" } : {}}
            >
              🌱 Primaria
            </button>
            <button
              onClick={() => setLevel("secundaria")}
              className={`flex-1 py-1.5 transition-all ${
                level === "secundaria"
                  ? "text-white"
                  : "bg-transparent text-[#5C6472] hover:text-[#9BA3B2]"
              }`}
              style={level === "secundaria" ? { background: "#4A7FA5" } : {}}
            >
              🔬 Secundaria
            </button>
          </div>
        </div>

        {/* Lista de estructuras */}
        <div className="p-3 space-y-1 pb-6">
          {groupOrder.map(key => {
            const items = groupMap.get(key)!;
            const label = key || null;
            return (
              <div key={key || "__default"}>
                {label && (
                  <div className="flex items-center gap-2 px-1 pt-2 pb-1">
                    <span className="text-[10px] font-bold text-[#5C6472] uppercase tracking-wider">{label}</span>
                    <div className="flex-1 h-px bg-[#2A2F38]" />
                  </div>
                )}
                {items.map(({ s, idx }) => (
                  <div key={idx}>
                    <button
                      onClick={() => setOpen(open === idx ? null : idx)}
                      className="w-full text-left rounded-xl border transition-all flex items-start gap-3 px-3 py-3"
                      style={{
                        minHeight: "54px",
                        background: open === idx ? accent + "14" : "transparent",
                        borderColor: open === idx ? accent + "50" : "#2A2F38",
                      }}
                    >
                      {/* Dot de color apagado */}
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1 opacity-70"
                        style={{ background: s.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {s.emoji && <span className="text-base leading-none">{s.emoji}</span>}
                          <span className="text-sm font-bold text-[#E8EAF0]">{s.name}</span>
                        </div>
                        <p className="text-[#5C6472] text-xs mt-0.5 leading-snug">
                          {level === "primaria" ? s.simple : s.full}
                        </p>
                      </div>
                      <span className="text-[#373E4A] text-xs mt-1.5 flex-shrink-0">{open === idx ? "▲" : "▼"}</span>
                    </button>

                    {open === idx && (
                      <div
                        className="mx-3 mb-1 px-3 py-3 rounded-b-xl border-x border-b text-xs leading-relaxed space-y-2"
                        style={{ borderColor: accent + "35", background: accent + "08" }}
                      >
                        {level === "secundaria" ? (
                          <>
                            <div>
                              <span className="font-semibold text-[#5B8A6F]">🌱 Primaria: </span>
                              <span className="text-[#9BA3B2]">{s.simple}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-[#7AABC8]">🔬 Secundaria: </span>
                              <span className="text-[#E8EAF0]">{s.full}</span>
                            </div>
                          </>
                        ) : (
                          <div>
                            <span className="font-semibold text-[#7AABC8]">🔬 Secundaria: </span>
                            <span className="text-[#9BA3B2]">{s.full}</span>
                          </div>
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

      {/* ── Sheet de notas ── */}
      {notasOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center p-0" onClick={() => setNotasOpen(false)}>
          <div
            className="notas-sheet bg-[#17191C] border-t border-[#2A2F38] rounded-t-2xl w-full max-w-lg p-5 pb-8 space-y-3"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-base font-bold text-[#E8EAF0]">📝 Notas</span>
                <span className="text-[#5C6472] text-xs ml-2">{title}</span>
              </div>
              <button onClick={() => setNotasOpen(false)} className="text-[#5C6472] hover:text-[#9BA3B2] text-lg leading-none transition-colors">✕</button>
            </div>
            <input
              type="text"
              value={notasDate}
              onChange={e => setNotasDate(e.target.value)}
              placeholder="Fecha (ej. 04/06/2026)"
              className="w-full bg-[#1D2025] text-[#E8EAF0] rounded-lg px-3 py-2 text-sm border border-[#2A2F38] focus:outline-none focus:border-[#4A7FA5]/40 transition-colors"
            />
            <textarea
              value={notasText}
              onChange={e => setNotasText(e.target.value)}
              placeholder={`Anotá lo que necesités sobre ${title}…`}
              rows={8}
              className="w-full bg-[#1D2025] text-[#E8EAF0] rounded-lg px-3 py-2 text-sm border border-[#2A2F38] focus:outline-none focus:border-[#4A7FA5]/40 resize-none transition-colors leading-relaxed"
            />
            <div className="flex gap-2 pt-1">
              <button
                onClick={handleShareNotas}
                className="flex-1 py-2.5 bg-[#23272E] hover:bg-[#2A2F38] text-[#9BA3B2] hover:text-[#E8EAF0] border border-[#2A2F38] rounded-xl text-sm font-semibold transition-all"
              >
                📤 Compartir
              </button>
              <button
                onClick={handleExportNotas}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all text-white"
                style={{ background: "#8A7A5C" }}
              >
                📄 Guardar PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
