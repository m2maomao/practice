const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    
    // app.use(createProxyMiddleware('/api/**/*.action', {
    //     target: 'http://localhost:4000',
    //     pathRewrite(path) {
    //         return path.replace('/api','/').replace('.action', '.json')
    //     }
    // }))

    // 转发请求，直接在本项目执行npm run server
    app.use(createProxyMiddleware('/api', {
        target: 'http://localhost:4000',
        pathRewrite(path) {
            return path.replace('/api','/').replace('.action', '.json')
        }
    }))

    // 转发请求，需要打开ts-express项目执行npm run watch
    // app.use(createProxyMiddleware('/api', {
    //     target: 'http://localhost:4001'
    // }))
}