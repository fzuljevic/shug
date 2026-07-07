import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        paper: "var(--paper)",
        panel: "var(--panel)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-faint": "var(--ink-faint)",
        line: "var(--line)",
      },
      letterSpacing: {
        label: "0.28em",
        wide: "0.18em",
      },
      maxWidth: {
        editorial: "88rem",
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(1.4rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "reveal-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "reveal-line": "reveal-line 1.1s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
