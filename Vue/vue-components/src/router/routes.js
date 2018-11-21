export default [
  {
    path: '/',
    name: 'ShowPrompPageIndex',
    component: resolve => require(['@/ShowPrompPage'], resolve)
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
  },
  {
    path: '/dynamic',
    name: 'Dynamic',
    component: resolve => require(['@/components/Dynamic'], resolve)
  },
  {
    path: '/slot1',
    name: 'Slot1',
    component: resolve => require(['@/components/Slot1'], resolve)
  },
  {
    path: '/slot2',
    name: 'Slot2',
    component: resolve => require(['@/components/Slot2'], resolve)
  },
  {
    path: '/slot3',
    name: 'Slot3',
    component: resolve => require(['@/components/Slot3'], resolve)
  },
  {
    path: '/showpromptpage',
    name: 'ShowPrompPage',
    component: resolve => require(['@/ShowPrompPage'], resolve)
  },
  {
    path: '*',
    name: '404',
    component: resolve => require(['@/components/NotFound'], resolve)
    // redirect: '/'
  }
]
