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
          100: '#FAF2F4',
          200: '#DDE6ED',
          300: '#FF355E',
          500: '#CDECEF',
          900: '#07A2AD'
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
