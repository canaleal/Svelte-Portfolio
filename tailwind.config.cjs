/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
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
          600: '#1a24c2',
          700: '#1a24c2',
          800: '#1a24c2',
        },
        rose: '#c21a24',
        orange: '#c2641a',
        yellow: '#c2b81a',
        cyan: '#77dce8',
        green: '#24c21a'
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
