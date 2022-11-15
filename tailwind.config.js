/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    extend: {
      colors: {
        whitish: '#f2e8cf',
        redish: '#bc4749',
        darkGreen:'#386641',
        lightGreen: '#6a994e'
      },
     
    },
  },
  plugins: [],
}
