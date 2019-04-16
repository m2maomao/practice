export default [
  {
    path: '/',
    name: 'HelloWorld',
    component: resolve => require(['@/components/HelloWorld'], resolve)
  },
  {
    path: '/count',
    name: 'Count',
    component: resolve => require(['@/components/Count'], resolve)
  },
  {
    path: '/practice',
    name: 'Practice',
    component: resolve => require(['@/components/Practice'], resolve)
  }
]
