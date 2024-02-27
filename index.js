import js from '@eslint/js';

export default {
  rules: {
    ...js.configs.recommended.rules,
    'comma-dangle': ['warn', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],
    'eqeqeq': 'error',
    'no-console': 'warn',
    'no-constant-binary-expression': 'error',
    'no-fallthrough': 'warn',
    'no-prototype-builtins': 'warn',
    'no-shadow': 'warn',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': 'error',
    'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'semi': 'warn',
  },
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
};
