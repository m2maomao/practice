const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'lodash'
    ]
  },
  plugins: [
    new CleanWebpackPlugin({path: ['dist']}),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
  optimization: {
    splitChunks:{
      cacheGroups:{
        commons:{
          name:'commons',
          chunks:'initial',
          minChunks:2
        }
      }
    }
  },
  output:{
    filename:'[name].[chunkhash].js',
    path:path.resolve(__dirname,'dist')
  }
}