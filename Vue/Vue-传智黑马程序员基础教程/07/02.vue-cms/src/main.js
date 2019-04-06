// 入口文件
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由模块
Vue.use(VueRouter)
// 1.3 导入自己的 router.js路由模块
import router from './router.js'

// 导入 MUI 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

// 导入 App 根组件
import app from './App.vue'

var vm = new Vue({
  el:'#app',
  router, // 1.4 挂载路由对象到 VM 实例上
  render:c => c(app)
})