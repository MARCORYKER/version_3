// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         "custom-purple": "#3B1A5A", // Darker purple for gradient
//         "custom-pink": "#C84B6F",   // Pink for gradient
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    backdropFilter: true, // Enable backdropFilter to use backdrop-blur utilities
  },
  theme: {
    extend: {
      colors: {
        custom: {
          purple: "#4B0082", // Matches globals.css
          pink: "#E91E63", // Matches globals.css
          red: "#D32F2F", // Guns N' Roses red for error states
          black: "#0D0D0D", // Guns N' Roses black for text
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
      fontSize: {
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 255, 255, 0.2)",
      },
      letterSpacing: {
        wide: "0.1em",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["hover", "visited", "active"],
    },
  },
  plugins: [],
};
