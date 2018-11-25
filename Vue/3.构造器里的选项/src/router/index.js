import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/propsdata',
      name: 'PropsData',
      component: resolve => require(['@/components/PropsData'], resolve)
    },
    {
      path: '/computed',
      name: 'Computed',
      component: resolve => require(['@/components/Computed'], resolve)
    }
  ]
})
