/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3faf6",
          100: "#dcf8ea",
          500: "#10b981",
          700: "#047857"
        }
      }
    }
  },
  plugins: [],
}
