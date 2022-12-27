const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ubuntu", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
