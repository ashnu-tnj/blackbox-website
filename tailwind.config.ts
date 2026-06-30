import type { Config } from "tailwindcss";

/**
 * Design tokens derived from the "Agriculture / Farm Tech" palette and the
 * "Trust & Authority" B2B style. Colours are exposed as CSS variables in
 * globals.css and mapped here so components never use raw hex values.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand greens
        brand: {
          50: "#F3F7ED",
          100: "#E5EFD6",
          200: "#CBE0B3",
          300: "#ABCD86",
          400: "#8AB75D",
          500: "#6F9E50", // sage green (secondary)
          600: "#588157",
          700: "#4A7043", // fern green (primary)
          800: "#3A5A40", // deep olive
          900: "#2C3E2C", // foreground / text
          950: "#1B271B",
        },
        // Harvest gold accent (CTA / highlights)
        harvest: {
          500: "#CA8A04",
          600: "#A16207",
          700: "#854D0E",
        },
        // Semantic tokens mapped to CSS variables
        background: "var(--color-background)",
        surface: "var(--color-card)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        line: "var(--color-border)",
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-on-primary)",
        accent: "var(--color-accent)",
        "accent-foreground": "var(--color-on-accent)",
        destructive: "var(--color-destructive)",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "80rem", // max-w-7xl equivalent, consistent container
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(44 62 44 / 0.08), 0 1px 2px -1px rgb(44 62 44 / 0.08)",
        "card-hover":
          "0 10px 30px -12px rgb(74 112 67 / 0.25), 0 4px 8px -4px rgb(74 112 67 / 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
