/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF763B',
        gold: '#FFC607',
        white: '#FFFFFF',
        black: '#323232',
        gray: '#7F7F7F',
        lightgray: '#F8F9FA',
      },
    },
  },
};
