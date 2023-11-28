/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      linearGradientColors: {
        'pink-blue': ['105deg', '#FF1CBB -23.05%', '#088CD9 88.21%'],
      },
      colors: {
        dark: '#0A1225',
        gray: '#83869B',
        white: '#F5F5F5',
      },
    },
    backgroundImage: theme => ({
      'modal': "url('./images/landing/modal_bg.png')",
      'mobile': "url('./images/landing/mobile-bg.png')",
    })
  },
  plugins: [],
}