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
        sunset: ''
      }
    },
  },
  plugins: [],
}

