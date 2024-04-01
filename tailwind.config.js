/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        black: {
          ...require('daisyui/src/theming/themes')['black'],
          'base-100': '#080808',
          'base-200': '#090909',
          'base-300': '#131313',
          accent: '#101010',
        },
      },
    ],
  },
};
