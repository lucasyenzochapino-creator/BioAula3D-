"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <nav className="sticky top-0 z-50 bg-bio-dark/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="text-green-400 font-bold text-xl tracking-tight flex items-center gap-2 flex-shrink-0">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 ring-2 ring-green-500/60 flex-shrink-0 overflow-hidden">
            <svg viewBox="0 0 192 192" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="192" height="192" rx="40" fill="#0f172a"/>
              <circle cx="72" cy="40" r="10" fill="#3b82f6"/>
              <circle cx="120" cy="40" r="10" fill="#ef4444"/>
              <line x1="72" y1="40" x2="120" y2="40" stroke="#475569" strokeWidth="3"/>
              <circle cx="80" cy="72" r="10" fill="#22c55e"/>
              <circle cx="112" cy="72" r="10" fill="#f59e0b"/>
              <line x1="80" y1="72" x2="112" y2="72" stroke="#475569" strokeWidth="3"/>
              <circle cx="72" cy="104" r="10" fill="#ef4444"/>
              <circle cx="120" cy="104" r="10" fill="#3b82f6"/>
              <line x1="72" y1="104" x2="120" y2="104" stroke="#475569" strokeWidth="3"/>
              <circle cx="80" cy="136" r="10" fill="#f59e0b"/>
              <circle cx="112" cy="136" r="10" fill="#22c55e"/>
              <line x1="80" y1="136" x2="112" y2="136" stroke="#475569" strokeWidth="3"/>
              <path d="M72 40 Q62 72 80 104 Q62 136 72 152" stroke="#94a3b8" strokeWidth="4" fill="none" strokeLinecap="round"/>
              <path d="M120 40 Q130 72 112 104 Q130 136 120 152" stroke="#64748b" strokeWidth="4" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="hidden sm:inline">BioAula3D</span>
        </Link>
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
