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
          // organic greens
          green:   "#22c55e",
          leaf:    "#4ade80",
          moss:    "#15803d",
          // scientific deep blue / teal
          teal:    "#14b8a6",
          ocean:   "#0e7490",
          blue:    "#3b82f6",
          // warm accents
          amber:   "#f59e0b",
          coral:   "#fb7185",
          // surfaces (deep navy with green undertone)
          dark:    "#070d1a",
          deep:    "#0a1120",
          card:    "#0e1626",
          surface: "#13203a",
          border:  "#1d2b45",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card:    "0 1px 2px rgba(0,0,0,.4), 0 8px 24px -12px rgba(0,0,0,.6)",
        "card-hover": "0 4px 12px rgba(0,0,0,.45), 0 24px 48px -20px rgba(0,0,0,.7)",
        glow:    "0 0 0 1px rgba(255,255,255,.04), 0 12px 40px -16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [],
};

export default config;
