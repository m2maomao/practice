import Vue from 'vue'
// 1.导入 vue-router 包
import VueRouter from 'vue-router'
// 2.手动安装 VueRouter
Vue.use(VueRouter)

// 导入 bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

// 导入 MUI 的样式表，和Bootstrap用法没有差别
import './lib/mui/css/mui.min.css'


// 导入所有的 MintUI 组件
// 导入 Mint-UI
// import MintUI from 'mint-ui' //把所有的组件都导入进来
// // 这里可以省略 node_modules 这一层目录
// import 'mint-ui/lib/style.css'
// // 将 MintUI 安装到 Vue 中
// Vue.use(MintUI) // 把所有的组件注册为全局的组件

// 按需导入 Mint-UI组件
import { Button } from 'mint-ui'
// 使用 Vue.component 注册按钮组件
Vue.component(Button.name, Button)



// 导入 app 组件
import app from './App.vue'

// 导入自定义路由模块
import router from './router.js'

var vm = new Vue({
  el:'#app',
  render: c => c(app), // 会把el指定的容器中所有的内容清空覆盖，所以不要把路由的router-view和router-link直接写到 el 所控制的元素中
  router // 4.将路由对象挂载到 vm 上
})

// 注意：App 这个组件，是通过 VM 实例的 render 函数，渲染出来的，render函数如果要渲染组件，渲染出来的组件，只能放到 el: '#app' 所指定的元素中；
// Account和GoodsList组件，是通过路由匹配监听到的，所以这两个组件只能展示到属于路由的 router-view 中去