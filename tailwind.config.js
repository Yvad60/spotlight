/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        "light": "#f6f4f0",
      },
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
