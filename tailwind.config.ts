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
        // Dark surfaces — deep Texas navy (matches logo's dominant black/dark)
        ink: {
          DEFAULT: "#07111E",   // very dark navy — replaces pure black
          card: "#0C1A2E",      // card on dark
          lighter: "#102138",   // slightly lighter dark element
          border: "rgba(255,255,255,0.07)",
        },
        // Light surfaces
        chalk: {
          DEFAULT: "#F4F5F7",
          card: "#FFFFFF",
          border: "rgba(0,0,0,0.07)",
        },
        // Texas red — primary CTA / action color (from logo flag)
        brand: {
          DEFAULT: "#C41E2A",
          dark: "#A31824",
          light: "#E02535",
        },
        // Texas blue — identity / accent color (from logo flag)
        accent: {
          DEFAULT: "#2255A0",
          dark: "#1A4280",
          light: "#3B78C4",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "0 2px 8px rgba(0,0,0,0.10)",
        md: "0 4px 24px rgba(0,0,0,0.14)",
        lg: "0 8px 40px rgba(0,0,0,0.20)",
        xl: "0 16px 64px rgba(0,0,0,0.28)",
        brand: "0 4px 24px rgba(196,30,42,0.40)",
        accent: "0 4px 24px rgba(34,85,160,0.35)",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        "dot-grid-light": "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "24px 24px",
        "dot-md": "32px 32px",
      },
    },
  },
  plugins: [],
};

export default config;
