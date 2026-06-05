"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [installed, setInstalled] = useState(false);
  const isHome = path === "/";

  useEffect(() => {
    const handler = (e: Event) => { e.preventDefault(); setInstallPrompt(e); };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => { setInstalled(true); setInstallPrompt(null); });
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") { setInstalled(true); setInstallPrompt(null); }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#070d1a]/96 backdrop-blur border-b border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/25 flex-shrink-0 overflow-hidden transition-colors group-hover:border-blue-400/40">
            <svg viewBox="0 0 32 32" width="18" height="18" fill="none">
              <path d="M8 5c5 7 11 7 16 0" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
              <path d="M8 27c5-7 11-7 16 0" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
              <line x1="8" y1="16" x2="24" y2="16" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 10c4 4 10 4 14 0" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" opacity=".55"/>
              <path d="M9 22c4-4 10-4 14 0" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" opacity=".55"/>
            </svg>
          </span>
          <span className="text-[15px] font-semibold text-slate-100 tracking-tight" style={{ fontFamily: "var(--font-display, inherit)", letterSpacing: "-0.02em" }}>
            Bio<span style={{ color: "#22c55e" }}>Aula</span><span style={{ color: "#14b8a6" }}>3D</span>
          </span>
        </Link>

        {/* Center — home nav shortcuts */}
        {isHome && (
          <div className="hidden md:flex items-center gap-0.5 text-sm">
            <a href="#celular" className="px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all">
              Célula &amp; ADN
            </a>
            <a href="#cuerpo" className="px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all">
              Cuerpo Humano
            </a>
            <a href="#herramientas" className="px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all">
              Herramientas
            </a>
          </div>
        )}

        {/* Right */}
        <div className="flex items-center gap-2">
          {!isHome && (
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M10 12L6 8l4-4"/>
              </svg>
              Inicio
            </Link>
          )}
          {installPrompt && !installed && (
            <button
              onClick={handleInstall}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium rounded-lg transition-colors"
            >
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <path d="M8 2v8M5 7l3 3 3-3M2 12h12"/>
              </svg>
              Instalar
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
