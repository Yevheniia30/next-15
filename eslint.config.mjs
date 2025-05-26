import tseslint from '@typescript-eslint/eslint-plugin';
import tslintParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

const jsRules = {
    quotes: ['error', 'double', {avoidEscape: true, allowTemplateLiterals: false}],
    // 'import/no-cycle': 'warn',
    'class-methods-use-this': 'off',
    // 'import/prefer-default-export': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    'generator-star-spacing': 'off',
    'no-prototype-builtins': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-undef': 'warn',
    'no-case-declarations': 'warn',
    'no-console': 'warn',
};

export default [
    {
        ignores: ['node_modules/**', '.next/**', 'dist/**', 'src/admin/baseComponents/**'],
        // ignores: ['node_modules/**', '.next/**', 'dist/**'],
    },
    // js files
    {
        files: ['**/*.{mjs,cjs,js,jsx,tsx,ts}'],
        languageOptions: {
            parser: tslintParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                RequestInit: 'readonly',
            },
            // ecmascriptVersion, and sourceType, default is right
        },
        plugins: {
            prettier: prettierPlugin,
            '@typescript-eslint': tseslint,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
        },
        rules: {
            ...jsRules,
            ...prettierPlugin.configs.recommended.rules,
            ...prettierConfig.rules,
            '@typescript-eslint/no-explicit-any': 'warn',
            'no-console': ['error', {allow: ['error', 'info']}],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    },
];
