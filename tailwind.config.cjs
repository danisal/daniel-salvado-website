module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				beanie: ['Reenie Beanie']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
