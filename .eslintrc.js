module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        "semi": ["error", "always"],
        "array-bracket-spacing": ["error", "never"],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "indent": ["error", 4],
        "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
        "object-curly-spacing": ["error", "always"],
        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }],
        "space-before-blocks": ["error", { 
            "functions": "always", 
            "keywords": "always", 
            "classes": "always" 
        }],
        "space-infix-ops": ["error", { 
            "int32Hint": false
        }],
        "@typescript-eslint/type-annotation-spacing": ["error", {
            "before": false,
            "after": true,
            "overrides": {
                "arrow": {
                    "before": true
                }
            }
        }]
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
