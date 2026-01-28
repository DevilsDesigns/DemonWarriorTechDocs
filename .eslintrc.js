module.exports = {
  extends: ['eslint:recommended'],
  plugins: [],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'no-undef': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    React: 'readonly',
  },
};
