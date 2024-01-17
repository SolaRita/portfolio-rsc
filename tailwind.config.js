/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F18F01",
          soft: "#d8ac81",
        },
        background: {
          DEFAULT: "#fffff3",
          200: "#f5f5e9",
          300: "#ccccc0",
        },
        accent: "#5c5c5c",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
