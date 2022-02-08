module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['warn', 'single'],
    avoidEscape: 0,
    'max-len': ['error', { code: 140 }],
    'no-underscore-dangle': 0,
    'no-restricted-syntax': ['error', 'ForInStatement'],
    'linebreak-style': 0,
  },
};
