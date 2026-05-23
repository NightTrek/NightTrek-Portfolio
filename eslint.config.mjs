import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwindcss from 'eslint-plugin-tailwindcss';
import unusedImports from 'eslint-plugin-unused-imports';

const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      'public/**',
      'src/components/LandmarkVisualization/**',
    ],
  },
  ...nextVitals,
  ...tailwindcss.configs['flat/recommended'],
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'import/prefer-default-export': 'off',
      'react/destructuring-assignment': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'tailwindcss/enforces-shorthand': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  prettier,
];

export default eslintConfig;
