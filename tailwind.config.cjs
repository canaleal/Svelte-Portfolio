/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        smoke: {
          100: '#f5f5f5',
        },
        dark: {
          100: '#999999',
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
          700: '#1a24c2',
          800: '#0d1a8f',
        },
        rose: '#f44336',
        orange: '#ff9800',
        yellow: '#ffc107',
        cyan: '#00bcd4',
        green: '#4caf50',
        brown: '#795548',
        purple: '#673ab7'
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
