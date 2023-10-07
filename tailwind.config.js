/** @type {import('tailwindcss').Config} */


const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =  withMT( {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        darkYellow:'#FFCC00',
        darkYellow2:'#249298',
        greyBlack:'#181B38',
        grey:'#fafafa'
      }},
  },
  plugins: [require('flowbite/plugin')]
});