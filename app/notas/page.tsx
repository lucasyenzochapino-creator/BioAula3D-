"use client";
import { useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";

const TEMAS = [
  "General",
  "Célula Animal",
  "Célula Vegetal",
  "Sistema Óseo",
  "Sistema Muscular",
  "Sistema Circulatorio",
  "Sistema Respiratorio",
  "Sistema Digestivo",
  "Sistema Nervioso",
  "Sistema Endócrino",
  "Sistema Inmunológico",
  "Órganos de los Sentidos",
  "Sistema Reproductor Femenino",
  "Sistema Reproductor Masculino",
  "Ecosistemas",
  "Genética",
  "Quiz",
  "Evaluación",
  "Banco de Tareas",
  "Glosario",
  "Otro",
];

interface Nota {
  id: string;
  fecha: string;
  tema: string;
  texto: string;
}

function safeText(s: string) {
  return s
    .replace(/→/g, ">")
    .replace(/←/g, "<")
    .replace(/↔/g, "<>")
    .replace(/[^\x00-\xFF]/g, "");
}

function todayFormatted() {
  const d = new Date();
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
}

export default function NotasPage() {
  const [notas, setNotas] = useState<Nota[]>([]);
  const [fecha, setFecha] = useState(todayFormatted());
  const [tema, setTema] = useState("General");
  const [texto, setTexto] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(true);

  function handleGuardar() {
    if (!texto.trim()) return;
    if (editId) {
      setNotas((prev) =>
        prev.map((n) => (n.id === editId ? { ...n, fecha, tema, texto } : n))
      );
      setEditId(null);
    } else {
      setNotas((prev) => [
        { id: Date.now().toString(), fecha, tema, texto },
        ...prev,
      ]);
    }
    setTexto("");
    setFecha(todayFormatted());
    setTema("General");
    setShowForm(false);
  }

  function handleEditar(nota: Nota) {
    setEditId(nota.id);
    setFecha(nota.fecha);
    setTema(nota.tema);
    setTexto(nota.texto);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleEliminar(id: string) {
    setNotas((prev) => prev.filter((n) => n.id !== id));
    if (editId === id) {
      setEditId(null);
      setTexto("");
    }
  }

  function buildPDF(items: Nota[]): jsPDF {
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const lm = 20, rm = 190, tw = rm - lm;
    let y = 20;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(30, 30, 30);
    doc.text("BioAula3D - Notas Docentes", lm, y);
    y += 8;
    doc.setDrawColor(16, 185, 129);
    doc.setLineWidth(0.5);
    doc.line(lm, y, rm, y);
    y += 8;

    items.forEach((n, idx) => {
      if (y > 260) { doc.addPage(); y = 20; }
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(16, 185, 129);
      doc.text(`Nota ${idx + 1} - ${safeText(n.tema)}`, lm, y);
      y += 5;
      doc.setFont("helvetica", "normal");
      doc.setTextColor(80, 80, 80);
      doc.text(`Fecha: ${n.fecha}`, lm, y);
      y += 6;
      doc.setTextColor(30, 30, 30);
      const lines = doc.splitTextToSize(safeText(n.texto), tw);
      lines.forEach((line: string) => {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.text(line, lm, y);
        y += 5;
      });
      y += 6;
      doc.setDrawColor(200, 200, 200);
      doc.line(lm, y, rm, y);
      y += 8;
    });

    return doc;
  }

  function exportarPDF(nota?: Nota) {
    const items = nota ? [nota] : notas;
    if (!items.length) return;
    buildPDF(items).save(`notas-docentes-${Date.now()}.pdf`);
  }

  async function compartirComoPDF(nota: Nota) {
    const doc = buildPDF([nota]);
    const filename = `nota-${safeText(nota.tema).replace(/\s+/g, "-").toLowerCase()}.pdf`;

    if (typeof navigator !== "undefined" && navigator.share && navigator.canShare) {
      const blob = doc.output("blob");
      const file = new File([blob], filename, { type: "application/pdf" });
      if (navigator.canShare({ files: [file] })) {
        try { await navigator.share({ files: [file], title: "Nota BioAula3D" }); return; } catch {}
      }
    }
    doc.save(filename);
  }

  return (
    <div className="min-h-screen bg-bio-dark text-slate-100 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-bio-dark/90 backdrop-blur border-b border-slate-800 px-4 py-3 flex items-center gap-3">
        <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">← Inicio</Link>
        <span className="text-slate-600">|</span>
        <h1 className="text-base font-bold text-white">Notas Docentes</h1>
        <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">Docentes</span>
      </div>

      <div className="max-w-2xl mx-auto px-4 pt-6 space-y-6">

        {/* Formulario */}
        <div className="bg-bio-card border border-slate-700 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-slate-200">
              {editId ? "Editar nota" : "Nueva nota"}
            </h2>
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="text-xs px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium transition-colors"
              >
                + Nueva nota
              </button>
            )}
          </div>

          {showForm && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Fecha</label>
                  <input
                    type="text"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    placeholder="ej: 04/06/2026"
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Tema</label>
                  <select
                    value={tema}
                    onChange={(e) => setTema(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    {TEMAS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-slate-400 block mb-1">Nota</label>
                <textarea
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                  placeholder="Escribí tu nota aquí..."
                  rows={5}
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white resize-none focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleGuardar}
                  disabled={!texto.trim()}
                  className="flex-1 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors"
                >
                  {editId ? "Guardar cambios" : "Guardar nota"}
                </button>
                {editId && (
                  <button
                    onClick={() => { setEditId(null); setTexto(""); setShowForm(false); }}
                    className="px-4 py-2 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm transition-colors"
                  >
                    Cancelar
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Lista de notas */}
        {notas.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-300">{notas.length} nota{notas.length !== 1 ? "s" : ""} guardada{notas.length !== 1 ? "s" : ""}</h2>
              <button
                onClick={() => exportarPDF()}
                className="text-xs px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium transition-colors"
              >
                Exportar todas a PDF
              </button>
            </div>
            {notas.map((nota) => (
              <div key={nota.id} className="bg-bio-card border border-slate-700 rounded-2xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400">{nota.tema}</span>
                    <span className="text-xs text-slate-500 ml-2">{nota.fecha}</span>
                  </div>
                  <button
                    onClick={() => handleEliminar(nota.id)}
                    className="text-slate-600 hover:text-red-400 transition-colors text-xs"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed mb-3">{nota.texto}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditar(nota)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => exportarPDF(nota)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                  >
                    Descargar PDF
                  </button>
                  <button
                    onClick={() => compartirComoPDF(nota)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 transition-colors"
                  >
                    Compartir PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {notas.length === 0 && !showForm && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No hay notas guardadas todavía.
          </div>
        )}
      </div>
    </div>
  );
}
