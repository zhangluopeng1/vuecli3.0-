module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: [0, 'always'],
    'space-before-function-paren': [0, 'never'],
    'no-trailing-spaces': 'off',
    'no-undef': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
