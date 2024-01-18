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
          DEFAULT: "#27187E",
          soft: "#758BFD",
          dark: "",
        },
        background: {
          DEFAULT: "##F1F2F6",
          200: "#E6E8EF",
          300: "#DADDE7",
        },
        accent: "#FF8600",
        text: "#333333",
      },
    },
  },
  plugins: [],
};
