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
          green:   "#16a34a",
          teal:    "#0d9488",
          blue:    "#2563eb",
          purple:  "#7c3aed",
          dark:    "#0b1120",
          card:    "#111827",
          surface: "#1a2235",
          border:  "#1e293b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
