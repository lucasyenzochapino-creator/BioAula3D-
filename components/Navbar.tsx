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
];

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="sticky top-0 z-50 bg-bio-dark/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="text-green-400 font-bold text-xl tracking-tight flex items-center gap-2">
          🧬 BioAula3D
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
