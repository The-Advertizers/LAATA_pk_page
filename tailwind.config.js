module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'device': '100vh',
      '3/4-device': '75vh',
    },
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        primary: '#fff',
        secondary: '#713659',
        accent: {
          lighter: '#f8e6ef',
          DEFAULT: '#BD8FA8',
          dark: '#713659'
        }
      },
      keyframes: {
        slideup: {
          '0%': {
            transform: 'translateY(70%)'
          },
          '100%': {
            transform: 'translateY(0%)'
          },
        },
        slidedown: {
          '0%': {
            transform: 'translateY(-70%)'
          },
          '100%': {
            transform: 'translateY(0%)'
          },
        },
        slideleft: {
          '0%': {
            transform: 'translateX(70%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          },
        },
        slideright: {
          '0%': {
            transform: 'translateX(-70%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          },
        },
        slideup_fadein: {
          '0%': {
            opacity: 0,
            transform: 'translateY(70%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)'
          },
        },
        slidedown_fadein: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-70%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0%)'
          },
        },
        slideleft_fadein: {
          '0%': {
            opacity: 0,
            transform: 'translateX(70%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0%)'
          },
        },
        slideright_fadein: {
          '0%': {
            opacity: 0,
            transform: 'translateX(-70%)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0%)'
          },
        },
        fadein: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          },
        },
        fadeout: {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          },
        },
      },
      animation: {
        slideup: 'slideup 1s ease-out',
        slidedown: 'slidedown 1s ease-out',
        slideleft: 'slideleft 1s ease-out',
        slideright: 'slideright 1s ease-out',
        slideup_fadein: 'slideup_fadein 1s ease-out',
        slidedown_fadein: 'slidedown_fadein 1s ease-out',
        slideleft_fadein: 'slideleft_fadein 1s ease-out',
        slideright_fadein: 'slideright_fadein 1s ease-out',
        fadein: 'fadein 1s ease-out',
        fadeout: 'fadeout 1s ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
