
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import nextPlugin from '@next/eslint-plugin-next';

// Ensure `default` is used when importing the Next.js plugin
export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'next': nextPlugin.default, // <-- Use `.default` if necessary
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      'react/no-unescaped-entities': 'off'
    }
  }
];
