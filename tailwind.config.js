/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      outlineColor: {
        transparent: 'transparent',
      },
      colors:{
        primary: '#9DB2BF',
        secondary:{
          100: '#e0dedf',
          200: '#f7f5f6', //gris claro 
          300: '#FF355E', //rosa fosfi
          400: '#CA7284', //rosa claro
          600: '#363C55', //azul oscuro
        }
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
        'Comfortaa':['Comfortaa', 'cursive'] 
    },
  },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  variants: {
    extend: {
      outline: ['focus-visible', 'focus', 'focus-within'],
    },
  },
}
