/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          "Raleway",
          "Quicksand",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          "Playfair Display",
          "Bodoni",
          "Crimson Pro",
          ...defaultTheme.fontFamily.serif,
        ],
        mono: [
          "Roboto Mono",
          "Inconsolata",
          "Cousine",
          "monospace",
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('flowbite/plugin'),
  ],
};
