const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
  devServer: {
    port: 3000,
    progress: true,// 进度条
    contentBase: './dist',
    compress: true // 压缩
  },
  optimization: {
    minimizer:[
      // new TerserJSPlugin({}),
      new OptimizeCss({}) // 此选项为压缩css文件，仅当mode=“production”
    ]
  },
  mode: 'production',
  entry: './src/index.js',
  output:{
    filename:'bundle-[hash:8].js',
    path: path.resolve(__dirname,'dist')
  },
  module:{ // 模块
    rules:[// 数组
      // {
      //   test: require.resolve('jquery'),
      //   use:'expose-loader?$' // 暴露全局
      // },
      {// style-loader 把css插入到head标签中 // css-loader 负责解析 @import 这种语法
        test:/\.css$/,
        use:[
          // {
          //   loader:'style-loader',
          //   options:{
          //     insertAt:'top'
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test:/\.less$/,
        use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']
      },
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{// 用babel-loader需要把es6转es5
            presets:[
              '@babel/preset-env'
            ],
            plugins:[
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose" : true }]
            ]
          }
        },
        include:path.resolve(__dirname, 'src'),
        exclude:/node_modules/
      },
      // {
      //   enforce:'pre', // previous 前置执行
      //   test:/\.js$/,
      //   use:{
      //     loader:'eslint-loader'
      //   }
      // }
    ]
  },
  plugins:[//数组，存放所有webpack插件
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      minify:{
        removeAttributeQuotes:true,
        collapseWhitespace:true
      },
      hash: true
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
    new Webpack.ProvidePlugin({// 在每个模块中都注入$
      $:'jquery'
    }),
  ],
  externals: {// 忽略，不打包
    jquery: "jQuery"
  }
}