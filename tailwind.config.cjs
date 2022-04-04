module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	// Only add this if you installed the TailwindCSS-plugins:
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
	],
	theme: {
		extend: {
			fontFamily: {
				playfair: 'Playfair Display, serif',
			},
			screens: {
				xs: '520px',
			},
		},
	},
}
