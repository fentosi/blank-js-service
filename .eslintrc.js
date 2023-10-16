module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: "eslint:recommended",
  overrides: [
    {
      "files": ["*.spec.js"],
      "env": {
        "jest": true
      }
    }
  ],
  plugins: [
    'security',
    'no-only-tests'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': 2,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'camelcase': [2, { 'properties': 'never' }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, { 'before': false, 'after': true }],
    'comma-style': [2, 'last'],
    'consistent-this': [2, 'self'],
    'dot-notation': [2, { 'allowKeywords': true }],
    'eol-last': 2,
    'eqeqeq': [2, 'allow-null'],
    'func-style': [2, 'expression'],
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'linebreak-style': [2, 'unix'],
    'max-len': [2, 120, 2],
    'new-cap': [2, { 'newIsCap': true }],
    'no-empty': 2,
    'no-label-var': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-undef': [2, { 'typeof': true }],
    'no-unused-expressions': [2, { 'allowTernary': true }],
    'no-unused-vars': [2, { 'args': 'after-used' }],
    'no-with': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'never'],
    'quotes': [2, 'single', 'avoid-escape'],
    'require-yield': 2,
    'semi-spacing': 2,
    'keyword-spacing': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, { 'anonymous': 'never', 'named': 'never' }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    'strict': [2, 'global'],
    'yoda': 2,
    'security/detect-unsafe-regex': 1,
    'security/detect-buffer-noassert': 1,
    'security/detect-child-process': 1,
    'security/detect-eval-with-expression': 1,
    'security/detect-non-literal-regexp': 1,
    'security/detect-non-literal-require': 1,
    'security/detect-possible-timing-attacks': 1,
    'security/detect-pseudoRandomBytes': 1,
    'no-only-tests/no-only-tests': 2,
    "curly": ["error", "multi-line"],
    "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
    "semi": "off",
    'import/first': 0
  }
}
