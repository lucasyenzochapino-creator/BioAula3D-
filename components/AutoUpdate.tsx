"use client";
import { useEffect } from "react";

const CURRENT_VERSION = "5.0";

export default function AutoUpdate() {
  useEffect(() => {
    const run = async () => {
      try {
        // Fetch con timestamp para evitar que el SW sirva la versión cacheada
        const res = await fetch(`/version.json?t=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) return;
        const { version } = await res.json();

        const stored = localStorage.getItem("bioaula-version");

        if (stored !== null && stored !== version) {
          // Versión nueva detectada — limpiar todo y recargar
          localStorage.setItem("bioaula-version", version);

          // Desregistrar todos los service workers
          if ("serviceWorker" in navigator) {
            const regs = await navigator.serviceWorker.getRegistrations();
            await Promise.all(regs.map(r => r.unregister()));
          }

          // Borrar todos los cachés del SW
          if ("caches" in window) {
            const keys = await caches.keys();
            await Promise.all(keys.map(k => caches.delete(k)));
          }

          // Recarga forzada desde el servidor
          window.location.replace(window.location.href);
          return;
        }

        localStorage.setItem("bioaula-version", version);
      } catch {}
    };

    run();
  }, []);

  return null;
}
