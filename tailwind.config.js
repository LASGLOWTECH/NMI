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
      colors:'brightRed '
    },
  },
  plugins: [require('flowbite/plugin')]
});