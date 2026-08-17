import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-config-prettier';

const compat = new FlatCompat();

export default [
  {
    ignores: ['dist/', 'node_modules/', 'webpack.*.js'],
  },
  ...compat.extends('airbnb-base'),
  prettier,
  {
    rules: {
      'no-console': 'off',
      'no-alert': 'off',
      'func-names': 'off',
      'no-param-reassign': 'off',
      'import/extensions': 'off',
      'prefer-arrow-callback': 'off',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'import/no-extraneous-dependencies': ['error', { devDependencies: ['eslint.config.mjs'] }],
    },
  },
];