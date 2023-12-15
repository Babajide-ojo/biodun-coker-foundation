/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxxs: "270px",
        xxs: "350px",
        xs: "450px",
        ...defaultTheme.screens,
      },
      colors: {
        btDarkBlue: "#111827",
        btBlack: "#121212",
        btGold: "#ECAF42",
        btGray: "#F3F4F6",
        btLightGray: "#FCFBF7",
        btOutLine: "#A7A7A4",
        btTextGray: "#696A82",
        btDarkGray: "#514A4A",
        btfooterTextColor: "#475367",
      },
    },
  },
  plugins: [],
};
