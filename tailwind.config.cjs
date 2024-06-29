/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        lightYellow: {
          600: "#fdfaf3",
        },
        smoke: {
          100: '#c3c3c5',
          200: '#dcd7d0',
          300: '#c8c1b9',
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
          600: '#ab9df2',
          700: '#9b8cf2',
          800: '#8b7bf2'
        },
        rose: '#ff6189',
        orange: '#fc9867',
        yellow: '#ffd866',
        cyan: '#77dce8',
        green: '#a9dc77'
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%'
      },
      maxWidth: {
        '8xl': '90rem'
      },
      height: {
        'h-0.25': '0.0625rem',
      }
     
    }
  },
  plugins: []
}
