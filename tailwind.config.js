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
		screens: {
			'2xl': { max: '1535px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '639px' },
			// => @media (max-width: 639px) { ... }
		},
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
			righteous: ['Righteous', 'cursive'],
		},
		extend: {},
	},
	plugins: [],
}
