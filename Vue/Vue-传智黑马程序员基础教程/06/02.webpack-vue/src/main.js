// 如何在 webpack 构建的项目中，使用 Vue 进行开发

// 复习：在普通网页中如何使用vue
// 1.使用 script 标签，引入 vue 的包
// 2.在index.html页面中，创建一个id为app的div容器
// 3.通过 new Vue得到一个 vm 的实例

// 在 webpack 中尝试使用 Vue：
// 注意：在webpack中，使用 import Vue from 'vue' 导入的 Vue 构造函数，功能不完整，只提供了 runtime-only 的方式，并没有提供像网页中那样的使用方式
import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'
// 回顾：包的查找规则：
// 1.找项目根目录中有没有 node_modules 的文件夹
// 2.在node_modules 中根据包名，找对应的 vue 文件夹
// 3.在 vue 文件中，找一个叫做 package.json的包配置文件
// 4.在 package.json 文件中，查找一个 main 属性【main属性指定了这个包在被加载的时候的入口文件】

// var login = {
//   template:'<h1>这是login组件，是使用网页中形式创建出来的组件</h1>'
// }

// 1.导入 login 组件
import login from './login.vue'
// 默认，webpack无法打包.vue文件，需要安装相关的loader：
// cnpm i vue-loader vue-template-compiler -D
// 在配置文件中，新增loader配置项 { test: /\.vue$/, use:'vue-loader}

var vm = new Vue({
  el:'#app',
  data:{
    msg:'123'
  },
  // components: {
  //   login
  // }
  /* render: function(createElements) { // 在 webpack 中，如果想要通过 vue 把一个组件放到页面中去展示，vm 实例中的 render函数可以实现
    return createElements(login)
  } */
  render: c => c(login)
})


// 总结梳理：webpack 中如何使用 vue：
// 1.安装vue的包：cnpm i vue -S
// 2.由于在 webpack 中，推荐使用.vue这个组件模板文件定义组件，所以，需要安装能解析这种文件的 loader => cnpm i vue-loader vue-template-compiler -D
// 3.在 main.js 中，导入 vue模块 import Vue from 'vue'
// 4.定义一个.vue结尾的组件，其中，组件由三部分组成：template script style
// 5.使用 import login from './login.vue'导入这个组件
// 6.创建 vm 的实例 var vm = new Vue({el:'#app', render:c => c(login)})
// 7.在页面中创建一个 id 为 app的div元素，作为我们 vm 实例要控制的区域；

import m222, { title as title123, content} from './test.js'
console.log(m222)
console.log(title123 + ' --- ' + content)