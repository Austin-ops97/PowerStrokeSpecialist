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
        // Primary brand — Texas flag deep navy
        navy: {
          DEFAULT: "#1E3A8A",
          dark:    "#172D6E",
          light:   "#2B52C8",
          50:      "#EEF2FB",
          100:     "#D5E0F5",
          deep:    "#0C1942",   // footer background
        },
        // Action — Texas flag red
        action: {
          DEFAULT: "#DC2626",
          dark:    "#B91C1C",
          light:   "#EF4444",
          50:      "#FEF2F2",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card:  "0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)",
        hover: "0 4px 24px rgba(0,0,0,0.10), 0 1px 6px rgba(0,0,0,0.06)",
        navy:  "0 4px 24px rgba(30,58,138,0.30)",
        action:"0 4px 24px rgba(220,38,38,0.30)",
      },
      backgroundImage: {
        "dot-light": "radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
        "dot-navy":  "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "20px 20px",
        "dot-md": "28px 28px",
      },
    },
  },
  plugins: [],
};

export default config;
