/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				typing: {
					'0%': { width: '0' },
					'100%': { width: '100%' },
				},
			},
			animation: {
				typing: 'typing 2s steps(40) infinite',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
