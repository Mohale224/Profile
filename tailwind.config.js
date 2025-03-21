/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: colors.green,
        secondary: colors.yellow,
        slate: colors.slate, // Replace `blueGray` with `slate`
        sky: colors.sky, // Replace `lightBlue` with `sky`
        stone: colors.stone, // Replace `warmGray` with `stone`
        neutral: colors.neutral, // Replace `trueGray` with `neutral`
        gray: colors.gray, // Replace `coolGray` with `gray`
      },
    },
  },
  plugins: [],
};
