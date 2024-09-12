/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        smoke: {
          100: '#09090',
          200: '#ffffff',
          300: '#fefefe',
        },
        dark: {
          400: '#232323',
          900: '#0f0f0f'
        },
        frog: {
          800: '#172d93',
          900: '#0D1B59'
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
        5: '5 5 0%',
      }
    }
  },
  plugins: []
}
