<br />
 <p align="center">
    <h1 align="center">  Theme Configuration - Advanced Concepts - Lesson15</h1>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Theme Configuration](#theme-configuration)
  - [screens core plugin](#screens-core-plugin)
  - [Code](#code)

<br>

# Theme Configuration

## screens core plugin

- code of tailwind.config.js file

```sh
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.html"],
  theme: {
    screens: {
      sm: "540px",
      lg: "992px",
      "4xl": "1900px",
    },
    extend: {},
  },
  plugins: [],
};

```

- code of ./src/styles.css file

```css
/* @tailwind base;
@tailwind components;
@tailwind utilities; */

.content {
  @apply p-2 lg:text-lg border rounded w-48 mx-auto 
  sm:w-96 lg:w-1/2 4xl:w-1/3;
}
```

## Code

![screens core plugin of theme configuration](./images/screens%20core%20plugin%20of%20theme%20configuration.png)

<br>
