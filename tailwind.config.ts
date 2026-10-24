import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#163A32",
          dark: "#0F2822",
          deep: "#0B1D19",
          light: "#215347",
          surface: "#1A4239",
        },
        ivory: {
          DEFAULT: "#F7F3EB",
          light: "#FCFAF6",
          dark: "#EFE8DA",
          muted: "#E3DCCB",
        },
        champagne: {
          DEFAULT: "#C3A36B",
          light: "#D5BA88",
          dark: "#A38349",
          accent: "#DEC495",
          hover: "#B69355",
        },
        charcoal: {
          DEFAULT: "#242522",
          light: "#353731",
          dark: "#171816",
          surface: "#2D2E2A",
        },
        sage: {
          DEFAULT: "#A7B2A0",
          light: "#C0CABC",
          dark: "#87937F",
          muted: "#94A08C",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.22em",
        subtle: "0.08em",
        wide: "0.15em",
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(22, 58, 50, 0.08)",
        card: "0 10px 30px -4px rgba(22, 58, 50, 0.12)",
        modal: "0 25px 60px -15px rgba(15, 40, 34, 0.5)",
        gold: "0 4px 25px rgba(195, 163, 107, 0.3)",
        glow: "0 0 35px rgba(195, 163, 107, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
