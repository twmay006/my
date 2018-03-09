var path = require('path')
var config = require('../config')

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader
      }
    ]
  }
}
