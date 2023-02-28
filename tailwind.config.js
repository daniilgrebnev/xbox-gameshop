/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,tsx}'],
	theme: {
		colors: {
			black: '#222222',
			green: '#107c10',
			white: '#ffffff',
			red: '#ff3737',
			dark: '#313131',
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
			righteous: ['Righteous', 'cursive'],
		},
		extend: {},
	},
	plugins: [],
}
