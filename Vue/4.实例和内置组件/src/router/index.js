import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/example1',
      name: 'Example1',
      component: resolve => require(['@/components/Example1'], resolve)
    },
    {
      path: '/example2',
      name: 'Example2',
      component: resolve => require(['@/components/Example2'], resolve)
    }
  ]
})
