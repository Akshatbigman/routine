/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./project/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#1E1E1E",
        "active-bg": "#353535",
      },
    },
  },
  plugins: [],
};
