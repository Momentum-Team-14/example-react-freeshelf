module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'no-unused-expressions': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
      },
    },
  ],
}
