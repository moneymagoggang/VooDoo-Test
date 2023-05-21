/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'light-sand': '#FCF7E6',
      },
      screens: {
        'xs': {'max': '650px'},
        sm: '650px',
        md: '950px',
        lg:'1255px',
        xl: '1440px',
      },
      fontFamily: {
        footer: ['Space Mono'],
        body: ['Space Grotesk'],
      }
    },
  },
  plugins: [],
}

