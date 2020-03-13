module.exports = {
    devtool: 'cheap-module-eval-source-map'
    // cheap:列信息，可可提高sourcemap生成效率
    // eval大幅提高持续构建效率，这对经常需要边改边调的前端开发而言，非常重要
    // 使用module可支持babel这种编译工具
}