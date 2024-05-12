/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: {
					50: '#f5f5f5',
					100: '#ebebeb',
					200: '#d1d1d1',
					300: '#b6b6b6',
					400: '#808080',
					500: '#292929',
					600: '#171717',
					700: '#121212',
					800: '#0d0d0d',
					900: '#020202'
				},
				foam: {
					300: '#63ffb6'
				}
			},
			flex: {
				2: '2 2 0%',
				3: '3 3 0%'
			}
		}
	},
	plugins: []
};
