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
        // Dark surfaces — deep charcoal with blue undertone
        "bg-dark": "#0C0E13",
        "bg-dark-card": "#131720",
        "bg-dark-lighter": "#1A1F2B",

        // Light surfaces
        surface: "#F7F8FA",
        "surface-alt": "#ECEEF2",

        // Accent red — bold and confident
        accent: "#D32F2F",
        "accent-hover": "#B71C1C",
        "accent-light": "#EF5350",

        // Brand blue — clean, professional
        "brand-blue": "#4A9FD4",
        "brand-blue-dim": "#2E7EAD",

        // Text
        "text-white": "#FFFFFF",
        "text-light": "#E4E7EE",
        "text-muted": "#8A929E",
        "text-dark": "#0C0E13",
        "text-dark-muted": "#4A5568",

        // Borders
        "border-subtle": "rgba(255,255,255,0.08)",
        "border-light": "rgba(0,0,0,0.07)",

        success: "#22C55E",
        silver: "#8E9BAD",
      },
      fontFamily: {
        body: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Impact", "Arial Narrow", "sans-serif"],
      },
      boxShadow: {
        accent: "0 0 48px rgba(211, 47, 47, 0.35)",
        card: "0 8px 32px rgba(0, 0, 0, 0.55)",
        lift: "0 24px 64px rgba(0, 0, 0, 0.65)",
        "card-light": "0 2px 16px rgba(0, 0, 0, 0.07)",
        "lift-light": "0 8px 32px rgba(0, 0, 0, 0.12)",
      },
      backgroundImage: {
        "grain-soft":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        "mesh-hero":
          "radial-gradient(ellipse 120% 80% at 70% 20%, rgba(74, 159, 212, 0.10) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 10% 90%, rgba(211, 47, 47, 0.08) 0%, transparent 45%)",
        "line-grid":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "texture-carbon":
          "linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 75%, transparent 75%, transparent)",
        "dot-grid":
          "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        texture: "24px 24px",
        carbon: "16px 16px",
        grid: "48px 48px",
        dot: "28px 28px",
      },
    },
  },
  plugins: [],
};

export default config;
