/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-bg": "#1E1E1E",
        "light-gray-bg": "#353535",
        "active-gray-bg": "#454545",
      },
      fontFamily: {
        quicksand: ["Quicksand"],
      },
    },
  },
  plugins: [],
};
