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
        primary: '#FF0000',
        secondary:{
          100: '#0000FF',
          500: '#00FF00',
          900: '#FFFF00'
        }
      },
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif'],
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
