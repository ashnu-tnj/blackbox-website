import type { Config } from "tailwindcss";

/**
 * Corporate navy / white design system.
 * `brand` is the navy ramp; `accent` is the blue CTA ramp. Semantic tokens
 * map to CSS variables in globals.css so components avoid raw hex.
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
        // Navy ramp
        brand: {
          50: "#EEF3F9",
          100: "#D8E3F0",
          200: "#B4C8E0",
          300: "#87A4C9",
          400: "#547CA9",
          500: "#2F588A",
          600: "#1E4670",
          700: "#16375A",
          800: "#0F2A47", // primary navy
          900: "#0A1F36",
          950: "#061320",
        },
        // Blue accent ramp (CTAs, links, highlights)
        accent: {
          400: "#5B8DEF",
          500: "#3B82F6",
          600: "#2F6FED",
          700: "#2557C7",
          800: "#1E44A0",
        },
        // Semantic tokens
        background: "var(--color-background)",
        surface: "var(--color-card)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        line: "var(--color-border)",
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-on-primary)",
        destructive: "var(--color-destructive)",
      },
      fontFamily: {
        // `heading` kept as an alias of `display` for backwards compatibility
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        heading: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "80rem",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(15 42 71 / 0.06), 0 1px 3px 0 rgb(15 42 71 / 0.08)",
        "card-hover":
          "0 16px 40px -16px rgb(15 42 71 / 0.30), 0 8px 16px -8px rgb(15 42 71 / 0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.55s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
