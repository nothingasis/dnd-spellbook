module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
  },
  overrides: {
    files: ['*.js', '*.vue'],
    rules: {
      // Prettier wants no space before function paren
      'space-before-function-paren': 0,
      // Error on consoles during production, else turn off in development
      'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}