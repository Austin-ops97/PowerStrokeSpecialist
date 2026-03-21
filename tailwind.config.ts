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
        primary: "#0F172A",
        "primary-light": "#1E293B",
        accent: "#F97316",
        "accent-hover": "#EA580C",
        secondary: "#3B82F6",
        "text-primary": "#F8FAFC",
        "text-muted": "#94A3B8",
        surface: "#FFFFFF",
        border: "#334155",
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-oswald)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(249, 115, 22, 0.25), 0 10px 24px rgba(15, 23, 42, 0.35)",
      },
      backgroundImage: {
        "industrial-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.14) 1px, transparent 0)",
      },
      backgroundSize: {
        grid: "24px 24px",
      },
    },
  },
  plugins: [],
};

export default config;
