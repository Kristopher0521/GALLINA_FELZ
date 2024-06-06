/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css}",
  ],
  theme: {
    extend: {
      colors: {
        grayTuneado: '#374151',
        brownHeader: '#9F7D43',
        whiteLetras: '#FFFFFF',
        goldIndicator: '#FFD178',
        // goldIndicator: '#D9BF30',
        hoverColor: '#b88649'
      },
    },
  },
  plugins: [],
}

