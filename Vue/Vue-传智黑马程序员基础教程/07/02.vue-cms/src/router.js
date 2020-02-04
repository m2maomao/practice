import VueRouter from 'vue-router'

// 导入对应的路由组件

// 3.创建路由对象
var router = new VueRouter({
  routes: [ // 配置路由规则
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: resolve => require(['./components/tabbar/HomeContainer.vue'],resolve)
    },
    {
      path: '/member',
      component: resolve => require(['./components/tabbar/MemberContainer.vue'], resolve)
    },
    {
      path: '/shopcart',
      component: resolve => require(['./components/tabbar/ShopcartContainer.vue'], resolve)
    },
    {
      path: '/search',
      component: resolve => require(['./components/tabbar/SearchContainer.vue'], resolve)
    }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做：router-link-active
})
// 把路由对象暴露出去
export default router