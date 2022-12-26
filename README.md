<br />
 <p align="center">
    <h1 align="center"> use of theme() and screen() function - Lesson11</h1>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Functions](#functions)
  - [theme](#theme)
  - [screen](#screen)

<br>

# Functions

Tailwind adds a few custom functions you can use in your CSS to access Tailwind-specific values. These functions are evaluated at build-time, and are replaced by static values in your final CSS.

​

## theme()

Use the theme() function to access your Tailwind config values using dot notation.

```css
.content-area {
  height: calc(100vh - theme(spacing.12));
}
```

If you need to access a value that contains a dot (like the 2.5 value in the spacing scale), you can use square bracket notation:

```css
.content-area {
  height: calc(100vh - theme(spacing[2.5]));
}
```

Since Tailwind uses a nested object syntax to define its default color palette, make sure to use dot notation to access the nested colors.

Don't use the dash syntax when accessing nested color values

```css
.btn-blue {
  background-color: theme(colors.blue-500);
}
```

Use dot notation to access nested color values

```css
.btn-blue {
  background-color: theme(colors.blue.500);
}
```

To adjust the opacity of a color retrieved with theme, use a slash followed by the opacity value you want to use:

```css
.btn-blue {
  background-color: theme(colors.blue.500 / 75%);
}
```

## screen()

The screen function allows you to create media queries that reference your breakpoints by name instead of duplicating their values in your own CSS.

```css
@media screen(sm) {
  /* ... */
}
```

This will resolve to the underlying screen value at build-time, generating a regular media query that matches specified breakpoint:

```css
@media (min-width: 640px) {
  /* ... */
}
```

<br>
