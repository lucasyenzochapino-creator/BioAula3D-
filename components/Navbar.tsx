"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [installed, setInstalled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = path === "/";

  useEffect(() => {
    const handler = (e: Event) => { e.preventDefault(); setInstallPrompt(e); };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => { setInstalled(true); setInstallPrompt(null); });
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  // Cuando el drawer se abre, empuja una entrada en el historial para que
  // el botón "atrás" de Android cierre el drawer en lugar de salir de la app.
  useEffect(() => {
    if (menuOpen) {
      window.history.pushState({ drawer: true }, "");
    }
  }, [menuOpen]);

  useEffect(() => {
    const handlePopState = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [menuOpen]);

  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") { setInstalled(true); setInstallPrompt(null); }
  };

  const navLinks = [
    { href: "/quiz",        label: "Quiz",        accent: true },
    { href: "/evaluaciones",label: "Evaluaciones",accent: false },
    { href: "/tareas",      label: "Tareas",      accent: false },
    { href: "/glosario",    label: "Glosario",    accent: false },
    { href: "/notas",       label: "Notas",       accent: false },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#111214]/80 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <span className="flex items-center justify-center w-8 h-8 rounded-xl flex-shrink-0 transition-colors" style={{ background: "rgba(74,127,165,0.12)", border: "1px solid rgba(74,127,165,0.25)" }}>
              <svg viewBox="0 0 32 32" width="17" height="17" fill="none">
                <path d="M10 5c4 6 8 6 12 0" stroke="#4A7FA5" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 27c4-6 8-6 12 0" stroke="#4A7FA5" strokeWidth="2" strokeLinecap="round"/>
                <line x1="10" y1="16" x2="22" y2="16" stroke="#4A7FA5" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10.5 10.5c3.5 3.5 7.5 3.5 11 0" stroke="#7AADC8" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
                <path d="M10.5 21.5c3.5-3.5 7.5-3.5 11 0" stroke="#7AADC8" strokeWidth="1.5" strokeLinecap="round" opacity=".5"/>
              </svg>
            </span>
            <span
              className="text-[15px] font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display, inherit)", letterSpacing: "-0.025em" }}
            >
              Bio<span style={{ color: "#4A7FA5" }}>Aula</span><span style={{ color: "#7A8A9A" }}>3D</span>
            </span>
          </Link>

          {/* Center — section anchors (home only, desktop) */}
          {isHome && (
            <div className="hidden md:flex items-center gap-0.5 text-[13px]">
              <a href="#celular"      className="px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] transition-all">Célula &amp; ADN</a>
              <a href="#ecologia"     className="px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] transition-all">Ecología</a>
              <a href="#cuerpo"       className="px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] transition-all">Cuerpo Humano</a>
              <a href="#herramientas" className="px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/[0.05] transition-all">Herramientas</a>
            </div>
          )}

          {/* Right */}
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

            {/* Desktop nav links */}
            <div className="hidden sm:flex items-center gap-1.5">
              {navLinks.map(({ href, label, accent }) => (
                <Link
                  key={href}
                  href={href}
                  className={`inline-flex items-center px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all ${
                    accent
                      ? "text-[#4A7FA5] bg-[#4A7FA5]/[0.08] hover:bg-[#4A7FA5]/[0.14] border border-[#4A7FA5]/20 hover:border-[#4A7FA5]/35"
                      : "text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15]"
                  }`}
                >
                  {label}
                </Link>
              ))}

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

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all"
              aria-label="Menú"
            >
              {menuOpen ? (
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <path d="M2 2l12 12M14 2L2 14"/>
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                  <path d="M2 4h12M2 8h12M2 12h12"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="sm:hidden fixed inset-0 z-40" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-14 left-0 right-0 bg-[#111214]/98 backdrop-blur-lg border-b border-white/[0.08] px-4 py-4 space-y-1"
            onClick={e => e.stopPropagation()}
          >
            {isHome && (
              <>
                <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest px-2 pb-1">Secciones</div>
                {[
                  { href: "#celular",      label: "Célula & ADN" },
                  { href: "#ecologia",     label: "Ecología" },
                  { href: "#cuerpo",       label: "Cuerpo Humano" },
                  { href: "#herramientas", label: "Herramientas" },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
                  >
                    {label}
                  </a>
                ))}
                <div className="h-px bg-white/[0.06] my-2" />
              </>
            )}

            <div className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest px-2 pb-1">Herramientas</div>
            {navLinks.map(({ href, label, accent }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] transition-all ${
                  accent
                    ? "text-[#4A7FA5] bg-[#4A7FA5]/[0.08] border border-[#4A7FA5]/[0.15]"
                    : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {label}
              </Link>
            ))}

            {installPrompt && !installed && (
              <>
                <div className="h-px bg-white/[0.06] my-2" />
                <button
                  onClick={() => { handleInstall(); setMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[14px] text-sky-400 bg-sky-500/[0.08] border border-sky-500/[0.15] font-medium transition-all"
                >
                  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                    <path d="M8 2v8M5 7l3 3 3-3M2 12h12"/>
                  </svg>
                  Instalar app
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
