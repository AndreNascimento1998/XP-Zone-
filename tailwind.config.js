/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
      '4xl': '2560px',
      '5xl': '3000px',
    },
    extend: {
      fontFamily:{
        'sans': ['Open Sans', 'sans-serif'],
        'oxanium': ['Oxanium', 'sans-serif']
      },
      backgroundImage: {
        'btn-primary': 'linear-gradient(90deg, #E54B65 3.13%, #FF9A51 133.21%)',
        'btn-primary-hover': 'linear-gradient(90deg, #FF9A51 3.13%, #E54B65 133.21%)'
      },
      backgroundColor: {
        'primary': '#210948',
        'secondary': '#120428',
      },
      colors: {
        'white-light': '#E7E6EA',
        'purple-light': '#210948',
        'primary-gradient': 'linear-gradient(90deg, #E54B65 3.13%, #FF9A51 133.21%)'
      }
    },
  },
  plugins: [],
};
