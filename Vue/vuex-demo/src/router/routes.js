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
  }
]
