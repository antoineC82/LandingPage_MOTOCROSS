const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gradient-start': '#c03030',
        'gradient-end':   '#d709dd',
        'nav-gray':       '#cacaca',
        'gray-caca':      '#cacaca',
        'button-gray':    '#3e3e3e',
        'gray-3e':        '#3e3e3e',
        'link-gray':      '#656565',
        'gray-65':        '#656565',
    },
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
    },
    },
  },
  plugins: [],
};
