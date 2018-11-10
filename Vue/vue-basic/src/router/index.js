import Vue from 'vue'
import Router from 'vue-router'
import Bind from '@/components/Bind'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: resolve => require(['@/components/HelloWorld'], resolve) // 懒加载，不会打包到主app.js文件中
  },
  {
    path: '/bind',
    component: Bind // 将打包到主app.js文件中
  },
  {
    path: '/condition',
    // component: Condition //将打包道主app.js文件中
    component: resolve => require(['@/components/Condition'], resolve)
  },
  {
    path: '/vfor',
    component: resolve => require(['@/components/Vfor'], resolve)
  },
  {
    path: '/vmodel',
    component: resolve => require(['@/components/Vmodel'], resolve)
  },
  {
    path: '/von',
    component: resolve => require(['@/components/Von'], resolve)
  },
  {
    path: '/vtext',
    component: resolve => require(['@/components/Vtext'], resolve)
  },
  {
    path: '/directive',
    component: resolve => require(['@/components/Directive'], resolve)
  },
  {
    path: '/extend',
    component: resolve => require(['@/components/Extend'], resolve)
  },
  {
    path: '/set',
    component: resolve => require(['@/components/Set'], resolve)
  },
  {
    path: '/lifecycle',
    component: resolve => require(['@/components/LifeCycle'], resolve)
  },
  {
    path: '/template',
    component: resolve => require(['@/components/Template'], resolve)
  },
  {
    path: '/component',
    component: resolve => require(['@/components/Component'], resolve)
  },
  {
    path: '/componentparent',
    component: resolve => require(['@/components/ComponentParent'], resolve)
  }
]

const router = new Router({
  routes
})

export default router
