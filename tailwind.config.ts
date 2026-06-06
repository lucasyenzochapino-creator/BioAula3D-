import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bio: {
          /* ── Fondos — grises cálidos ── */
          dark:    "#111214",
          deep:    "#17191C",
          card:    "#1D2025",
          surface: "#23272E",
          border:  "#2A2F38",

          /* ── Acento principal ── */
          accent:  "#4A7FA5",
          "accent-dim": "#3A6485",

          /* ── Módulos — tonos apagados ── */
          cell:    "#5B8A6F",   /* verde musgo   */
          gen:     "#6B7FA8",   /* azul grisáceo */
          eco:     "#7A8F5E",   /* verde oliva   */
          body:    "#8A6B8A",   /* violeta apag. */
          nerve:   "#7A6B9A",   /* índigo apag.  */
          heart:   "#9A5C5C",   /* rojo ladrillo */
          resp:    "#5C7A8A",   /* azul acero    */
          endo:    "#8A7A5C",   /* ámbar tierra  */
          micro:   "#6A8A7A",   /* verde gris    */
          immu:    "#5B7A8A",   /* azul plomo    */
          repro:   "#8A7A8A",   /* malva apag.   */
          sense:   "#7A8A9A",   /* gris azulado  */

          /* ── Texto ── */
          t1:  "#E8EAF0",
          t2:  "#9BA3B2",
          t3:  "#5C6472",
          t4:  "#373E4A",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card:       "0 1px 2px rgba(0,0,0,.5), 0 6px 20px -10px rgba(0,0,0,.6)",
        "card-hover":"0 4px 12px rgba(0,0,0,.5), 0 16px 32px -12px rgba(0,0,0,.65)",
        glow:       "0 0 0 1px rgba(255,255,255,.03), 0 8px 30px -12px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};

export default config;
