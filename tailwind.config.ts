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
        "bg-dark": "#0A0A0A",
        "bg-dark-card": "#161616",
        "bg-dark-lighter": "#1E1E1E",
        accent: "#F5A623",
        "accent-hover": "#E09000",
        "accent-light": "#FFC857",
        "text-white": "#F5F5F5",
        "text-muted": "#9CA3AF",
        "text-dark": "#1A1A1A",
        "border-subtle": "#2A2A2A",
        success: "#22C55E",
        "surface-light": "#FAFAFA",
      },
      fontFamily: {
        body: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-oswald)", "sans-serif"],
      },
      boxShadow: {
        accent: "0 10px 24px rgba(245, 166, 35, 0.2)",
        card: "0 14px 30px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "texture-grid": "radial-gradient(circle at 1px 1px, rgba(255, 200, 87, 0.08) 1px, transparent 0)",
        "texture-carbon": "linear-gradient(45deg, rgba(255,255,255,0.03) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.03) 75%, transparent 75%, transparent)",
      },
      backgroundSize: {
        texture: "24px 24px",
        carbon: "16px 16px",
      },
    },
  },
  plugins: [],
};

export default config;
