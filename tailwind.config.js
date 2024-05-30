/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        lg: "1200px",
        md: "960px",
        sm: "590px",
      },
    },
  },
  plugins: [],
};
