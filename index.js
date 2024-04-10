import js from '@eslint/js';

// will be removed by ESLint in a future version
// see: https://eslint.org/blog/2023/10/deprecating-formatting-rules/
const deprecated = {
  'comma-dangle': ['warn', {
    arrays: 'always-multiline',
    objects: 'always-multiline',
    imports: 'always-multiline',
    exports: 'always-multiline',
    functions: 'only-multiline',
  }],
  'curly': 'warn',
  'quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  'semi': 'warn',
};

export default {
  rules: {
    ...js.configs.recommended.rules,
    ...deprecated,
    'eqeqeq': 'error',
    'guard-for-in': 'warn',
    'no-bitwise': 'warn',
    'no-caller': 'warn',
    'no-console': 'warn',
    'no-constant-binary-expression': 'error',
    'no-eval': 'error',
    'no-extend-native': 'warn',
    'no-loop-func': 'warn',
    'no-proto': 'error',
    'no-sequences': 'warn',
    'no-script-url': 'error',
    'no-shadow': 'warn',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': 'error',
    'prefer-object-has-own': 'error',
  },
  linterOptions: {
    reportUnusedDisableDirectives: true,
  },
};
