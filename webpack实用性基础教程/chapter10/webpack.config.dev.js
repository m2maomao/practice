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
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['react']
                        }
                    }
                ]
            },
            //处理css文件中出现的url，会自动帮你引入里面要引入的模块
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            // file-loader
            // 1.把你的资源移动到输出目录
            // 2.返回最终引入资源的url
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:10000
                    }
                }]
            },
            {
                test:/\.(svg|ttf|eot|svg|woff|woff2)$/,
                use:['file-loader']
            }
        ]
    },
    devServer:{
        open:true,
        port:9000
    }
};