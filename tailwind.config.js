/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-white': "#c2d4f8",
        'yellow': '#ffc107',
        'nav-border': "rgba(194,212,248,.1)",
        'blue': "#0d6efd",
        'hover-blue': "#0b5ed7",
        'card-color': "#1f0757",
        'white2': "#c2d4f8",
        'dark1': "#8480ae",
        'light-blue': "rgba(13, 110, 253, 1)",
        'input-bg': '#1f0757',
        'input-border': 'rgba(194,212,248,.15)',
      }
    },
    container: {
      padding: {
        DEFAULT: "5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
