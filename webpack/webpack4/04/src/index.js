// let btn = document.createElement('button');
// btn.innerHTML = '按钮'

// //vue,react 的懒加载均是通过这种方式实现的
// btn.addEventListener('click',function() {
//   console.log('click')
//   // es6 草案中的语法 jsonp实现动态加载文件
//   import('./source.js').then(data=> {
//     console.log(data.default);
//   })
// })

// document.body.appendChild(btn);
import str from './source'
console.log(str,1233);

if(module.hot) {
  module.hot.accept('./source',() => {
    console.log('文件更新了。')
  })
}