/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        obscurePurple: 'hsl(260, 69%, 5%)',
        lightGray: 'hsl(232, 24%, 12%)',
        darkPurple: 'hsl(257, 38%, 11%)',
        lightPurple: 'hsl(283, 89%, 66%)'
      },
    },
  },
  plugins: [],
}