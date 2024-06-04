/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "540px",
      md: "720px",
      lg: "920px",
      xl: "1040px",
    },
    extend: {},
  },
  plugins: [],
};
