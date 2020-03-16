// clean-webpack-plugin 自动删除webpack里的目录
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new CleanWebpackPlugin()
    ]
}