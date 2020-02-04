// 入口文件
import Vue from 'vue'
// 1.1导入路由的包
import VueRouter from 'vue-router'
// 1.2安装路由模块
Vue.use(VueRouter)
// 1.3 导入自己的 router.js路由模块
import router from './router.js'

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 每次刚进入网站，肯定会调用main.js 在刚调用的时候，先从本地存储中，把购物车的数据读出来，放到store中
var car = JSON.parse(localStorage.getItem('car') || '[]')

var store = new Vuex.Store({
  state: { // this.$store.state.***
    car: car // 将购物车中的商品的数据，用一个数组存储起来，在car数组中存储一些商品的对象，可以暂时将这个商品对象，设计成如下：
    // {id:商品的id, count: 要购买的数量, price:商品的单价，selected：是否被选中}
  },
  mutations:{ // this.$store.commit('方法名称','按需传递唯一的参数')
    addToCar(state, goodsinfo){
      // 点击加入购物车，把商品信息，保存到 store 中的 car 上
      // 分析：
      // 1.如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
      // 2.如果没有，则直接把商品数据，push到car数组里

      // 假设在购物车中没有找到对应的商品
      var flag = false

      state.car.some(item=> {
        if(item.id === goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      
      // 如果最终，循环完毕，得到的flag还是false，则把商品数据直接push到购物车中
      if(!flag) {
        state.car.push(goodsinfo)
      }

      // 当更新 car 之后，把 car 数组，存储到本地的localStorage中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo) {
      // 修改购物车中商品的数量值
      // 分析：
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count = parseInt(goodsInfo.count)
          return true
        }
      })
      // 当修改完商品的数量，把最新的购物车数据，保存到本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFromCar(state, id) {
      // 根据Id，从store中的购物车中删除对应的那条商品数据
      state.car.some((item, i)=>{
        if(item.id === id) {
          state.car.splice(i,1)
          return true
        }
      })
      // 将删除完毕后的，最新的购物车数据，同步到本地存储中
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsSelected(state, info) {
      state.car.some(item=> {
        if (parseInt(item.id) === parseInt(info.id)) {
          item.selected = info.selected
        }
      })
      // 把最新的所有购物车商品的状态保存到 store 中去
      localStorage.setItem('car', JSON.stringify(state.car))
      console.log(state.car)
    }
  },
  getters:{ // this.$store.getters.***
    // 相当于 计算属性，也相当于 filters
    getAllCount (state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected (state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsCountAndAmount(state) {
      var o = {
        count: 0, //勾选数量
        amount: 0 // 勾选的总价
      }
      state.car.forEach(item=> {
        if(item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})


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
  render:c => c(app),
  store // 挂载 store 状态管理对象
})