// 打包引入图片
import dream from './dream.jpg';
let img = new Image();
// img.src = './dream.jpg';
img.src = dream;
document.body.appendChild(img);

/* eslint-disable no-useless-catch */
// import $ from 'expose-loader?$!jquery';
// import $ from 'jquery';
// expose-loader 暴露全局的loader 内联的loader
// 'pre' 前面执行的loader  normal 普通的loader 后置loader 'post'
// console.log($);

/* 引入jquery的方式
- expose-loader 暴露到window上
- provicePlugin给每个模块提供一个$
- 引入不打包 */

// console.log('-------------')

// console.log(window.$);
// let str = require('./a');
require('./index.css');
require('./index.less');
// console.log('hello', str);

// let fn = () => {
//   console.log('执行es6箭头函数 =>')
// }
// fn();

// @log
// class A {
//   name = 'michael'
// }

// let a = new A();
// console.log(a.name);

// function log(target) {
//   console.log(target)
// }