const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html"],
  theme: {
    colors: {
      blue: "#1fb6ff",
      pink: "#ff49db",
    },
    fontFamily: {
      sans: ["ubuntu", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      screens: {
        sm: "540px",
        lg: "992px",
        "4xl": "1900px",
      },
      spacing: {
        2: "20px",
      },
      borderRadius: {
        "4xl": "40px",
      },
    },
  },
  plugins: [],
};
