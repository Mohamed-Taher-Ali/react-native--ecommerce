/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary:'#c3e703',
      secondary: '#c0c4c4',
      
      background: '#878d91',
      surface: '#f0f1f2',
      icon: '#96d1c7',
      white: '#ffffff',
      black: '#000000',

      red: '#ff6d6d'
    }
  },
  plugins: [],
}

