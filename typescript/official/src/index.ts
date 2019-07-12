jQuery('#foo');
// 使用 declare let 定义的 jQuery 类型，允许修改这个全局变量
// jQuery = function(selector) {
//   return document.querySelector(selector);
// }

// 一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 const 而不是 var 或 let。
// 需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现：

jQuery(function() {
  alert('Dom Ready!');
});

var cat = new Animal('小花');