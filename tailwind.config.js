/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: '#000',
      secondary : '#f3f2f0'
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}