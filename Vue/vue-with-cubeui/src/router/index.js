import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/pages/Button'
import Toolbar from '@/pages/Toolbar'
import Tabbar from '@/pages/Tabbar'
import Checkbox from '@/pages/form/Checkbox'
import Checkboxgroup from '@/pages/form/Checkboxgroup'
import Radio from '@/pages/form/Radio'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Button', component: Button },
    { path: '/toolbar', name: 'Toolbar', component: Toolbar },
    { path: '/tabbar', name: 'Tabbar', component: Tabbar },
    { path: '/checkbox', name: 'Checkbox', component: Checkbox },
    { path: '/checkboxgroup', name: 'Checkboxgroup', component: Checkboxgroup },
    { path: '/radio', name: 'Radio', component: Radio }
  ]
})
