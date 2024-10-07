/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        smoke: {
          100: '#fdfdfc',
          200: '#f7f7f4',
          300: '#f8f8f6'
        },
        dark: {
          400: '#787884',
          500: '#181822',
          600: '#0d0d15',
          900: '#000000'
        },
        darkFrog: {
          800: '#f7f7f7',
        },
        frog: {
          800: '#5d94ed',
          900: '#5a52ff'
        },
        green: {
          800: '#3A7D44',
          900: '#254d32'
        }
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
        5: '5 5 0%'
      }
    }
  },
  plugins: []
}
