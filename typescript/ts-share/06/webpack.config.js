const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpackDevServer = require('webpack-dev-server');

module.exports = {
  mode:'development',
  entry:'./index.ts',
  output:{
    filename:'index.js',
    path: path.resolve(__dirname,'dist')
  },
  devServer:{
    contentBase:'./dist',
    open: true
  },
  module:{
    rules:[
      {
        test:'/\.ts$/',
        use:'ts-loader',
        exclude:/node_modules/
      },
      {
        test:'/\.js$/',
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['env']
          }
        }

      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin()
  ]
}