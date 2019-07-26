let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode:'production',
  entry:{home:'./src/index.js'},
  module:{
    rules:[
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env']
          }
        }
      }
    ]
  },
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html',
      filename:'home.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {from:'./doc', to:'./doc'}
    ]),
    new webpack.BannerPlugin('make 2019 by michael')
  ]
}