module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {},
};
