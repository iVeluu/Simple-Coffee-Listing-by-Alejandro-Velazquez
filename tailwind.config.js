/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColor: "#111315",
        secondary: "#6F757C",
        bgLayout: "#1B1D1F",
        colorTxt: "#FEF7EE",
        popular: "#F6C768",
        price: "#BEE3CC",
        soldOut: "#ED735D",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
