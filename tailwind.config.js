/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
      screens: {
        "3xl": "1600px",
      },
      fontSize: { md: "0.85rem", "10xl": "10rem", xxl: "12rem", xxxl: "18rem" },
      maxWidth: { "8xl": "1360px", "screen-3xl": "1800px" },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        black: {
          ...require("daisyui/src/theming/themes")["black"],
          "base-100": "#0C0D0D",
          "base-200": "#111113",
          "base-300": "#131416",

          neutral: "#131718",
          "neutral-content": "#1c1e21",
          "accent-content": "#3f4688",
          "info-content": "#B5B6C5",
          "base-content": "#D7D8E0",
          "primary-content": "#454d96",
          accent: "#383A6B",
          primary: "#464886",
          secondary: "#5457a0",

          error: "#FF6B6B",
        },
      },
    ],
  },
};
