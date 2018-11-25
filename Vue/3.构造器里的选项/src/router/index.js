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
    },
    {
      path: '/methods',
      name: 'Methods',
      component: resolve => require(['@/components/Methods'], resolve)
    }, {
      path: '/watch',
      name: 'Watch',
      component: resolve => require(['@/components/Watch'], resolve)
    }, {
      path: '/mixins',
      name: 'Mixins',
      component: resolve => require(['@/components/Mixins'], resolve)
    }, {
      path: '/extends',
      name: 'Extends',
      component: resolve => require(['@/components/Extends'], resolve)
    }
  ]
})
