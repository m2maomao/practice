let webpack = require("webpack");
let path = require("path");

module.exports = {
  entry:'./index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:'babel-loader'
      }
    ]
  }
}