// postcss.config.js

module.exports = {
  plugins: [
    require('@tailwindcss/postcss'), // <<< This is the new, correct way
    require('autoprefixer'),
  ],
};