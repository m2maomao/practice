const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  mode: 'development',
  // 配置webpack-dev-server
  devServer: {
    host: process.env.HOST, //Default to 'localhost'
    port: 80 // Default to 8080
  },
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'Webpack demo'
    })
  ]
}