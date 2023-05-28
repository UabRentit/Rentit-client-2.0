/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1305px',
    },
    extend: {
      colors: {
        violet: {
          950: '#624C9F',
        },
        grey: {
          400: '#A7A9B7',
        },
      },
      fontFamily: {
        sans: ['Avenir', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
