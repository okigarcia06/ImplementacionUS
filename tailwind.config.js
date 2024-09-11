// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077b6',
        hover: '#00b4d8',
        background: '#caf0f8',
        dark: '#03045E',
        light: '#90e0ef',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
