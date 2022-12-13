/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: { 
    fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    extend: {
      colors: {
        whitish: '#F1F1F1',
        beige: '#E2DCC8',
        greenish:'#0F3D3E',
        night: '#100F0F'
      },
     
    },
  },
  plugins: [],
}
