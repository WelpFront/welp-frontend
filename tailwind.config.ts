import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/atoms/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"categories-gray": "#EBEBEB",
				secondary: "#FF0000",
				success: "#00e979",
				gray: {
					50: "#f7f6f6",
					100: "#DAD9D9",
				},
				orange: {
					100: "#FFF7E2",
					200: "#FFEEC0",
				},
				yellow: {
					main: "#F3B301",
				},
			},
			height: {
				"128": "50vh",
				"129": "80vh",
			},
			borderWidth: {
				"1": "1px",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".no-scrollbar": {
					"scrollbar-width": "none",
				},
			});
		}),
	],
};
export default config;
