/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        lg: "1200px",
        lg1: "940px",
      },
    },
  },
  plugins: [],
};
