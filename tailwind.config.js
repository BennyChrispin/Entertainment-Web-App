/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC4747",
        dark: "#10141E",
        light: "#5A698F",
        secondary: "#161D2F",
        white: "#FFFFFF",
        gray: "#87898E",
        grayLight: "#CDCFD3",
      },
      fontFamily: {
        outfit: ["Outfit Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
