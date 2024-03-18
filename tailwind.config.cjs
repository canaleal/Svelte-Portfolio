/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: {
					background: "#09090b",
					hover: '#020202',
				},
				foam: {
					300: "#63ffb6",
				}
			},
			flex : {
				'2': '2 2 0%',
				'3': '3 3 0%',
			},
		}
	},
	plugins: []
};
