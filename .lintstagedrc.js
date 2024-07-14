const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,cjs,mjs,json,ts,tsx,css}': ['eslint --fix'],
  '*.{js,cjs,mjs,json,ts,tsx,css}': ['prettier --write'],
};
