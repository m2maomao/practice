const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry:'./index.ts',
  output:{
    path: path.resolve(__dirname,'./dist'),
    filename:'index.js'
  },
  module:{
    rules:[
      {
        test:/\.ts$/,
        use:'ts-loader',
        exclude:'/node_modules/'
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
    })
  ],
  devServer:{
    port: 9000,
    open: true
  }
}