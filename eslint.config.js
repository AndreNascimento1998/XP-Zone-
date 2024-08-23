import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'prettier'

export default tseslint.config({
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    ignores: ['dist'],
    languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
    },
    plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        prettier: prettier,
    },
    rules: {
        ...reactHooks.configs.recommended.rules,
        'react-hooks/exhaustive-deps': 'off',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'max-len': [
            'error',
            {
                code: 120,
                tabWidth: 4,
                ignorePattern: '^import.+|(class|style)=".+"',
                ignoreUrls: true,
                ignoreComments: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'no-global-assign': 'off',
        'no-extra-semi': 'off',
        'no-empty-interface': 'off',
        'no-empty-function': [
            'error',
            {
                allow: ['arrowFunctions', 'constructors', 'generatorFunctions'],
            },
        ],
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src']],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            },
        },
    },
})
