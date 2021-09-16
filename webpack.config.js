const patch = require('path')

module.exports = {
  entry: patch.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    patch: patch.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
