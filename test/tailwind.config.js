module.exports = {
  mode: 'jit',
  content: ['./**/*.{html,js}', './index.html', 'index.html'],
  theme: {
    screens: {
      'lg': { 'max': '1279px' },
      'xl': '1280px',
      'md': { 'max': '1024px' },
      'sm': { 'max': '650px' },
      'msm': { 'max': '550px' },
      'xs': { 'max': '400px' }
    },
    extend: {
      margin: {
        '21.5': '84px',
      },
      fontSize: {
        '8.5xl': '110px'
      },
      colors: {
        dark: '#101016',
      },
      height: {
        '2.5': '10px',
      },
      width: {
        '21': '85px',
        '23': '92px',
        '17': '73px',
      },
      backgroundSize: { '400%': '400%', },
      keyframes: {
        sidetoside: {
          '0%, 100%': { backgroundPosition: '0% 100%' },
          '50%': { backgroundPosition: '100% 0%' },
        },
        textFocusIn: {
          '0%': {
            letterSpacing: '-0.5em',
            filter: 'blur(12px)',
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          '100%': {
            filter: 'blur(0px)'
          }
        },
        textPopUp: {
          '0%': {
            transform: 'translateY(0)',
            transformOrigin: '50% 50%',
            textShadow: 'none',
          },
          '100%': {
            transform: 'translateY(-50px)',
            transformOrigin: '50% 50%',
            textShadow: '0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3)',
          },
        },
      },
      animation: {
        sidetoside: 'sidetoside 3s infinite',
        textFocusIn: 'textFocusIn 0.85s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        textPopUp: 'textPopUp 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      textShadow: {
        'default': '0 2px 0 #000',
        'md': '0 0 15px black, 0 0 20px black, 0 0 25px black, 0 0 30px black',
        'white': '0 0 2px white',
        'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
