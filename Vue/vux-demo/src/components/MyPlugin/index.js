const MyPlugin = {
  install (Vue, options) {
    console.log('install()')
    Vue.myGlobalMethod = function(){
      console.log('Vue函数对象方法myGlobalMethod()')
    }
    Vue.mixin({
      mounted(){
        console.log('Mounted...!')
      },
      methods:{
        test(){
          console.log('login mixin methods test')
          return 'mixin methods test'
        }
      }
    })
    Vue.prototype.$func = function(a,b) {
      return a+b
    }
  }
}
export default MyPlugin
// const MyPlugin
// MyPlugin.instasll = (Vue, options) => {
//   console.log('install()')
//   Vue.myGlobalMethod = function(){
//     console.log('Vue函数对象方法myGlobalMethod()')
//   }
//   Vue.mixin({
//     mounted(){
//       console.log('Mounted...!')
//     },
//     methods:{
//       test(){
//         console.log('login mixin methods test')
//         return 'mixin methods test'
//       }
//     }
//   })
//   Vue.prototype.$func = function(a,b) {
//     return a+b
//   }
// }
// export default MyPlugin