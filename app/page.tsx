"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// ── Filled icon system ────────────────────────────────────────────────────────
function BioIcon({ name, size = 20 }: { name: string; size?: number }) {
  const s = size;
  const icons: Record<string, JSX.Element> = {
    cell: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="9" ry="7" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="3" ry="2.5" fill="currentColor"/>
        <line x1="3" y1="12" x2="5.5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="18.5" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="5" x2="12" y2="7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="16.5" x2="12" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    plant: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2.5" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="4" ry="3" fill="currentColor" fillOpacity=".5" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="12" cy="12" r="1.8" fill="currentColor"/>
      </svg>
    ),
    dna: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M4 4c5 6 11 6 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 20c5-6 11-6 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 8c3.5 3 8.5 3 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity=".5"/>
        <path d="M6 16c3.5-3 8.5-3 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity=".5"/>
        <circle cx="4" cy="4" r="1.5" fill="currentColor"/>
        <circle cx="4" cy="20" r="1.5" fill="currentColor"/>
        <circle cx="20" cy="4" r="1.5" fill="currentColor"/>
        <circle cx="20" cy="20" r="1.5" fill="currentColor"/>
      </svg>
    ),
    genetics: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="3" fill="currentColor"/>
        <circle cx="6" cy="19" r="2.5" fill="currentColor" fillOpacity=".7"/>
        <circle cx="18" cy="19" r="2.5" fill="currentColor" fillOpacity=".7"/>
        <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12L6.5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 12L17.5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    division: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="7" cy="12" r="4.5" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="12" r="4.5" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="7" cy="12" r="2" fill="currentColor"/>
        <circle cx="17" cy="12" r="2" fill="currentColor"/>
      </svg>
    ),
    microbe: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
        <line x1="12" y1="7" x2="12" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="17" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="17" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="9" x2="7" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="15" y1="9" x2="17" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="15" x2="7" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="15" y1="15" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    tree: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M5 14h14l-7-10z" fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 10h8l-4-6z" fill="currentColor" fillOpacity=".6" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <line x1="12" y1="22" x2="12" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    body: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="5" r="2.5" fill="currentColor"/>
        <path d="M7 22v-2a5 5 0 0 1 10 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="7.5" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9.5 10.5l-2.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14.5 10.5l2.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    bone: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M8.5 5.5a2 2 0 0 0-3 3L13 16a2 2 0 0 0 3-3L8.5 5.5z" fill="currentColor" fillOpacity=".25" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="6" cy="7" r="2.2" fill="currentColor"/>
        <circle cx="18" cy="17" r="2.2" fill="currentColor"/>
      </svg>
    ),
    muscle: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M4 13c0-4 3-8 8-8 2.5 0 4 2 4 4s-1.5 4-1.5 6 2 4 4.5 3" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 13c0 3 2 5 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity=".5"/>
      </svg>
    ),
    heart: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M12 21C12 21 3 15 3 8.5a4.5 4.5 0 0 1 9 0 4.5 4.5 0 0 1 9 0C21 15 12 21 12 21z" fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 21C12 21 5 16.5 4 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity=".5"/>
      </svg>
    ),
    lung: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M12 3v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 8C5.5 9.5 4 12.5 4 16c0 2.5 1.5 4 3.5 4S11 18.5 11 17v-3" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 8c2.5 1.5 4 4.5 4 8 0 2.5-1.5 4-3.5 4S13 18.5 13 17v-3" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    stomach: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M9 4C6 4 4 7 4 11c0 5 3.5 9 8 9s8-4 8-9c0-3-.5-5-2.5-5" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 4h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    kidney: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M7 5C4 5 3 8 3 12s1.5 7 4 7c2 0 3-1.5 3-3 0 1.5 1 3 3 3 2.5 0 4-3 4-7s-1-7-4-7c-2 0-3 1.5-3 3 0-1.5-1-3-3-3H7z" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    neuron: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" fill="currentColor"/>
        <path d="M12 9V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 11L5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 13L5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 15v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 11l4-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M15 13l4 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="4" r="1.2" fill="currentColor" fillOpacity=".5"/>
        <circle cx="12" cy="20" r="1.2" fill="currentColor" fillOpacity=".5"/>
      </svg>
    ),
    brain: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M9.5 3.5c-2.5 0-4.5 2-4.5 4.5 0 1 .4 2 1 2.7C5.4 11.4 5 12.4 5 13.5c0 2 1.5 3.5 3.5 3.5H12" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14.5 3.5c2.5 0 4.5 2 4.5 4.5 0 1-.4 2-1 2.7.6.7 1 1.7 1 2.8 0 2-1.5 3.5-3.5 3.5H12" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    eye: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M1 12S5 5 12 5s11 7 11 7-4 7-11 7S1 12 1 12z" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity=".5" stroke="currentColor" strokeWidth="1.2"/>
        <circle cx="12" cy="12" r="1.2" fill="currentColor"/>
      </svg>
    ),
    flask: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M10 3v6L5 17c-.8 1.2.2 3 2 3h10c1.8 0 2.8-1.8 2-3L14 9V3" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 3h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="17" x2="10" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="13" cy="16" r="1.2" fill="currentColor"/>
      </svg>
    ),
    shield: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M12 3L4 7v5c0 4.5 3.5 8.7 8 10 4.5-1.3 8-5.5 8-10V7L12 3z" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    female: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="5" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="13" x2="12" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="9" y1="18" x2="15" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    male: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="10" cy="14" r="5" fill="currentColor" fillOpacity=".22" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="14.5" y1="9.5" x2="21" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <polyline points="16 3 21 3 21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
    evolve: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <line x1="12" y1="20" x2="12" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 14L6 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 14L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="6" cy="8" r="2" fill="currentColor" fillOpacity=".5"/>
        <circle cx="18" cy="8" r="2" fill="currentColor" fillOpacity=".5"/>
        <circle cx="12" cy="20" r="2" fill="currentColor"/>
        <circle cx="3" cy="5" r="1.5" fill="currentColor" fillOpacity=".3"/>
        <circle cx="9" cy="5" r="1.5" fill="currentColor" fillOpacity=".3"/>
        <circle cx="15" cy="5" r="1.5" fill="currentColor" fillOpacity=".3"/>
        <circle cx="21" cy="5" r="1.5" fill="currentColor" fillOpacity=".3"/>
      </svg>
    ),
    taxonomy: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="4" r="2.5" fill="currentColor"/>
        <line x1="12" y1="6.5" x2="12" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="9" x2="17" y2="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="7" y1="9" x2="7" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="17" y1="9" x2="17" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="7" cy="14" r="2" fill="currentColor" fillOpacity=".6"/>
        <circle cx="17" cy="14" r="2" fill="currentColor" fillOpacity=".6"/>
        <line x1="4" y1="16.5" x2="10" y2="16.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity=".5"/>
        <line x1="14" y1="16.5" x2="20" y2="16.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeOpacity=".5"/>
      </svg>
    ),
    tissue: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7.5" height="7.5" rx="2" fill="currentColor" fillOpacity=".35" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="13" y="3" width="7.5" height="7.5" rx="2" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="13" y="13.5" width="7.5" height="7.5" rx="2" fill="currentColor" fillOpacity=".35" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
    trophy: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M7 4h10c0 5-2 9.5-5 9.5S7 9 7 4z" fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 4H5v3c0 2.5 2 4.5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17 4h2v3c0 2.5-2 4.5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="9" r="2" fill="currentColor"/>
      </svg>
    ),
    book: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="11" x2="12" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    clipboard: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="8" y="2" width="8" height="4" rx="1.5" fill="currentColor" fillOpacity=".4" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="9" y1="12" x2="15" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="16" x2="13" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    exam: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="1.5"/>
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    notes: (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="currentColor" fillOpacity=".18" stroke="currentColor" strokeWidth="1.5"/>
        <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="17" x2="15" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  };
  return icons[name] ?? (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

// ── Decorative hero SVG ───────────────────────────────────────────────────────
function HeroDeco() {
  return (
    <svg viewBox="0 0 340 280" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[340px] select-none pointer-events-none float-slow"
      aria-hidden="true">
      {/* Outer cell membrane */}
      <ellipse cx="170" cy="140" rx="140" ry="110" stroke="#22c55e" strokeWidth="1" strokeOpacity=".18" strokeDasharray="6 4"/>
      <ellipse cx="170" cy="140" rx="110" ry="86" stroke="#14b8a6" strokeWidth="1" strokeOpacity=".14" strokeDasharray="4 6"/>
      {/* Nucleus */}
      <ellipse cx="170" cy="140" rx="52" ry="42" fill="#0e4d30" fillOpacity=".4" stroke="#22c55e" strokeWidth="1.5" strokeOpacity=".5"/>
      <ellipse cx="170" cy="140" rx="38" ry="30" fill="#22c55e" fillOpacity=".08"/>
      {/* DNA double helix inside */}
      <path d="M148 128 Q159 134 170 128 Q181 122 192 128 Q181 134 170 140 Q159 146 148 140 Q159 134 170 128Z" fill="#4ade80" fillOpacity=".15"/>
      <path d="M148 140 Q159 146 170 140 Q181 134 192 140 Q181 146 170 152 Q159 158 148 152 Q159 146 170 140Z" fill="#4ade80" fillOpacity=".1"/>
      {/* Mitochondria */}
      <ellipse cx="82" cy="98" rx="24" ry="12" transform="rotate(-30 82 98)" fill="#0e7490" fillOpacity=".3" stroke="#14b8a6" strokeWidth="1" strokeOpacity=".4"/>
      <path d="M70 94 Q82 90 94 94" stroke="#14b8a6" strokeWidth="1" strokeOpacity=".35" strokeLinecap="round"/>
      <path d="M70 98 Q82 94 94 98" stroke="#14b8a6" strokeWidth="1" strokeOpacity=".25" strokeLinecap="round"/>
      {/* Ribosome dots */}
      <circle cx="228" cy="108" r="4" fill="#3b82f6" fillOpacity=".4"/>
      <circle cx="244" cy="120" r="3" fill="#3b82f6" fillOpacity=".3"/>
      <circle cx="236" cy="132" r="3.5" fill="#3b82f6" fillOpacity=".35"/>
      <circle cx="108" cy="178" r="4" fill="#3b82f6" fillOpacity=".3"/>
      <circle cx="122" cy="188" r="3" fill="#3b82f6" fillOpacity=".25"/>
      {/* Vacuole */}
      <circle cx="218" cy="168" r="20" fill="#0e4d30" fillOpacity=".25" stroke="#22c55e" strokeWidth="1" strokeOpacity=".25"/>
      {/* Glow center */}
      <ellipse cx="170" cy="140" rx="30" ry="24" fill="#22c55e" fillOpacity=".05"/>
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────
type Mod = {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  color: string;        // CSS hex accent
  colorClass: string;   // tailwind text-*
  bgClass: string;      // tailwind bg-*/10 etc
  parts: number;
  level: "ambos" | "primaria" | "secundaria";
  featured?: boolean;
};

const cellular: Mod[] = [
  {
    slug: "celula", title: "Célula Animal", icon: "cell",
    color: "#3b82f6", colorClass: "text-blue-400", bgClass: "bg-blue-500/10",
    parts: 12, level: "ambos", featured: true,
    desc: "Núcleo, mitocondrias, retículo endoplasmático y organelas en 3D.",
  },
  {
    slug: "planta", title: "Célula Vegetal", icon: "plant",
    color: "#22c55e", colorClass: "text-green-400", bgClass: "bg-green-500/10",
    parts: 11, level: "ambos",
    desc: "Pared celular, cloroplastos y vacuola central.",
  },
  {
    slug: "adn", title: "ADN y Genética", icon: "dna",
    color: "#14b8a6", colorClass: "text-teal-400", bgClass: "bg-teal-500/10",
    parts: 8, level: "secundaria",
    desc: "Doble hélice, codones y replicación en 3D.",
  },
  {
    slug: "herencia", title: "Herencia Genética", icon: "genetics",
    color: "#8b5cf6", colorClass: "text-violet-400", bgClass: "bg-violet-500/10",
    parts: 8, level: "secundaria",
    desc: "Leyes de Mendel, cuadro de Punnett y mutaciones.",
  },
  {
    slug: "mitosis", title: "Mitosis y Meiosis", icon: "division",
    color: "#f59e0b", colorClass: "text-amber-400", bgClass: "bg-amber-500/10",
    parts: 8, level: "secundaria",
    desc: "Fases de la división celular en 3D.",
  },
];

const ecology: Mod[] = [
  {
    slug: "microbiologia", title: "Microbiología", icon: "microbe",
    color: "#10b981", colorClass: "text-emerald-400", bgClass: "bg-emerald-500/10",
    parts: 8, level: "secundaria", featured: true,
    desc: "Pared celular bacteriana, nucleoide, flagelo y resistencia antibiótica.",
  },
  {
    slug: "ecosistemas", title: "Ecosistemas", icon: "tree",
    color: "#22c55e", colorClass: "text-green-400", bgClass: "bg-green-500/10",
    parts: 8, level: "ambos",
    desc: "Cuatro biomas en 3D: selva, arrecife, desierto y Ártico.",
  },
  {
    slug: "evolucion", title: "Evolución", icon: "evolve",
    color: "#f59e0b", colorClass: "text-amber-400", bgClass: "bg-amber-500/10",
    parts: 8, level: "secundaria",
    desc: "Caminata de la evolución humana y selección natural.",
  },
  {
    slug: "clasificacion", title: "Clasificación de Seres Vivos", icon: "taxonomy",
    color: "#14b8a6", colorClass: "text-teal-400", bgClass: "bg-teal-500/10",
    parts: 8, level: "ambos",
    desc: "Los 5 reinos, taxonomía linneana y árbol filogenético.",
  },
  {
    slug: "tejidos", title: "Tejidos", icon: "tissue",
    color: "#a78bfa", colorClass: "text-violet-300", bgClass: "bg-violet-500/10",
    parts: 8, level: "secundaria",
    desc: "Tejido epitelial, conectivo, muscular y nervioso.",
  },
];

const body: Mod[] = [
  {
    slug: "cuerpo-humano", title: "Cuerpo Humano", icon: "body",
    color: "#fb7185", colorClass: "text-rose-400", bgClass: "bg-rose-500/10",
    parts: 15, level: "ambos", featured: true,
    desc: "Vista completa del cuerpo con todos los sistemas en 3D interactivo.",
  },
  {
    slug: "oseo", title: "Sistema Óseo", icon: "bone",
    color: "#94a3b8", colorClass: "text-slate-400", bgClass: "bg-slate-400/10",
    parts: 10, level: "ambos",
    desc: "206 huesos: cráneo, columna vertebral y articulaciones.",
  },
  {
    slug: "muscular", title: "Sistema Muscular", icon: "muscle",
    color: "#f97316", colorClass: "text-orange-400", bgClass: "bg-orange-500/10",
    parts: 10, level: "secundaria",
    desc: "Más de 600 músculos. Sarcómero, actina y miosina.",
  },
  {
    slug: "corazon", title: "Corazón", icon: "heart",
    color: "#f43f5e", colorClass: "text-rose-500", bgClass: "bg-rose-500/10",
    parts: 9, level: "ambos",
    desc: "Ventrículos, aurículas, válvulas y arterias coronarias.",
  },
  {
    slug: "pulmones", title: "Sistema Respiratorio", icon: "lung",
    color: "#38bdf8", colorClass: "text-sky-400", bgClass: "bg-sky-500/10",
    parts: 8, level: "ambos",
    desc: "Pulmones, bronquios, alvéolos y diafragma.",
  },
  {
    slug: "digestivo", title: "Sistema Digestivo", icon: "stomach",
    color: "#f59e0b", colorClass: "text-amber-400", bgClass: "bg-amber-500/10",
    parts: 8, level: "ambos",
    desc: "Boca, estómago, intestinos e hígado.",
  },
  {
    slug: "excretor", title: "Sistema Excretor", icon: "kidney",
    color: "#facc15", colorClass: "text-yellow-400", bgClass: "bg-yellow-500/10",
    parts: 8, level: "secundaria",
    desc: "Riñones, nefrona, vejiga y uretra.",
  },
  {
    slug: "sistema-nervioso", title: "Sistema Nervioso", icon: "neuron",
    color: "#a78bfa", colorClass: "text-violet-400", bgClass: "bg-violet-500/10",
    parts: 9, level: "secundaria",
    desc: "Neurona 3D con dendritas, axón, mielina y sinapsis.",
  },
  {
    slug: "cerebro", title: "Cerebro", icon: "brain",
    color: "#c084fc", colorClass: "text-purple-400", bgClass: "bg-purple-500/10",
    parts: 8, level: "ambos",
    desc: "Lóbulos, cerebelo, tronco encefálico e hipocampo.",
  },
  {
    slug: "sentidos", title: "Órganos de los Sentidos", icon: "eye",
    color: "#22d3ee", colorClass: "text-cyan-400", bgClass: "bg-cyan-500/10",
    parts: 9, level: "ambos",
    desc: "Anatomía del ojo, oído, nariz, lengua y piel.",
  },
  {
    slug: "endocrino", title: "Sistema Endócrino", icon: "flask",
    color: "#fb923c", colorClass: "text-orange-300", bgClass: "bg-orange-400/10",
    parts: 8, level: "secundaria",
    desc: "Hipotálamo, hipófisis, tiroides y suprarrenales.",
  },
  {
    slug: "inmunologico", title: "Sistema Inmunológico", icon: "shield",
    color: "#2dd4bf", colorClass: "text-teal-400", bgClass: "bg-teal-500/10",
    parts: 9, level: "secundaria",
    desc: "Linfocitos, anticuerpos, macrófagos y timo.",
  },
  {
    slug: "reproductor", title: "Reproductor Femenino", icon: "female",
    color: "#f472b6", colorClass: "text-pink-400", bgClass: "bg-pink-500/10",
    parts: 8, level: "secundaria",
    desc: "Ovarios, trompas, útero y ciclo menstrual.",
  },
  {
    slug: "reproductor-masculino", title: "Reproductor Masculino", icon: "male",
    color: "#818cf8", colorClass: "text-indigo-400", bgClass: "bg-indigo-500/10",
    parts: 8, level: "secundaria",
    desc: "Testículos, epidídimo y espermatozoide.",
  },
];

type Tool = {
  slug: string; title: string; desc: string; icon: string;
  color: string; colorClass: string; bgClass: string; label: string;
};
const tools: Tool[] = [
  { slug: "quiz",         title: "Quiz 3D",        icon: "trophy",    color: "#f59e0b", colorClass: "text-amber-400",   bgClass: "bg-amber-500/10",  label: "Primaria y Secundaria", desc: "10 preguntas con explicación y puntaje final." },
  { slug: "glosario",     title: "Glosario",        icon: "book",      color: "#94a3b8", colorClass: "text-slate-300",   bgClass: "bg-slate-400/10",  label: "65+ términos",          desc: "Términos biológicos con explicación y PDF." },
  { slug: "tareas",       title: "Banco de Tareas", icon: "clipboard", color: "#a78bfa", colorClass: "text-violet-400",  bgClass: "bg-violet-500/10", label: "24 tareas",             desc: "Tareas con actividades. Filtrá por nivel." },
  { slug: "evaluaciones", title: "Evaluaciones",    icon: "exam",      color: "#f59e0b", colorClass: "text-amber-400",   bgClass: "bg-amber-500/10",  label: "28 evaluaciones",       desc: "Opción múltiple, V/F y completar. PDF." },
  { slug: "notas",        title: "Notas",           icon: "notes",     color: "#10b981", colorClass: "text-emerald-400", bgClass: "bg-emerald-500/10",label: "Herramienta docente",   desc: "Anotaciones con fecha y exportación a PDF." },
];

const LEVEL_LABEL: Record<string, string> = {
  primaria: "Primaria",
  secundaria: "Secundaria",
  ambos: "P y S",
};

// ── Cards ─────────────────────────────────────────────────────────────────────
function FeaturedCard({ m, i, visited }: { m: Mod; i: number; visited: Set<string> }) {
  const seen = visited.has(m.slug);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="col-span-2"
    >
      <Link href={`/${m.slug}`}>
        <div
          className="relative overflow-hidden rounded-2xl border card-hover cursor-pointer h-[136px] sm:h-[148px] flex flex-col justify-between p-4"
          style={{
            background: `linear-gradient(135deg, ${m.color}18 0%, ${m.color}06 60%, #0e1626 100%)`,
            borderColor: `${m.color}30`,
          }}
        >
          {/* Large background icon */}
          <div className="absolute -bottom-3 -right-3 opacity-[0.10]" style={{ color: m.color }}>
            <BioIcon name={m.icon} size={100} />
          </div>

          <div className="flex items-start justify-between gap-2 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${m.bgClass} ${m.colorClass}`}>
                  {LEVEL_LABEL[m.level]}
                </span>
                {seen && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Visitado
                  </span>
                )}
              </div>
              <h3 className="font-display text-[18px] sm:text-[20px] font-bold text-white leading-tight tracking-tight">{m.title}</h3>
            </div>
            <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${m.bgClass} ${m.colorClass}`}>
              <BioIcon name={m.icon} size={22} />
            </div>
          </div>

          <div className="relative z-10 flex items-end justify-between">
            <p className="text-slate-400 text-[12px] leading-snug max-w-[200px] sm:max-w-xs">{m.desc}</p>
            <span className="text-[11px] font-semibold flex-shrink-0 ml-2" style={{ color: m.color }}>
              {m.parts} estructuras
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function ModCard({ m, i, visited }: { m: Mod; i: number; visited: Set<string> }) {
  const seen = visited.has(m.slug);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/${m.slug}`}>
        <div
          className="relative overflow-hidden rounded-xl border card-hover cursor-pointer h-full min-h-[100px] p-3.5 flex flex-col justify-between gap-2"
          style={{
            background: "#0e1626",
            borderColor: "#1d2b45",
          }}
        >
          <div className="flex items-start justify-between gap-1">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${m.bgClass} ${m.colorClass}`}>
              <BioIcon name={m.icon} size={18} />
            </div>
            {seen && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 mt-1" title="Visitado" />
            )}
          </div>
          <div>
            <h3 className="font-display text-[13px] font-semibold text-slate-100 leading-snug tracking-tight">{m.title}</h3>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="text-[10px] font-medium text-slate-600">{m.parts} estr.</span>
              <span className="w-0.5 h-0.5 rounded-full bg-slate-700" />
              <span className={`text-[10px] font-semibold ${m.colorClass}`}>{LEVEL_LABEL[m.level]}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function SectionLabel({ label, count, accent }: { label: string; count: number; accent: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-5 rounded-full" style={{ background: accent }} />
      <span className="font-display text-[15px] font-semibold text-slate-200 tracking-tight">{label}</span>
      <span className="text-[11px] text-slate-600">{count} módulos</span>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const [visited, setVisited] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bioaula-visited");
      if (raw) setVisited(new Set(JSON.parse(raw)));
    } catch {}
  }, []);

  const allMods = [...cellular, ...ecology, ...body];
  const visitedCount = allMods.filter(m => visited.has(m.slug)).length;
  const progress = Math.round((visitedCount / allMods.length) * 100);

  return (
    <div className="min-h-screen bio-ambient" style={{ background: "#070d1a" }}>
      <div className="relative z-10">

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="px-4 pt-9 pb-8 md:pt-14 md:pb-10 border-b border-white/[0.05]">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 min-w-0"
            >
              <h1 className="font-display text-[36px] md:text-[52px] font-extrabold text-white leading-[1.0] tracking-[-0.03em] mb-3">
                Bio<span style={{ color: "#22c55e" }}>Aula</span><span style={{ color: "#14b8a6" }}>3D</span>
              </h1>
              <p className="text-slate-400 text-[14px] md:text-[15px] max-w-sm leading-relaxed mb-5">
                Modelos 3D interactivos de células, órganos y sistemas del cuerpo humano.
                Para primaria y secundaria.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-5">
                <button
                  onClick={() => document.getElementById("celular")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-5 py-2.5 text-[13px] font-semibold text-white rounded-xl transition-all active:scale-95"
                  style={{ background: "linear-gradient(135deg, #15803d, #0d9488)" }}
                >
                  Explorar modelos
                </button>
                <Link
                  href="/quiz"
                  className="px-5 py-2.5 text-[13px] font-medium text-slate-300 rounded-xl border border-white/12 hover:border-white/22 hover:bg-white/4 transition-all"
                >
                  Comenzar quiz
                </Link>
              </div>

              {/* Progress bar (only when visited > 0) */}
              {visitedCount > 0 && (
                <div className="flex items-center gap-2.5">
                  <div className="flex-1 h-1.5 rounded-full bg-white/8 max-w-[160px]">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${progress}%`, background: "linear-gradient(90deg, #22c55e, #14b8a6)" }}
                    />
                  </div>
                  <span className="text-[11px] text-slate-500">{visitedCount}/{allMods.length} explorados</span>
                </div>
              )}
            </motion.div>

            {/* Decorative cell illustration — hidden on very small screens */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block flex-shrink-0 w-[140px] sm:w-[180px] md:w-[220px]"
            >
              <HeroDeco />
            </motion.div>
          </div>
        </section>

        {/* ── Módulos ────────────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-4 space-y-10">

          {/* Célula y Genética */}
          <section id="celular">
            <SectionLabel label="Célula y Genética" count={cellular.length} accent="#3b82f6" />
            <div className="grid grid-cols-2 gap-2.5">
              {cellular.map((m, i) =>
                m.featured
                  ? <FeaturedCard key={m.slug} m={m} i={i} visited={visited} />
                  : <ModCard key={m.slug} m={m} i={i} visited={visited} />
              )}
            </div>
          </section>

          {/* Microbiología y Ecología */}
          <section id="ecologia">
            <SectionLabel label="Microbiología y Ecología" count={ecology.length} accent="#10b981" />
            <div className="grid grid-cols-2 gap-2.5">
              {ecology.map((m, i) =>
                m.featured
                  ? <FeaturedCard key={m.slug} m={m} i={i} visited={visited} />
                  : <ModCard key={m.slug} m={m} i={i} visited={visited} />
              )}
            </div>
          </section>

          {/* Cuerpo Humano */}
          <section id="cuerpo">
            <SectionLabel label="Cuerpo Humano" count={body.length} accent="#fb7185" />
            <div className="grid grid-cols-2 gap-2.5">
              {body.map((m, i) =>
                m.featured
                  ? <FeaturedCard key={m.slug} m={m} i={i} visited={visited} />
                  : <ModCard key={m.slug} m={m} i={i} visited={visited} />
              )}
            </div>
          </section>
        </div>

        {/* ── Herramientas ───────────────────────────────────────────────── */}
        <section id="herramientas" className="max-w-6xl mx-auto px-4 pt-4 pb-20">
          <SectionLabel label="Herramientas educativas" count={tools.length} accent="#f59e0b" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {tools.map((t, i) => (
              <motion.div
                key={t.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/${t.slug}`}>
                  <div
                    className="flex items-start gap-3 rounded-xl border p-4 card-hover cursor-pointer"
                    style={{ background: "#0e1626", borderColor: "#1d2b45" }}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${t.bgClass} ${t.colorClass}`}>
                      <BioIcon name={t.icon} size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-[14px] font-semibold text-slate-100 leading-tight tracking-tight">{t.title}</h3>
                      <p className="text-[10.5px] font-medium mt-0.5 mb-1.5" style={{ color: t.color }}>{t.label}</p>
                      <p className="text-slate-500 text-[11.5px] leading-relaxed hidden sm:block">{t.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
