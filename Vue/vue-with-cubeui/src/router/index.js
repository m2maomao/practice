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
import Switch from '@/pages/form/Switch'
import Rate from '@/pages/form/Rate'
import Validator1 from '@/pages/form/validator/Validator1'
import Validator2 from '@/pages/form/validator/Validator2'
import Validator3 from '@/pages/form/validator/Validator3'
import Validator4 from '@/pages/form/validator/Validator4'
import Validator5 from '@/pages/form/validator/Validator5'

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
    { path: '/select', name: 'Select', component: Select },
    { path: '/switch', name: 'Switch', component: Switch },
    { path: '/rate', name: 'Rate', component: Rate },
    { path: '/validator1', name: 'Validator1', component: Validator1 },
    { path: '/validator2', name: 'Validator2', component: Validator2 },
    { path: '/validator3', name: 'Validator3', component: Validator3 },
    { path: '/validator4', name: 'Validator4', component: Validator4 },
    { path: '/validator5', name: 'Validator5', component: Validator5 }
  ]
})
