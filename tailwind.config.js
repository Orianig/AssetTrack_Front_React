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
        primary: '#493862',
        secondary:{
          100: '#A3B744',
          300: '#a7ab98',
          500: '#D56D12',
          900: '#33222B'
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
