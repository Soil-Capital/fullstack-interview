// backend/eslint.config.mjs
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  // Node globals so `process`, `global`, etc. don’t trip `no-undef`
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: {
        process: 'readonly',
        global: 'readonly',
      },
    },
  },

  // Don’t lint build artifacts
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
