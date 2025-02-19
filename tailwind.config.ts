import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "slate-900": "rgba(15,23,42,.4)",
        "slate-1000": "rgba(15,23,42,.8)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "km": "1px -19px 16px 1px rgb(17,24,39,1)",
        "1xl": "1px -1px 13px 3px #111"
      },
      fontFamily: {
        "gta": "GT America Mono,system-ui,sans-serif"
      }
    },
  },
  plugins: [],
};
export default config;
