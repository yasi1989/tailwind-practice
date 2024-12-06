/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#050505",
        "selected-text": "#A3A3FF",
        "theme": "#5c318c",
      }
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}

