const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
    content: [
      './apps/**/*.{html,js}',
      './libs/**/*.{html,js}',
    ]
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    }
  }
};
