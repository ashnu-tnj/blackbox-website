import type { Config } from "tailwindcss";

/**
 * "Agriculture / Farm Tech" green design system.
 * `brand` is the fern/olive green ramp; `accent` is the harvest-gold CTA ramp.
 * Semantic tokens map to CSS variables in globals.css so components avoid
 * raw hex values.
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
        // Green ramp (sage → fern → deep olive)
        brand: {
          50: "#F3F7ED",
          100: "#E5EFD6",
          200: "#CBE0B3",
          300: "#ABCD86",
          400: "#8AB75D",
          500: "#6F9E50", // sage green
          600: "#588157",
          700: "#4A7043", // fern green (primary)
          800: "#3A5A40", // deep olive
          900: "#2C3E2C",
          950: "#1B271B",
        },
        // Harvest-gold accent ramp (CTAs, links, highlights)
        accent: {
          300: "#F2CC6B",
          400: "#E9B949",
          500: "#CA8A04",
          600: "#A16207",
          700: "#854D0E",
          800: "#713F12",
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
        card: "0 1px 3px 0 rgb(44 62 44 / 0.08), 0 1px 2px -1px rgb(44 62 44 / 0.08)",
        "card-hover":
          "0 18px 40px -16px rgb(58 90 64 / 0.35), 0 8px 16px -8px rgb(58 90 64 / 0.15)",
        btn: "0 2px 0 0 rgb(113 63 18 / 0.55), 0 4px 12px -4px rgb(113 63 18 / 0.4)",
        "btn-press": "0 0 0 0 rgb(113 63 18 / 0.55), 0 1px 3px -2px rgb(113 63 18 / 0.4)",
        "btn-green": "0 2px 0 0 rgb(44 62 44 / 0.55), 0 4px 12px -4px rgb(44 62 44 / 0.4)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(2deg)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        dash: {
          to: { strokeDashoffset: "-48" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.55s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 7s ease-in-out infinite",
        "float-soft": "float-soft 9s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
        dash: "dash 2.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
