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
    <nav className="sticky top-0 z-50 bg-[#0b1120]/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          {/* DNA icon */}
          <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-green-500/10 border border-green-500/20 flex-shrink-0 transition-colors group-hover:border-green-400/35">
            <svg viewBox="0 0 32 32" width="17" height="17" fill="none">
              <path d="M10 5c4 6 8 6 12 0" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 27c4-6 8-6 12 0" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"/>
              <line x1="10" y1="16" x2="22" y2="16" stroke="#4ade80" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10.5 10.5c3.5 3.5 7.5 3.5 11 0" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
              <path d="M10.5 21.5c3.5-3.5 7.5-3.5 11 0" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
            </svg>
          </span>
          <span
            className="text-[15px] font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-display, inherit)", letterSpacing: "-0.025em" }}
          >
            Bio<span className="text-green-400">Aula</span><span className="text-sky-400">3D</span>
          </span>
        </Link>

        {/* Center — section anchors (home only) */}
        {isHome && (
          <div className="hidden md:flex items-center gap-0.5 text-[13px]">
            <a href="#celular"      className="px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] transition-all">Célula &amp; ADN</a>
            <a href="#ecologia"     className="px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] transition-all">Ecología</a>
            <a href="#cuerpo"       className="px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] transition-all">Cuerpo Humano</a>
            <a href="#herramientas" className="px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] transition-all">Herramientas</a>
          </div>
        )}

        {/* Right — Quiz + Glosario always visible */}
        <div className="flex items-center gap-2">
          {!isHome && (
            <Link
              href="/"
              className="flex items-center gap-1.5 text-[13px] text-slate-400 hover:text-slate-200 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/[0.05]"
            >
              <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M10 12L6 8l4-4"/>
              </svg>
              Inicio
            </Link>
          )}

          <Link
            href="/quiz"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium text-green-400 bg-green-400/[0.08] hover:bg-green-400/[0.14] border border-green-400/20 hover:border-green-400/35 transition-all"
          >
            Quiz
          </Link>

          <Link
            href="/glosario"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] transition-all"
          >
            Glosario
          </Link>

          {installPrompt && !installed && (
            <button
              onClick={handleInstall}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white text-[12px] font-medium rounded-lg transition-colors"
            >
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
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
