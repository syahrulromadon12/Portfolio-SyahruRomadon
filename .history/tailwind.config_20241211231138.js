/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 16
      },
      colors: {
        primary: '#009688',
        dark: '#263238',
      },
    },
  },
  plugins: [],
}

