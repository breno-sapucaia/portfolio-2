/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'plugin:storybook/recommended',
  ],
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use.
      version: 'detect',
    },
    // Tells eslint how to resolve imports
    'import/core-modules': ['react', 'react-dom/client'],
    'import/resolver': {
      typescript: {

      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};

module.exports = config