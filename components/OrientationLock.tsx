"use client";
import { useEffect, useState } from "react";

export default function OrientationLock() {
  const [landscape, setLandscape] = useState(false);

  useEffect(() => {
    // Try API lock (works in PWA/fullscreen on Android Chrome)
    (screen.orientation as any)?.lock?.("portrait").catch(() => {});

    const check = () => {
      // Only block landscape on small screens (phones)
      const isSmall = window.innerWidth < 900 || window.innerHeight < 900;
      const isLandscape = window.innerWidth > window.innerHeight;
      setLandscape(isSmall && isLandscape);
    };

    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  if (!landscape) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-5 text-center px-8"
      style={{ background: "#070d1a" }}
    >
      <div className="text-6xl" style={{ transform: "rotate(-90deg)", display: "inline-block" }}>📱</div>
      <p className="text-white text-lg font-bold leading-snug">Rotá el dispositivo<br/>a modo vertical</p>
      <p className="text-slate-400 text-sm">BioAula3D está optimizado<br/>para uso en posición vertical</p>
    </div>
  );
}
