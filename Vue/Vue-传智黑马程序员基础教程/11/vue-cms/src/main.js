// 入口文件
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由模块
Vue.use(VueRouter)
// 1.3 导入自己的 router.js路由模块
import router from './router.js'
// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat',function (dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)

// 全局设置请求的根路径
Vue.http.options.root = 'http://localhost:3000/'
// 全局设置 post 时候表单数据格式组织形式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true

// 导入 MUI 的样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 中的组件
/* import { Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
Vue.use(Lazyload) */
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 导入 App 根组件
import app from './App.vue'

// MOCK数据
import './mock.js'

var vm = new Vue({
  el:'#app',
  router, // 1.4 挂载路由对象到 VM 实例上
  render:c => c(app)
})