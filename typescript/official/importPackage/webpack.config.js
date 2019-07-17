const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry:'./index.ts',
  output:{
    filename: 'index.js',
    path: path.resolve(__dirname, './dist')
  },
  module:{
    rules: [
      {
        test:/\.ts$/,
        use:'ts-loader',
        exclude:/node_modules/
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      filename:'index.html',
      filepath:'./',
      inject:true
    })
  ]
}