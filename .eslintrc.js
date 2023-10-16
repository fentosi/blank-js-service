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
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "curly": ["error", "multi-line"],
    "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
    "semi": "off",
    'import/first': 0
  }
}
