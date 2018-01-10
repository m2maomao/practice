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
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer:{
        open:true,
        port:9000
    }
};