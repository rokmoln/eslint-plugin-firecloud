// NOTE: these rules turn off IDE indicators

module.exports = {
  rules: {
    'max-len-2/max-len-2': 'off',
    'max-params': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: {
        multiline: true,
        minProperties: 0, // aka disable
        consistent: true
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 0, // aka disable
        consistent: true
      }
    }]
  }
}
