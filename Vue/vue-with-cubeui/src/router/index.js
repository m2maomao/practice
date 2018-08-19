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
import Upload from '@/pages/Upload'
import Upload2 from '@/pages/Upload2'
import Upload3 from '@/pages/Upload3'
import Form1 from '@/pages/Form1'
// import Form2 from '@/pages/Form2'
import Popup from '@/pages/Popup'
import Popup2 from '@/pages/Popup2'
import Toast from '@/pages/Toast'
import Picker from '@/pages/Picker'
// import Cascadepicker from '@/pages/CascadePicker'
import CascadeAsyncPicker from '@/pages/CascadeAsyncPicker'
import DatePicker from '@/pages/DatePicker'
import TimePicker from '@/pages/TimePicker'
import SegmentPicker from '@/pages/SegmentPicker'
import Dialog from '@/pages/Dialog'
import ActionSheet from '@/pages/ActionSheet'
import Drawer from '@/pages/Drawer'

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
    { path: '/validator5', name: 'Validator5', component: Validator5 },
    { path: '/upload', name: 'Upload', component: Upload },
    { path: '/upload2', name: 'Upload2', component: Upload2 },
    { path: '/upload3', name: 'Upload3', component: Upload3 },
    { path: '/form1', name: 'Form1', component: Form1 },
    // { path: '/form2', name: 'Form2', components: Form2 },
    { path: '/popup', name: 'Popup', component: Popup },
    { path: '/popup2', name: 'Popup2', component: Popup2 },
    { path: '/toast', name: 'Toast', component: Toast },
    { path: '/picker', name: 'Picker', component: Picker },
    // { path: '/cascadepicker', name: 'Cascadepicker', component: Cascadepicker },
    {
      path: '/cascadeAsyncPicker',
      name: 'CascadeAsyncPicker',
      component: CascadeAsyncPicker
    },
    { path: '/datepicker', name: 'datePicker', component: DatePicker },
    { path: '/timepicker', name: 'timePicker', component: TimePicker },
    {
      path: '/segementpicker',
      name: 'SegmentPicker',
      component: SegmentPicker
    },
    { path: '/dialog', name: 'Dialog', component: Dialog },
    { path: '/actionsheet', name: 'ActionSheet', component: ActionSheet },
    { path: '/drawer', name: 'Drawer', component: Drawer }
  ]
})
