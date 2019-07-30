const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode:'development',
  entry:'./src/index.js',
  devServer:{
    hot: true,//启用热更新
    port:3000,
    open:true,
    contentBase:'./dist',
    hotOnly: true,
  },
  module:{
    noParse:/jquery/,// 不去解析jquery的依赖关系
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/, // 排除
        include:path.resolve('src'), // 包含
        use:[{
          loader:'babel-loader',
          options:{
            presets:[
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }] 
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new webpack.IgnorePlugin(/\.\/locale/,/moment/),
    new htmlWebpackPlugin({
      template:'./public/index.html'
    }),
    // new webpack.NamedModulesPlugin(),  //打印更新的模块路径
    new webpack.HotModuleReplacementPlugin() // 热更新插件
  ]
}