/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			lusitana: ['Lusitana', 'serif'], // Add your font here
			sans: ['Inter', ...defaultTheme.fontFamily.sans],
		  },
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
