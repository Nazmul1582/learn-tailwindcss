<br />
 <p align="center">
    <h1 align="center">  PostCSS Installation - Advanced Concepts - Lesson13</h1>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [PostCSS](#postcss-installation)

<br>

# PostCSS installation

- fist command

```sh
npm i postcss postcss-cli autoprefixer
```

- Then create a postcss config file

```sh
npx tailwindcss init -p
```

- Then write a build script in package.json

```sh
"build-p": "npx postcss ./src/styles.css -o ./dist/tailwind.css -w"

```

- finally run build-p

```sh
npm run build-p
```

<br>
