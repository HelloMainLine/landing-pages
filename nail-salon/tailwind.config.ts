import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      spacing: {
        section: "6rem",
        "section-mobile": "4rem",
      },
    },
  },
  plugins: [],
};

export default config;
