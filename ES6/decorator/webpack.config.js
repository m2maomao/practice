var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry:{
        main:'./index.js'
    },
    output:{
        path:path.resolve(__dirname,'./dist/'),
        filename:'index.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'decorator-test',
            template:'index.html',
            filename:'index.html'
        })
    ]
}