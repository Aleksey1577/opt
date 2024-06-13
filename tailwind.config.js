/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0584FE",
        "dark-blue": "#1253A2",
        white: "#FFFFFF",
        gray: "#FBFCFD",
        "dark-gray": "#EEEFF1",
        "super-dark-gray": "#BCBCBC",
      },
      fontFamily: {
        ptsans: ['"PT Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
