/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Brand Colors
        gold: "#FD5D00",
        yellow: "#FFC107",
        "neutral-dark": "#121212",
        "neutral-light": "#E0E0E0",
        "secure-teal": "#00BFA6",
        "threat-blue": "#2C84D8",
        "alert-amber": "#FC6000",
        "adversary-red": "#E63946",

        brand: {
          primary: "#0F172A",
          secondary: "#1E40AF",
          accent: "#3B82F6",
        },
        accent: {
          teal: "#06B6D4",
          purple: "#8B5CF6",
          orange: "#F97316",
        },
        neutral: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#0a0a0a",
        },
        semantic: {
          success: "#10B981",
          error: "#EF4444",
          warning: "#F59E0B",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
