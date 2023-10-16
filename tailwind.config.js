/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        '2': 2,
      },
      spacing: {},
      maxWidth: {
        '280': '280px',
      },
      margin:{
        'mept': '80px',
        'mepb': '70px',
        'mepg': '30px',
        'mepd': '30px',
      },
      padding:{
        '15': '15px',
      },
      fontFamily: {
        'sans-pro': ['Source Sans Pro', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'fs1': '4.2rem',
        'fs2': '3.8rem',
        'fs3': '3.2rem',
        'fs4': '2.5rem',
        'fs5': '2.4rem',
        'fs6': '2rem',
        'fs7': '1.8rem',
        'fs8': '1.5rem',
      },
      fontWeight: {
        'fw500': '500',
        'fw600': '600',
        'fw700': '700',
      },
      borderRadius:{
        'radius-4': '4px',
        'radius-12': '12px',
      },
      sectionPadding:{
        'section-padding': '60px',
      },
      boxShadow:{
        'shadow': '0 5px 20px 1px hsla(220, 63%, 33%, 0.1)'
      },
      colors:{
        'white': '#ffffff'
      },
      transitionDuration: {
          '150': '0.15s',
          '350': '0.35s',
      },
      transitionTimingFunction: {
        'cubic-in': 'cubic-bezier(0.51, 0.03, 0.64, 0.28)',
        'cubic-bezier': 'cubic-bezier(0.33, 0.85, 0.56, 1.02)',
      },
      keyframes: {
        wiggle: {
          '0%,20%': {  transform: 'translateX(0)' },
          '25%,45%': { transform: 'translateX(-100%)' },
          '50%,70%': { transform: 'translateX(-200%)' },
          '75%,95%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(-400%)' },
        },
        typing: {
          to: {
            'width': 'width: 0%',
          }
        },
        move: {
          '0%': {transform: 'translate(-15px, 0px)'},
          '50%': {transform: 'translate(0px, -15px)'},
          '100%': {transform: 'translate(-15px, 0px)'},
        }
      },
      animation: {
        'wiggle': 'wiggle 5s infinite ease-in-out',
        'typing': 'typing 3s steps(14) infinite',
        'move': 'move 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}