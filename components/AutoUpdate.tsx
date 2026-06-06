"use client";
import { useEffect } from "react";

export default function AutoUpdate() {
  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`/version.json?t=${Date.now()}`, { cache: "no-store" });
        if (!res.ok) return;
        const { version } = await res.json();
        const stored = localStorage.getItem("bioaula-version");

        if (stored !== null && stored !== version) {
          localStorage.setItem("bioaula-version", version);

          if ("serviceWorker" in navigator) {
            const regs = await navigator.serviceWorker.getRegistrations();
            await Promise.all(regs.map(r => r.unregister()));
          }

          if ("caches" in window) {
            const keys = await caches.keys();
            await Promise.all(keys.map(k => caches.delete(k)));
          }

          window.location.replace(window.location.href);
          return;
        }

        localStorage.setItem("bioaula-version", version);
      } catch {}
    };

    run();

    // También verificar al volver al foco de la app (desde background)
    const onVisible = () => {
      if (document.visibilityState === "visible") run();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);

  return null;
}
