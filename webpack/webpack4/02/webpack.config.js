let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack= require('webpack');

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
      },
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
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
    }),
    new webpack.DefinePlugin({
      DEV:JSON.stringify('dev'),
      FLAG:'true',
      EXPRESSION:JSON.stringify('1+1')
    })
  ],
  resolve:{
    // 解析第三方包 common 路径
    modules: [path.resolve('node_modules')],
    // 别名
    // alias:{
    //   bootstrap:'bootstrap/dist/css/bootstrap.css'
    // },
    // 入口顺序，先找style再找main
    mainFields:['style','main'],
    //入口文件名字
    // mainFiles:[]
    //扩展名，顺序依次解析,在前台引入时可以自动加扩展名，前台不需要再写引入文件的扩展名。
    extensions:['.js','.css']
  },
  devServer:{
    // 1）把'/api'为前缀的全部设置代理访问{多数用于后端统一了接口，如接口前全部为'/api'}
    // proxy:{
    //   '/api':'http://localhost:3000'//配置了一个代理
    // }

    // 2) 把'/api'为前缀的转化为某个地址去请求，可以前端定义
    // proxy:{
    //   '/api':{
    //     target:'http://localhost:3000',
    //     pathRewrite:{
    //       '/api':''
    //     }
    //   }
    // },

    // 3) 单纯前端想mock数据
    before(app) {
      app.get('/user',(req,res) => {
        res.json({name:'Michael 911'})
      })
    },

    // 4)有服务端，不用代理来来处理，能不能在服务端中启动webpack，端口用服务端端口
    // 代码写在服务端，参见server.js
  }
}