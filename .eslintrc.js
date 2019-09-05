module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-confusing-v-for-v-if': 'warn',
    'vue/attributes-order': 'warn',
    'vue/order-in-components': 'warn',
    'vue/this-in-template': 'warn',
    semi: ['error', 'always'],
    'vue/script-indent': ['warn', 2, {
      baseIndent: 0
    }]
  },
  plugins: [
    'vue'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
