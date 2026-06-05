"use client";
import { useEffect, useState } from "react";

export default function PWAUpdatePrompt() {
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const prevController = navigator.serviceWorker.controller;
    const onControllerChange = () => {
      if (prevController) setPending(true);
    };
    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);
    return () => navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
  }, []);

  if (!pending) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border border-white/10 text-sm"
      style={{ background: "#0f172a", color: "#e2e8f0" }}
    >
      <span>🔄 Nueva versión disponible</span>
      <button
        onClick={() => window.location.reload()}
        className="px-3 py-1 rounded-lg text-xs font-semibold text-white transition-colors"
        style={{ background: "#16a34a" }}
      >
        Actualizar
      </button>
      <button
        onClick={() => setPending(false)}
        className="px-2 py-1 rounded-lg text-xs text-slate-500 hover:text-slate-300 transition-colors"
      >
        Ahora no
      </button>
    </div>
  );
}
