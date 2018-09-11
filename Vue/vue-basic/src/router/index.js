import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bind from '@/components/Bind'
import Condition from '@/components/Condition'
import Vfor from '@/components/Vfor'
import Vmodel from '@/components/Vmodel'
import Von from '@/components/Von'
import Vtext from '@/components/Vtext'
import Directive from '@/components/Directive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bind',
      name: 'bind',
      component: Bind
    },
    {
      path: '/condition',
      name: 'condition',
      component: Condition
    },
    {
      path: '/vfor',
      name: 'vfor',
      component: Vfor
    },
    {
      path: '/vmodel',
      name: 'vmodel',
      component: Vmodel
    },
    {
      path: '/von',
      name: 'von',
      component: Von
    },
    {
      path: '/vtext',
      name: 'vtext',
      component: Vtext
    },
    {
      path: '/directive',
      name: 'directive',
      component: Directive
    }
  ]
})
