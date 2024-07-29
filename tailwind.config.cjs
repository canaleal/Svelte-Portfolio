/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        smoke: {
          100: '#f6f8f7',
          300: '#f5f5f5',
          400: '#efebe8',
        },
        dark: {
          100: '#403f44',
          200: '#595959',
          300: '#333333',
          400: '#232323',
          500: '#1a1a1a',
          600: '#2c2a2f',
          700: '#171717',
          800: '#121212',
          900: '#0f0f0f'
        },
        frog: {
          700: '#598063',
          800: '#566d51',
        },
        rose: '#b12b1f',
        orange: '#fb613d',
        yellow: '#ffa93c',
        cyan: '#348080',
        green: '#527b5b',
        brown: '#8c5a39',
        purple: '#a35764',
        gray: '#a8a199'
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
        5: '5 5 0%',
      }
    }
  },
  plugins: []
}
