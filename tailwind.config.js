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
      fontSize: { md: "0.85rem", xxl: "10rem" },
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
          "base-100": "#0b0c0e",
          "base-200": "#101112",
          "base-300": "#131416",
          "neutral-content": "#232425",
          accent: "#101111",
          primary: "#101511",
          secondary: "#111412",
        },
      },
    ],
  },
};
