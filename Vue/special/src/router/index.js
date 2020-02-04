import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/Index'
import Item from '@/view/Item'
import Score from '@/view/Score'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/item',
      name: 'item',
      component: Item
    },
    {
      path: '/scoreresult',
      name: 'scoreresult',
      component: Score
    }
  ]
})
