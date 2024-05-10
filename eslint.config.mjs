import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import globals from 'globals';
import path from 'path';
import prettier from 'eslint-plugin-prettier';
import { fileURLToPath } from 'url';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';
import sort from 'eslint-plugin-simple-import-sort'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  js.configs.recommended,
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  ...compat.extends('airbnb-typescript/base'),

  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
      'unused-imports': unusedImports,
      import: importPlugin,
      'simple-import-sort': sort,
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: path.join(__dirname, `./tsconfig.json`),
        ecmaVersion: 'latest',
        sourceType: 'module',
        // project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      ...typescriptEslint.configs.rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'no-duplicate-imports': 'error',
      'unused-imports/no-unused-imports': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/no-duplicates': 'error',

      // ...prettier.configs.rules,
    },
  },
  ...compat.extends('prettier'),
  ...compat.extends('plugin:prettier/recommended'),
];
