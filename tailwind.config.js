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
          DEFAULT: "#4c5187",
          soft: "#abacea",
        },
        background: {
          DEFAULT: "#fffefb",
          200: "#f5f4f1",
          300: "#E7E7E7",
        },
        accent: "#F18F01",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
