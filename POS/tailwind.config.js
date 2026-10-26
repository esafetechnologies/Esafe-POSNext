import frappeUIPreset from "frappe-ui/tailwind";

export default {
	presets: [frappeUIPreset],
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/frappe-ui/src/components/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				esafe: {
					navy: "#0F1F5C",
					blue: "#2563EB",
					teal: "#00B8A9",
					"teal-strong": "#0F766E",
					"teal-light": "#E6F8F6",
				},
				// Indigo is used for primary UI emphasis across the app. Tune it
				// toward Esafe's deep navy while keeping the existing utility classes.
				indigo: {
					50: "#EEF1F8",
					100: "#DCE1EE",
					200: "#B8C4DD",
					300: "#8FA2C9",
					400: "#627DB2",
					500: "#3B5791",
					600: "#0F1F5C",
					700: "#0B194D",
					800: "#08133D",
					900: "#050D2E",
					950: "#020717",
				},
			},
		},
	},
	plugins: [],
};
