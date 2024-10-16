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
      fontSize: { md: "0.85rem", xxl: "11rem" },
      maxWidth: { "screen-3xl": "1800px" },
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
          "base-100": "#090A0A",
          "base-200": "#0e0f11",
          "base-300": "#121416",

          neutral: "#131718",
          "neutral-content": "#151719",
          "accent-content": "#17191c",
          "info-content": "#b5ada1",

          accent: "#062220",
          primary: "#062726",
          secondary: "#092f2e",

          error: "#FF6B6B",
        },
      },
    ],
  },
};
