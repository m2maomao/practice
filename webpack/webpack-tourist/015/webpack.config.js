const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
};

const plugin = new ExtractTextWebpackPlugin({
  filename:'[name].css',
  ignoreOrder: true,
});

module.exports = {
  mode: 'development',
  // 配置webpack-dev-server
  devServer: {
    host: process.env.HOST, //Default to 'localhost'
    port: 80, // Default to 8080
  },
  // 配置文件超出限制大小的警告
  performance: {
    hints: 'warning', // 'error'
    maxEntrypointSize: 100000, // bytes
    maxAssetSize: 450000, // bytes
  },
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: plugin.extract({
          use: {
            loader:'css-loader',
            options: {
              modules: true,
            },
          },
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:'Webpack demo',
    }),
    plugin,
    new BabiliPlugin(),
  ],
};