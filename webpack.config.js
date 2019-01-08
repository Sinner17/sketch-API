const path = require('path')

module.exports = {
  entry: "./script/src/index.js",
  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js'
  },
  module: {

  }
}