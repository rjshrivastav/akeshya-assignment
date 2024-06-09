/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				raleway: ["Raleway Variable"]
			},
			boxShadow: {
				'custom': '0 4px 8px 0 rgba(0, 0, 0, 5%), 0 6px 20px 0 rgba(0, 0, 0, 0%)',
			  }
		},
	},
	plugins: [],
}
