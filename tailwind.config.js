// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        dark: "#000000",
        primary: {
          DEFAULT: "var(--color-primary)",
          muted: "var(--color-primary-muted)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          muted: "var(--color-secondary-muted)",
        },
        accent: "var(--color-accent)",
        surface: {
          DEFAULT: "var(--color-surface)",
          muted: "var(--color-surface-muted)",
        },
        background: {
          DEFAULT: "var(--color-background)",
          layout: "var(--color-background-layout)",
        },
        foreground: {
          DEFAULT: "var(--color-foreground)",
          muted: "var(--color-foreground-muted)",
        },
        card: "var(--color-card)",
      },

      animation: {
        popup: "fadeScaleIn 0.2s ease-out",
      },

      keyframes: {
        fadeScaleIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },

      transitionProperty: {
        color:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
      },
      transitionDuration: {
        fast: "150ms",
        normal: "300ms",
        slow: "500ms",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.6, 1)",
        bouncy: "cubic-bezier(.68,-0.55,.27,1.55)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".transition-color-soft": {
          transitionProperty: theme("transitionProperty.color"),
          transitionDuration: theme("transitionDuration.normal"),
          transitionTimingFunction: theme("transitionTimingFunction.soft"),
        },
        ".transition-color-bouncy": {
          transitionProperty: theme("transitionProperty.color"),
          transitionDuration: theme("transitionDuration.slow"),
          transitionTimingFunction: theme("transitionTimingFunction.bouncy"),
        },
        ".transition-color-fast": {
          transitionProperty: theme("transitionProperty.color"),
          transitionDuration: theme("transitionDuration.fast"),
          transitionTimingFunction: theme("transitionTimingFunction.in-out"),
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
