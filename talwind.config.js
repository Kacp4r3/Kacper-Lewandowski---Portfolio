const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      'xs': '320px', 
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}