const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ubuntu"], // here tailwind's default sans font not working;
        sans: ["ubuntu", ...defaultTheme.fontFamily.sans], // but here, default sans will working;
      },
    },
  },
  plugins: [],
};
