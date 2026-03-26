import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono:    ["var(--font-mono)",    "monospace"],
        sans:    ["var(--font-sans)",    "sans-serif"],
      },
      colors: {
        copper: {
          50:"#fdf8ed", 100:"#faefd0", 200:"#f4d98d", 300:"#eec04a",
          400:"#e8b84b", 500:"#d4a853", 600:"#b8860b", 700:"#946b09",
          800:"#7a580c", 900:"#664a10",
        },
      },
      boxShadow: {
        copper:      "0 0 40px rgba(212,168,83,0.22)",
        "copper-sm": "0 0 16px rgba(212,168,83,0.18)",
        "copper-lg": "0 0 70px rgba(212,168,83,0.38)",
        soft:        "0 12px 36px rgba(0,0,0,0.45)",
        card:        "0 4px 24px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};
export default config;
