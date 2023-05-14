module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}', , './src/app.html'],
	theme: {
		extend: {
			fontFamily: {
				beanie: ['Reenie Beanie'],
			},
			animation: {
				blob: 'blob 7s infinite',
			},
			keyframes: {
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)',
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)',
					},
					'100%': {
						transform: 'translate(0px, 0px) scale(1)',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
