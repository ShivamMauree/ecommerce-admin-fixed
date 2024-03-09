/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b2a0ab',
        secondary: '#9d8390',
        highlight: '#e0e2f2',
        bgGray: '#fbfafd',
      },
    },
  },
  plugins: [],
}
