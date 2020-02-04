const path = require('path')
// 启用热更新的第2步
const webpack = require('webpack')
// 导入在内存中生成 HTML 页面的插件：html-webpack-plugin
// 只要是插件都一定要放到 plugins 节点中去
// 这个插件的两个作用：
// 1.自动在内存中根据指定页面生成一个内存的页面
// 2.自动，把打包好的 bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin')
// 通过Node模块操作，向外面暴露一个配置对象
module.exports = {
  entry: path.join(__dirname, './src/main.js'),//打包文件
  output: {
    path: path.join(__dirname, './dist'),//打包好的文件存放地址
    filename: 'bundle.js'//打包好的文件名
  },
  devServer: { // 这是配置 dev-server 命令参数的第二种形式，相对来说这种方式麻烦一些
    open: true, // 自动打开浏览器
    port: 3000, // 设置启动时候的运行端口
    contentBase: 'src', // 指定托管的根目录
    hot: true //启用热更新
  },
  resolve:{
    extensions:[".js",".css"]
  },
  plugins: [ // 配置插件的节点
    new webpack.HotModuleReplacementPlugin(), //new 一个热更新的模块对象，这是启用热更新的第3步
    new htmlWebpackPlugin({ // 创建一个在内存中生成 HTML 页面的插件
      template: path.join(__dirname, './src/index.html'), // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
      filename: 'index.html' //指定生成的页面的名称
    })
  ],
  module: { // 这个节点，用于配置所有第三方模块加载器
    rules: [ // 所有第三方模块的 匹配规则
      {
        test: /\.css$/,
        use: [ // 从右至左处理
          'style-loader', 
          'css-loader'
        ] // 配置处理 .css 文件的第三方loader规则
      },
      {
        test:/\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader' // 配置处理 .less 文件的第三方 loader 规则
        ]
      },
      {
        test:/\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  mode: 'development' //设置mode
}

// 当我们在控制台，直接输入 webpack 命令的时候，webpack 做了以下几步：
// 1.首先，webpack 发现，我们并没有通过命令的形式，给它指定入口和出口
// 2.webpck 就会去项目的根目录中，查找一个叫做'webpack.config.js'的配置文件
// 3.当找到配置文件后，webpack 会去解析执行这个配置文件，当解析执行完配置文件后，就得到了配置文件中导出的配置对象。
// 4.当 webpack 拿到了配置对象后，就拿到了配置对象中指定的入口和出口，然后进行打包构建。