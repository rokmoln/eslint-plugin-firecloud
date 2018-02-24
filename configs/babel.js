module.exports = {
  plugins: [
    'babel'
  ],

  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module'
  },

  rules: {
    'babel/new-cap': 'error',
    'babel/object-curly-spacing': 'error',
    'babel/semi': 'error',
    'new-cap': 'off',
    'object-curly-spacing': 'off',
    semi: 'error' // why not off?
  }
};