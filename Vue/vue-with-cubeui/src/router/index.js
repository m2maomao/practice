import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/pages/Button'
import Toolbar from '@/pages/Toolbar'
import Tabbar from '@/pages/Tabbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Button',
      component: Button
    },
    {
      path: '/toolbar',
      name: 'Toolbar',
      component: Toolbar
    },
    {
      path: '/tabbar',
      name: 'Tabbar',
      component: Tabbar
    }
  ]
})
