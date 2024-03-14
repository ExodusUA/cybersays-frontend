/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mob': '374px',
      'mob2': '400px',

      'mobMax': { 'max': '414px' },
      'mac': { 'raw': '(max-height: 790px)' },

      'mac2': { 'raw': '(max-height: 860px)' },
      'mac3': { 'raw': '(min-height: 790px)' },
      'mac-center': { 'raw': '(min-height: 1080px)' },

      'se': { 'raw': '(min-width: 360px)' },

      'iphone': { 'raw': '(min-width: 400px)' },
      'iphone2': { 'raw': '(min-width: 390px)' },

      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',

    },
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
      'mobile-bg-homepage': "url('./images/CyberSaysPage/mobile-bg-homepage.jpg')",
      'mobile-bg-raffle': "url('./images/CyberSaysPage/mobile-bg-raffle.jpg')",
      'mobile-bg-double': "url('./images/CyberSaysPage/mobile-bg-double.jpg')",
      'mobile-bg-terms': "url('./images/CyberSaysPage/mobile-bg-terms.jpg')",
      'bg-homepage': "url('./images/CyberSaysPage/bg-homepage.jpg')",
      'bg-raffle': "url('./images/CyberSaysPage/bg-raffle.jpg')",
      'bg-double': "url('./images/CyberSaysPage/bg-double.jpg')",
      'bg-terms': "url('./images/CyberSaysPage/bg-terms.jpg')",
      'new-homepage-des': "url('./images/NewDesign/Bg/homepage_des.png')",
      'new-bg-promo': "url('./images/NewDesign/bgPromo.png')",
      'new-bg-promo-des': "url('./images/NewDesign/Bg/promo_des.png')",
    })
  },
  plugins: [],
}