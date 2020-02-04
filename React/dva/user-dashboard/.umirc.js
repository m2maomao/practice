export default {
  plugins: ['umi-plugin-dva'],
  proxy: {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com",
      "changeOrigin": true,
      "pathRewrite": {"^/api":""}
    }
  }
}
