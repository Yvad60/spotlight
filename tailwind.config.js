import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
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
  plugins: [tailwindScrollbar({ nocompatible: true })],
};
