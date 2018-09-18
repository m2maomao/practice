const webpack = require('webpack')

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: ['./src/index.js', './src/object.js']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8888,
    open: true
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['index'],
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}
