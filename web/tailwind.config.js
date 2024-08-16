/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Adds "Open Sans" as the default sans-serif font
      },
      colors: {
        primary: "#1565D8",
        dark: {
          hard: "#0D2436",
          soft: "#183B56",
        },
      },
    },
  },
  plugins: [],
};
