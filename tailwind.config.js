/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm": ["DM Sans", "sans-serif"]
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      colors: {
        'fgreen': '#1db227'
      }
    },
  },
  plugins: [],
}
