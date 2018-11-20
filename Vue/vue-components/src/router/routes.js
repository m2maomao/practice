export default [
  {
    path: '/',
    name: 'HelloWorld',
    component: resolve => require(['@/components/HelloWorld'], resolve)
  },
  {
    path: '/vmodel',
    name: 'Vmodel',
    component: resolve => require(['@/components/Vmodel'], resolve)
  },
  {
    path: '/hello',
    name: 'Hello',
    component: resolve => require(['@/components/Hello'], resolve)
  }
]
