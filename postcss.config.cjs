/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  plugins: [
    require('tailwindcss')({
      config: path.join(__dirname, 'tailwind.config.cjs'),
    }),
    require('postcss-nested'),
    require('autoprefixer')({}),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};
