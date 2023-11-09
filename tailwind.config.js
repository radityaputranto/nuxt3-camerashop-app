/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      /* define custom utilities */
      spacing: {
        13: '1rem',
        15: '4rem',
        17: '6rem',
      },
      fontFamily: {
        inter: ['Inter'],
      },
      colors: {
        radit: '#30B7FA',
        night: '#0E1D31',
        sunset: '',
        tema: 'rgb(var(--var-tema/<alpha-value>)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wiggle-slow': 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          }
        }
      }
    },
  },
  plugins: [],
}

