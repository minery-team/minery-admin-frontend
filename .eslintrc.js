const prettierConfig = require('./.prettierrc.js');

module.exports = {
  extends: 'next/core-web-vitals',
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'react',
    'react-hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.json'],
  },
  rules: {
    'react/display-name': 'off',
    'react/jsx-key': 'off',
    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
