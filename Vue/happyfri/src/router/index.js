import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Item from '@/page/item'
import Score from '@/page/score'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: '', component: Home },
    { path: '/item', name: 'Item', component: Item },
    { path: '/score', name: 'Score', component: Score }
  ]
})
