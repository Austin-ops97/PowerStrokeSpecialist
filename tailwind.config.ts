import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#030303",
        "bg-dark-card": "#0a0a0a",
        "bg-dark-lighter": "#111111",
        "bg-panel": "#0e0e0e",
        accent: "#B21E1E",
        "accent-hover": "#951818",
        "accent-muted": "rgba(178, 30, 30, 0.45)",
        "accent-blue": "#77A9D1",
        "accent-blue-hover": "#5f94bf",
        "accent-blue-dim": "rgba(119, 169, 209, 0.12)",
        "text-white": "#F4F4F2",
        "text-muted": "#9B9B97",
        "text-dark": "#030303",
        "border-subtle": "rgba(255, 255, 255, 0.09)",
        "border-strong": "rgba(255, 255, 255, 0.16)",
        success: "#22C55E",
        "surface-light": "#FFFFFF",
      },
      fontFamily: {
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-libre)", "Georgia", "serif"],
      },
      boxShadow: {
        accent: "0 0 0 1px rgba(178, 30, 30, 0.35), 0 24px 48px rgba(0, 0, 0, 0.45)",
        card: "0 20px 50px rgba(0, 0, 0, 0.55)",
        lift: "0 32px 64px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        "hero-vignette":
          "linear-gradient(105deg, rgba(3,3,3,0.92) 0%, rgba(3,3,3,0.55) 45%, rgba(3,3,3,0.35) 100%)",
        "mesh-dark":
          "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(119, 169, 209, 0.08), transparent 50%), radial-gradient(ellipse 60% 40% at 85% 20%, rgba(178, 30, 30, 0.07), transparent 45%)",
        "line-grid":
          "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        "red-sheen": "linear-gradient(135deg, rgba(178,30,30,0.15) 0%, transparent 50%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      letterSpacing: {
        brand: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
