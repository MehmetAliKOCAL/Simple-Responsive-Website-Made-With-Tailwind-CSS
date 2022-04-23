module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,js}', './index.html', 'index.html'],
  plugins: [],
  theme: {
    screens: {
      'laptop': { 'max': '1374px' },
      'laptop-sm': { 'max': '1200px' },
      'laptop-xs': { 'max': '1030px' },
      'laptop-2xs': { 'max': '880px' },
      'laptop-3xs': { 'max': '750px' },
      'laptop-4xs': { 'max': '524px' },
      'laptop-5xs': { 'max': '448px' },

    },
    backgroundSize: { '400%': '400%', },
    keyframes: {
      sidetoside: {
        '0%, 100%': { backgroundPosition: '0% 100%' },
        '50%': { backgroundPosition: '100% 0%' },
      }
    },
    animation: {
      sidetoside: 'sidetoside 6s infinite',
    },
    extend: {
      borderWidth: { '1': '1px' },
      transitionDuration: { DEFAULT: '350ms' },
      fontSize: { '2.5xl': '1.700rem' },
    },
  },
}