/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	transform: {
		mdx: (content) => {
		  return remark().process(content)
		}
	},
	theme: {
		extend: {
			fontFamily :{
				'nanum' : ['NanumSquareRound']
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],

}
