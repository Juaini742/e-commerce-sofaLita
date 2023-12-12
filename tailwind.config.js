/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D91515",
        secondary: "#9D0101",
        warning: "#F5B40A",
      },
    },
  },
  plugins: [],
};
