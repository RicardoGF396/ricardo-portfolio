import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    plugins: { import: importPlugin },
    settings: {
      // ✅ NO uses "typescript" aquí (es lo que revienta por el native binding)
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          // si usas "@/..." y tienes /src, esto ayuda:
          paths: ['src', '.'],
        },
      },
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error'] }],

      // ✅ Espaciados / líneas vacías (tu prueba de fuego)
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'padded-blocks': [
        'error',
        { blocks: 'never', classes: 'never', switches: 'never' },
      ],

      // Imports
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
      ],
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/enforces-shorthand': 'warn',
    },
  },

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules/**',
  ]),
]);
