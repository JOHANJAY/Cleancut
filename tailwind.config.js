/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        accent: "#FF0000",
        'accent-light': '#FF3333',
        'accent-dark': '#CC0000',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}