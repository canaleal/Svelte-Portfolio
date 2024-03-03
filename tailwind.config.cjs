/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				dark: {
					text: "#6a6b6d",
					background: "#09090b",
					hover: '#020202',
				}
			}
		}
	},
	plugins: []
};
