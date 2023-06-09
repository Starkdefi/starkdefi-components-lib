/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "CeraPro-Black": ["Cera Pro Black", "sans-serif"],
        "CeraPro-Black-Italic": ["Cera Pro Black Italic", "sans-serif"],
        "CeraPro-Bold": ["Cera Pro Bold", "sans-serif"],
        "CeraPro-Medium": ["Cera Pro Medium", "sans-serif"],
        "CeraPro-Regular-Italic": ["Cera Pro Regular Italic", "sans-serif"],
        "CeraPro-Light": ["Cera Pro Light", "sans-serif"],
      },
      colors: {
        green_light: "#00DA63",
        green_light1: "#25AE63",
        green_light2: "#BCDBCA",
        green_light3: '#3cb774',
        green_light4: '#054120',
        green_light5: '#163A27',
        green_1: "#131E18",
        green_2: "#162B20",
        green_dark1: "#011809",
        green_dark2: "#010E05",
        btn_black: "#0A0C0B",
        black_alt: "#080B09",
      },
      screens: {
        "3xl": "2400px",
      },
    },
  },
  plugins: [],
};
