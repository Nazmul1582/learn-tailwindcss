/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      screens: {
        sm: "540px",
        lg: "992px",
        "4xl": "1900px",
      },
    },
  },
  plugins: [],
};
