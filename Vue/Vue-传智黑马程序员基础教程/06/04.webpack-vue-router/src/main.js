import Vue from 'vue'
// 1.导入 vue-router 包
import VueRouter from 'vue-router'
// 2.手动安装 VueRouter
Vue.use(VueRouter)
// 导入 app 组件
import app from './App.vue'
// 导入Account组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

// 3.创建路由对象
var router = new VueRouter({
  routes:[
    { path: '/account', component:account },
    { path: '/goodslist', component: goodslist }
  ]
})

var vm = new Vue({
  el:'#app',
  render: c => c(app), // 会把el指定的容器中所有的内容清空覆盖，所以不要把路由的router-view和router-link直接写到 el 所控制的元素中
  router // 4.将路由对象挂载到 vm 上
})

// 注意：App 这个组件，是通过 VM 实例的 render 函数，渲染出来的，render函数如果要渲染组件，渲染出来的组件，只能放到 el: '#app' 所指定的元素中；
// Account和GoodsList组件，是通过路由匹配监听到的，所以这两个组件只能展示到属于路由的 router-view 中去