const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  optimization: {
    splitChunks: {// 分割代码块，多页才需要
      cacheGroups: { // 缓存组
        commons: { // 公共模块
          minSize:0,
          minChunks:2, // 至少2次以上引用
          chunks: "initial",
          // name: "commons",
        },
        //第三方
        vendor:{
          priority:1,//权重，先抽离第三方模块，抽离完再抽离公共的
          test:/node_modules/, // 抽离出来
          minSize:0,
          minChunks:2, // 至少2次以上引用
          chunks: "initial",
        }
      }
    }
  },
  mode:'production',
  entry:{
    index:'./src/index.js',
    other:'./src/other.js'
  },
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
    // new webpack.DllReferencePlugin({
    //   manifest:path.resolve(__dirname,'dist','mainfest.json')
    // }),
    new webpack.IgnorePlugin(/\.\/locale/,/moment/),
    new htmlWebpackPlugin({
      template:'./public/index.html'
    })
  ]
}