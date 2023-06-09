/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#00B1A9",
        secondary: "#D2DC00",
      },
      fontFamily: {
        primary: ["Sfprodis", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
