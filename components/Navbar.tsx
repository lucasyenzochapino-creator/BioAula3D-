"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/celula", label: "Célula" },
  { href: "/adn", label: "ADN" },
  { href: "/sistema-nervioso", label: "Neurona" },
  { href: "/corazon", label: "Corazón" },
  { href: "/cerebro", label: "Cerebro" },
  { href: "/pulmones", label: "Pulmones" },
  { href: "/digestivo", label: "Digestivo" },
  { href: "/cuerpo-humano", label: "Cuerpo" },
  { href: "/planta", label: "Planta" },
  { href: "/quiz", label: "Quiz" },
  { href: "/glosario", label: "Glosario" },
  { href: "/tareas", label: "📋 Tareas" },
];

export default function Navbar() {
  const path = usePathname();
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
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
    <nav className="sticky top-0 z-50 bg-bio-dark/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="text-green-400 font-bold text-xl tracking-tight flex items-center gap-2 flex-shrink-0">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 ring-2 ring-green-500/60 flex-shrink-0 overflow-hidden">
            <svg viewBox="0 0 192 192" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="nb-bg" cx="50%" cy="40%" r="60%"><stop offset="0%" stopColor="#1e3a5f"/><stop offset="100%" stopColor="#0a0f1a"/></radialGradient>
                <radialGradient id="nb-b" cx="35%" cy="30%" r="65%"><stop offset="0%" stopColor="#93c5fd"/><stop offset="55%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#1d4ed8"/></radialGradient>
                <radialGradient id="nb-r" cx="35%" cy="30%" r="65%"><stop offset="0%" stopColor="#fca5a5"/><stop offset="55%" stopColor="#ef4444"/><stop offset="100%" stopColor="#b91c1c"/></radialGradient>
                <radialGradient id="nb-g" cx="35%" cy="30%" r="65%"><stop offset="0%" stopColor="#86efac"/><stop offset="55%" stopColor="#22c55e"/><stop offset="100%" stopColor="#15803d"/></radialGradient>
                <radialGradient id="nb-y" cx="35%" cy="30%" r="65%"><stop offset="0%" stopColor="#fde68a"/><stop offset="55%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#b45309"/></radialGradient>
              </defs>
              <rect width="192" height="192" rx="40" fill="url(#nb-bg)"/>
              <line x1="70" y1="32" x2="122" y2="32" stroke="#64748b" strokeWidth="2.5"/>
              <line x1="74" y1="72" x2="118" y2="72" stroke="#64748b" strokeWidth="2.5"/>
              <line x1="70" y1="112" x2="122" y2="112" stroke="#64748b" strokeWidth="2.5"/>
              <line x1="74" y1="150" x2="118" y2="150" stroke="#64748b" strokeWidth="2.5"/>
              <path d="M70 32 C58 52 74 72 70 112 C66 142 70 150 70 150" stroke="#94a3b8" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              <path d="M122 32 C134 52 118 72 122 112 C126 142 122 150 122 150" stroke="#64748b" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              <circle cx="70" cy="32" r="11" fill="url(#nb-b)"/>
              <circle cx="70" cy="32" r="4" fill="white" fillOpacity="0.3" transform="translate(-3,-3)"/>
              <circle cx="122" cy="32" r="11" fill="url(#nb-r)"/>
              <circle cx="122" cy="32" r="4" fill="white" fillOpacity="0.3" transform="translate(-3,-3)"/>
              <circle cx="74" cy="72" r="11" fill="url(#nb-g)"/>
              <circle cx="74" cy="72" r="4" fill="white" fillOpacity="0.3" transform="translate(-3,-3)"/>
              <circle cx="118" cy="72" r="11" fill="url(#nb-y)"/>
              <circle cx="118" cy="72" r="4" fill="white" fillOpacity="0.3" transform="translate(-3,-3)"/>
              <circle cx="70" cy="112" r="11" fill="url(#nb-r)"/>
              <circle cx="70" cy="112" r="4" fill="white" fillOpacity="0.3" transform="translate(-3,-3)"/>
              <circle cx="122" cy="112" r="11" fill="url(#nb-b)"/>
              <circle cx="122" cy="112" r="4" fill="white" fillOpacity="0.3" transform="translate(-3,-3)"/>
              <circle cx="74" cy="150" r="11" fill="url(#nb-y)"/>
              <circle cx="74" cy="150" r="4" fill="white" fillOpacity="0.3" transform="translate(-3,-3)"/>
              <circle cx="118" cy="150" r="11" fill="url(#nb-g)"/>
              <circle cx="118" cy="150" r="4" fill="white" fillOpacity="0.3" transform="translate(-3,-3)"/>
            </svg>
          </span>
          <span className="hidden sm:inline">BioAula3D</span>
        </Link>
        {installPrompt && !installed && (
          <button
            onClick={handleInstall}
            className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 bg-green-500 hover:bg-green-400 text-black text-xs font-bold rounded-lg transition-all shadow-lg shadow-green-500/30 whitespace-nowrap"
          >
            ⬇ Instalar
          </button>
        )}
        <div className="flex items-center gap-1 overflow-x-auto hide-scrollbar">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                path === l.href
                  ? "bg-green-500/20 text-green-400"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
