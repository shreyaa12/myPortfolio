/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   circularLight: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #000000 5px, #000000 100px);'
      // },
    },

    colors: {
      ...colors,
      primary: '#ece2e2',
      secondary: {
        100:'#efdaaa',
        400:'#fbbf24'
      },
    },
    
  },
 
  plugins: [],
}
