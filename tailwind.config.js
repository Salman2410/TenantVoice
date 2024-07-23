/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",  
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'bleu-de-france': '#1c8ce2',
        'jordy-blue': '#89c3f0',
        'dark-cerulean': '#104f7f',
        'jelly-bean-blue': '#527992',
        'cadet-blue': '#a4bbc9',
        'onyx': '#36353c',
      },
    },
  },
  plugins: [],
}

