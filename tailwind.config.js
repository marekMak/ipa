/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        baseRed:"#C71D1D"
      },
      fontFamily: {
        noto: ['Noto Serif', 'serif'],
        anton:['Anton', 'sans-serif'],
        dancing:['Dancing Script', 'cursive']
      },
      fontSize: {
        '13vw': '13vw', // Custom font size 13vw
      },
    },
  },
  plugins: [],
}