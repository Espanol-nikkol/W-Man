module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // eslint-plugin-prettier by default looks into .prettierrc and "merge" rules with eslint
    // however we must explicitly set level of warning
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
