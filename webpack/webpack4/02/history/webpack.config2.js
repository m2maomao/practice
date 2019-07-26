let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'production',
  // 多入口
  entry:{
    home:'./src/index.js'
  },
  // 源码映射 会单独生成一个sourcemap文件
  devtool:'source-map',// 增加映射文件 可以帮我们调试源代码
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
      filename:'index.html'
    })
  ],
  watch:true,
  watchOptions:{
    poll:1000, //每秒 问我1000此
    aggregateTimeout:500,//防抖 我一直输入代码
    ignored:/node_modules/ // 不需要监控哪个文件
  }
}