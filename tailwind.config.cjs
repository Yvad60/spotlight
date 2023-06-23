/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        light: "#f6f4f0",
        primary: "#8C6232",
      },
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
