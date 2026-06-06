"use client";
import { useEffect } from "react";

export default function AutoUpdate() {
  useEffect(() => {
    let lastCheck = 0;

    const run = async () => {
      const now = Date.now();
      if (now - lastCheck < 30_000) return;
      lastCheck = now;

      try {
        const res = await fetch(`/version.json?t=${now}`, { cache: "no-store" });
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

    const onVisible = () => {
      if (document.visibilityState === "visible") run();
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, []);

  return null;
}
