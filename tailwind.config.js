/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor:{
        'white-opacity-30': 'rgba(255, 255, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
