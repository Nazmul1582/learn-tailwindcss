/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html"],
  theme: {
    /*
    // this colors object(outside the extend object) will replace the tailwind's colors object. So, tailwind's other colors classes will not work now.
    colors:{
      gray:{
        300: "#ddd"
      }
    },
  */

    /*
    // this colors object(inside the theme.extend object) will replace only tailwind's colors.gray.300 property.
    extend: {
      colors:{
        gray:{
          300: "#ddd"
        }
      }
    },
  },
  */

    /* if I use this colors object, I won't use tailwind's other colors
  colors: {
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
  },
  */
    extend: {},
  },
  plugins: [
    // here we write down third party or our own plugins name
  ],
};

// we can customizing anyting in our css file (./src/styles.css). but if we customize something here, we will get some extra facilities. (like: we will be suggeted our custom class by Tailwind InteliSence plugin etc.)
