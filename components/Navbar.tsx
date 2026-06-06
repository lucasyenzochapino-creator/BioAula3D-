"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Leaf } from "lucide-react";

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
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f8faf5]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="group flex min-w-0 flex-shrink-0 items-center gap-3">
          <span className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-emerald-200 bg-white shadow-sm">
            <Box size={19} className="text-emerald-700" strokeWidth={1.9} />
            <Leaf size={12} className="absolute -right-0.5 -top-0.5 rounded-full bg-white text-emerald-600" strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="block text-[17px] font-extrabold tracking-tight text-slate-900" style={{ fontFamily: "var(--font-display, inherit)" }}>
              BioAula3D
            </span>
            <span className="hidden text-[11px] font-medium text-slate-500 sm:block">
              Biología interactiva
            </span>
          </span>
        </Link>

        {isHome && (
          <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 text-[13px] shadow-sm md:flex">
            <a href="#celular" className="rounded-full px-3 py-1.5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800">Célula y ADN</a>
            <a href="#ecologia" className="rounded-full px-3 py-1.5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800">Ecología</a>
            <a href="#cuerpo" className="rounded-full px-3 py-1.5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800">Cuerpo humano</a>
            <a href="#herramientas" className="rounded-full px-3 py-1.5 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800">Herramientas</a>
          </div>
        )}

        <div className="flex items-center gap-2">
          {!isHome && (
            <Link
              href="/"
              className="rounded-full px-3 py-2 text-[13px] font-semibold text-slate-600 transition hover:bg-white hover:text-slate-900"
            >
              Inicio
            </Link>
          )}

          <Link
            href="/quiz"
            className="hidden rounded-full bg-emerald-700 px-4 py-2 text-[13px] font-bold text-white shadow-sm transition hover:bg-emerald-800 sm:inline-flex"
          >
            Quiz
          </Link>

          <Link
            href="/glosario"
            className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-[13px] font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950 sm:inline-flex"
          >
            Glosario
          </Link>

          {installPrompt && !installed && (
            <button
              onClick={handleInstall}
              className="rounded-full bg-blue-700 px-4 py-2 text-[13px] font-bold text-white shadow-sm transition hover:bg-blue-800"
            >
              Instalar
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
