// 这个 main.js 是我们项目的JS入口文件

// 1.导入 Jquery
// import *** from *** 是ES6导入其他模块的方式
// 由于ES6的代码，太高级了，浏览器解析不了，所以，这一行会报错
import $ from 'jquery' 
//此种是在node中导入的方式
// const $ = require('jquery)

$(function(){
  $('li:odd').css('backgroundColor','lightblue')
  $('li:even').css('backgroundColor', function(){
    return '#' + 'D97634'
  })
})

// 经过刚才的演示，webpack 可以做以下：
// 1. webpack 能够处理 JS 文件的互相依赖关系
// 2. webpack 能够处理JS的兼容问题，把高级的浏览器不识别的语法转为低级的，浏览器能正常识别的语法。

// 命令：webpack 要打包的文件路路径 打包好的输出的文件的路径