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
            // '[path]-[name]-[local]-[hash:base64:6]'
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            module:true,//是否开启模块化
                            localIdentName:'[name]-[local]_[hash:base64:6]'
                        }
                    }
                ],
                exclude:[
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common/')
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                include:[
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common/')
                ]
            },
            {
                test:/\.less$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            module:true,//是否开启模块化
                            localIdentName:'[name]-[local]_[hash:base64:6]'
                        }
                    },
                    'less-loader'
                ],
                exclude:[
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common/')
                ]
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader'],
                include:[
                    path.resolve(__dirname,'node_modules'),
                    path.resolve(__dirname,'src/common/')
                ]
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
            // webpack会忽略“?”问号，以及问号后面的参数都将被忽略
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