module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
