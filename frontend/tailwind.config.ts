import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        graphite: "#121722",
        cyanfire: "#31d7ff",
        aurora: "#7f5cff",
        plasma: "#ff4fd8",
        success: "#45f2a6",
        warning: "#ffd166"
      },
      boxShadow: {
        halo: "0 0 32px rgba(49, 215, 255, 0.22)",
        panel: "0 16px 80px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;

