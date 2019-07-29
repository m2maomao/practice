const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode:'development',
  entry:'./src/index.js',
  devServer:{
    port:3000,
    open:true,
    contentBase:'./dist'
  },
  module:{
    noParse:/jquery/,// 不去解析jquery的依赖关系
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/, // 排除
        include:path.resolve('src'), // 包含
        use:{
          loader:'babel-loader',
          options:{
            presets:[
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new webpack.DllReferencePlugin({
      manifest:path.resolve(__dirname,'dist','mainfest.json')
    }),
    new webpack.IgnorePlugin(/\.\/locale/,/moment/),
    new htmlWebpackPlugin({
      template:'./public/index.html'
    })
  ]
}