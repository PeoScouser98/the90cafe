module.exports = {
	mode: "jit",
	content: [
		"./index.html",
		"./product.html",
		"./booking.html",
		"./hiring.html",
		"./reservation.html",
	],
	theme: {
		screens: {
			sm: "320px",
			// => @media (min-width: 320px) { ... }

			md: { min: "600px", max: "1365px" },
			// => @media (min-width: 600px) and (max-width: 1365px) { ... }

			lg: "1366px",
			// => @media (min-width: 1366px) { ... }
		},
		extend: {
			colors: {
				primary: "var(--primary)",
				secondary: "var(--secondary)",
			},
		},
	},
	plugins: [],
};
