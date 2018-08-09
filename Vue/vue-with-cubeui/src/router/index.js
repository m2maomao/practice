import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/pages/Button'
import Toolbar from '@/pages/Toolbar'
import Tabbar from '@/pages/Tabbar'
import Checkbox from '@/pages/form/Checkbox'
import Checkboxgroup from '@/pages/form/Checkboxgroup'
import Radio from '@/pages/form/Radio'
import Input from '@/pages/form/Input'
import Textarea from '@/pages/form/Textarea'
import Hello from '@/components/Hello'
import Select from '@/pages/form/Select'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Button', component: Button },
    { path: '/toolbar', name: 'Toolbar', component: Toolbar },
    { path: '/tabbar', name: 'Tabbar', component: Tabbar },
    { path: '/checkbox', name: 'Checkbox', component: Checkbox },
    { path: '/checkboxgroup', name: 'Checkboxgroup', component: Checkboxgroup },
    { path: '/radio', name: 'Radio', component: Radio },
    { path: '/input', name: 'Input', component: Input },
    { path: '/textarea', name: 'Textarea', component: Textarea },
    { path: '/hello', name: 'Hello', component: Hello },
    { path: '/select', name: 'Select', component: Select }
  ]
})
