module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: 'airbnb',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 强制使用单引号
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
