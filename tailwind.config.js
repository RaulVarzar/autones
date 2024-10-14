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
          "base-100": "#0c0d0d",
          "base-200": "#101111",
          "base-300": "#131416",

          neutral: "#161718",
          "neutral-content": "#1b1c1d",
          "accent-content": "#202122",
          accent: "#343460",
          primary: "#2c2c54",
          error: "#FF6B6B",
          secondary: "#111412",
          secondary: "#0760ed",
        },
      },
    ],
  },
};
