module.exports = {
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: ['airbnb-base', 'airbnb-typescript', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'no-param-reassign': 0,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
