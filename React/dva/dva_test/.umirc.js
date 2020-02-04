export default {
  plugins: ['umi-plugin-dva'],
  proxy: {
    "/apis": {
      "target" : "https://cnodejs.org",
      "changeOrigin": true,
      "pathRewrite": {"^/apis":""}
    }
  }
}
