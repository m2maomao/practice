const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

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
  // 配置source-map
  devtool: 'source-map',
  // 配置文件超出限制大小的警告
  performance: {
    hints: 'warning', // 'error'
    maxEntrypointSize: 500000, // bytes
    maxAssetSize: 450000, // bytes
  },
  entry: {
    // app: PATHS.app,
    index: './app/index.js',
    about: './app/about.js',
    vendor: ['react'],// 供应商
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
    // new HtmlWebpackPlugin({
    //   title:'Webpack demo',
    // }),
    plugin,
    // 分离打包项目代码与组件代码[webpack4已废弃]
    // new webpack.optimize.CommonsChunkPlugin({
    //   name:'vendor',
    // }),
  ],
  // 抽取公共的代码
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
  },
};