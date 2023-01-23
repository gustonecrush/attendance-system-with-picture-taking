/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0A9F82",
        secondary: "#101939",
        background: "#EFF3F9",
        textPrimary: "#020B2A",
        textSecondary: "#A7A9BE",
        textTersier: "#A9ABBF",
      },
    },
  },
  plugins: [],
};
