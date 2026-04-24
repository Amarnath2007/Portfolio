import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        navy: {
          900: "#020818",
          800: "#050d1f",
          700: "#081428",
          600: "#0a1a35",
        },
        blue: {
          glow: "#3b82f6",
          neon: "#60a5fa",
          accent: "#1d4ed8",
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px #3b82f6, 0 0 60px #1d4ed8" },
          "50%": { boxShadow: "0 0 40px #60a5fa, 0 0 100px #3b82f6" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
