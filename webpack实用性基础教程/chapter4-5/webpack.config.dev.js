const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//CommonJS grammar
module.exports = {
    entry:'./src/app.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Michael\'s Page',
            filename:'./index.html',
            template:'./src/index.html'
        })
    ],
    module:{
        rules:[{
            test:/\.js$/,
            use:[{
                loader:'babel-loader',
                options:{
                    presets:['react']
                }
            }]
        }]
    },
    devServer:{
        open:true,
        port:9000
    }
};