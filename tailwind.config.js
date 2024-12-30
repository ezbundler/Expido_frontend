/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: 'class',
  theme: {
    extend: {borderRadius: {
      'custom': '48% 52% 18% 82% / 52% 72% 28% 48%',
    }},
  },
  plugins: [],
}

