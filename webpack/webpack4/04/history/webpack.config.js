const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const Happypack = require('happypack');

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
        use:'Happypack/loader?id=js' // 将对js进行多线程打包
      },
      {
        test:/\.css$/,
        use:'Happypack/loader?id=css'
      }
    ]
  },
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  plugins:[
    new Happypack({
      id:'css',
      use:['style-loader','css-loader']
    }),
    new Happypack({
      id:'js',
      use:[{
        loader:'babel-loader',
        options:{
          presets:[
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }]
    }),
    new webpack.DllReferencePlugin({
      manifest:path.resolve(__dirname,'dist','mainfest.json')
    }),
    new webpack.IgnorePlugin(/\.\/locale/,/moment/),
    new htmlWebpackPlugin({
      template:'./public/index.html'
    })
  ]
}