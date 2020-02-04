// 由于 webpack 是基于Node进行构建的，所以，webpack的配置文件中，任何合法的Node代码都是支持的
var path = require('path');
// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
// 如果需要配置插件，需要在导出的对象中，挂载一个 plugins 节点
var htmlWebpackPlugin = require('html-webpack-plugin')

// 新版本中vue-loader需要配置此项
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 当以命令行形式 运行 webpack 或 webpack-dev-server 的时候，工具会发现，我们并没有提供要打包的文件的入口和出口文件，此时，它会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个 配置对象，然后根据这个对象，进行打包构建
module.exports = {
  entry: path.join(__dirname, './src/main.js'), // 入口文件
  output: { // 指定输出选项
    path: path.join(__dirname, './dist'), // 输出路径
    filename: 'bundle.js' // 指定输出文件的名称
  },
  plugins: [ // 所有 webpack 插件的配置节点
    new htmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html' //设置生成的内存页面名称
    }),
    new VueLoaderPlugin()
  ],
  module: { // 配置所有第三方 loader 模块的
    rules: [ // 第三方模块的匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(jpg|gif|png|jpeg|bmp)$/, use: 'url-loader?limit=57241&name=[hash:8]-[name].[ext]' },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader'},
      // limit 给定的值，是图片的大小，单位是 byte，如果我们引用的图片，大于或等于给定的limit值，则不会被转为base64格式的字符串，如果图片小于给定的limit值，则会被转为base64的字符串
      { test: /\.js$/, use: 'babel-loader', exclude:/node_modules/},
      { test: /\.vue$/, use: 'vue-loader' }
    ]
  },
  resolve:{
    alias:{ // 修改 Vue 被导入时候的包的路径
      // 'vue$':'vue/dist/vue.js'
    }
  },
  mode: 'development'
}