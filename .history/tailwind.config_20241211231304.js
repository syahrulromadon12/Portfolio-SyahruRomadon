/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#009688',
        dark: '#263238',
      },
      screens: {
        '2xl': '1320'
      }
    },
  },
  plugins: [],
}
