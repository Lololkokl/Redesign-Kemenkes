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
        alt: ["Sfprodis", "sans-serif"],
        paragraph: ["Lato", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
