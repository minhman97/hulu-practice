/** @type {import('tailwindcss').Config} */
module.exports = {
  module: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // media or class
  theme: {
    extend: {
      screens: {
        "3xl":"2000px",
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}