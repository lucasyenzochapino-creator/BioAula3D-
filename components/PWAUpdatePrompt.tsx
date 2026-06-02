"use client";
import { useEffect, useState } from "react";

export default function PWAUpdatePrompt() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    // Only show banner if there was already a controller (= update, not first install)
    const prevController = navigator.serviceWorker.controller;

    const onControllerChange = () => {
      if (prevController) setShow(true);
    };

    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);
    return () => navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 shadow-xl text-sm text-white whitespace-nowrap">
      <span>🔄 Nueva versión disponible</span>
      <button
        onClick={() => window.location.reload()}
        className="px-3 py-1 rounded-lg bg-green-500 hover:bg-green-400 text-white font-semibold text-xs transition-all"
      >
        Actualizar
      </button>
      <button
        onClick={() => setShow(false)}
        className="text-slate-400 hover:text-white transition-all text-lg leading-none"
        aria-label="Cerrar"
      >
        ×
      </button>
    </div>
  );
}
