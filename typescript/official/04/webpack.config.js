const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use:'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename:'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: 'true'
    })
  ]
}