import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      }
    },
    {
      path: '/Haha',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hi2,
        right: Hi1
      }
    },
    {
      path: '/Hi',
      component: Hi,
      children: [
        {
          path: '/',
          component: Hi
        }, {
          path: 'Hi1',
          name: 'Hi1',
          component: Hi1,
          alias: 'jspang'
        }, {
          path: 'Hi2',
          name: 'Hi2',
          component: Hi2
        }
      ]
    }, {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params
      // beforeEnter: (to, from, next) => {
      //   console.log('to:', to, 'from:', from)
      //   next(true) // 开关，是否跳转
      // }
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '*',
      component: Error
    }
  ]
})
