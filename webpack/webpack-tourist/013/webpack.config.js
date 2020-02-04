const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        // use:[
        //   'style-loader',
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       modules: true,
        //     },
        //   },
        // ],
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
  ],
};