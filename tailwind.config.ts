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
        // Dark surfaces
        ink: {
          DEFAULT: "#0A0A0A",
          card: "#111111",
          lighter: "#161616",
          border: "rgba(255,255,255,0.08)",
        },
        // Light surfaces
        chalk: {
          DEFAULT: "#F4F4F4",
          card: "#FFFFFF",
          border: "rgba(0,0,0,0.08)",
        },
        // Brand red
        brand: {
          DEFAULT: "#E31B1B",
          dark: "#C01616",
          light: "#FF3535",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "0 2px 8px rgba(0,0,0,0.06)",
        md: "0 4px 24px rgba(0,0,0,0.09)",
        lg: "0 8px 40px rgba(0,0,0,0.13)",
        xl: "0 16px 64px rgba(0,0,0,0.18)",
        brand: "0 4px 24px rgba(227,27,27,0.4)",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
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
