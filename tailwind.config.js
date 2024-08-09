/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'btn-primary': 'linear-gradient(90deg, #E54B65 3.13%, #FF9A51 133.21%)',
        'btn-primary-hover': 'linear-gradient(90deg, #FF9A51 3.13%, #E54B65 133.21%)'
      },
    },
  },
  plugins: [],
};
