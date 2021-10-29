const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  // for production
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        dark12: "#121212",
      }),
      colors: () => ({
        emerald: colors.emerald,
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
