
// let声明的变量，只在let命令所在的代码块内有效
/*  {
    let a = 10;
    var b = 1;
  }
  console.log(a,b);*/


// for循环的计数器，就很合适使用let命令
/*var a = [];
for(var i=0;i<10;i++) {
  a[i] = function(){
    console.log(i);
  };
}
a[6]();//10*/

/*var a = [];
for(let i=0;i<10;i++) {
  a[i] = function(){
    console.log(i);
  };
}
a[6]();//6*/

// for循环：设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域
/*for(let i=0;i<3;i++) {
  let i = 'abc';
  console.log(i);
}*/
//abc
//abc
//abc


// let不存在变量提升，var命令会发生“变量提升”现象，即变量可在声明之前使用，值为undefined。
// 这种现象多多少少是有些奇怪的，按照一般逻辑，变量应该在声明语句之后才可以使用。
// 为了纠正这种现象，let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

// var的情况
/*console.log(foo);//值为undefined
var foo = 2;*/

// let的情况
/*console.log(bar);//报错ReferenceError
let bar = 2;*/


// 暂时性死区[temporal dead zone TDZ]
// 只要块级作用域内存在let命令，它所声明的变量就”绑定”（binding）这个区域，不再受外部影响

/*var tmp = 123;

if (true) {
  tmp = 'abc';
  let tmp
}
*/

/*if (true) {
  // tmp = 'abc';  //ReferenceError
  // console.log(tmp);
  
  let tmp;
  console.log(tmp);//undefined
  
  tmp = 123;
  console.log(tmp);//123
}*/


// 在没有let之前，typeof运算符是百分之百安全的，永远不会报错。现在不成立啦。
// 不允许重复声明
/*function func() {
  let a = 10;
  let a = 1;
}
func();//Uncaught SyntaxError:Identifier 'a' has already been declared*/

// function func(arg) {
//   let arg;//报错
// }
/*function func(arg) {
  {
    let arg;//不报错
  }
}
func();*/


// 块级作用域

/*var tmp = new Date();
function f() {
  console.log(tmp);
}

f();//Tue Apr 10 2018 17:14:39 GMT+0800 (CST)*/

/*var tmp = new Date();
function f() {
  console.log(tmp);
  if(false) {
    var tmp = 'abc';
  }
}
f();//undefined*/

/*var s = 'hello';

for(var i = 0; i< s.length;i++) {
  console.log(s[i]);//h e l l o
}
console.log(i);//5*/

/*function fn1() {
  let n = 5;
  if (true) {
    let n = 10;
    console.log(n,'内部');//10
  }
  console.log(n,'外部');
}
fn1();//5
*/

// 块级作用域的出现，市集上使得获得广泛应用的立即执行函数表达式（IIFE）不再必要了。
// IIFE写法↓↓↓
/*(function(){
  var tmp = ...;
  ...
}());
// 块级作用域写法↓↓↓
{
  let tmp = ...;
  ...
}*/


// 块级作用域与函数声明
// ES5规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域中声明
// ES6引入了块级作用域，明确允许在块级作用域之中声明函数。ES6规定，块级作用域之中，
// 函数声明语句的行为类似于let，在块级作用域之外不可引用。

/*function f() { console.log('I am outside!'); }

(function () {
  // 重复声明一次函数f
  function f() { console.log('I am inside!'); }
  if (true) {
  }

  f();//I am inside!
}());*/

/*
  - 允许在块级作用域内声明函数。
  - 函数声明类似于var，即会提升到全局作用域或函数作用域的头部
  - 同时，函数声明还会提升到所在的块级作用域的头部
  
  上面三条规则只对ES6的浏览器实现有效，其他环境的实现不用遵守，还是将块级作用域的函数声明当做let处理。
  根据这三条规则，在浏览器的ES6环境中，块级作用域内声明的函数，行为类似于var声明的变量
*/


// const命令
// const声明一个只读的常量。一旦声明，常量的值就不能改变

/*const PI = 3.1415;
PI = 3;//Uncaught TypeError:Assignment to constant variable.*/

// const 声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
//const的作用域与let命令相同：值在声明所在的块级作用域内有效。
/*if (true) {
  const MAX = 5;
}
Max //Uncaught ReferenceError:MAX is not defined*/
// const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
/*if (true) {
  console.log(MAX);//ReferenceError
  const MAX = 5;
}*/
// const 声明的常量，也与let一样不可重复声明

// 如果真的想将对象冻结，应该使用Object.freeze方法。

/*const foo = Object.freeze({});
// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;*/

// 上面代码中，常量foo指向一个冻结的对象，所以添加新属性不起作用，严格模式时还会报错。


// ES6声明变量的六种方法
// ES5只有两种声明变量的方法：var,function
// ES6增加了let,const,import,class

// 4.顶层对象的属性
// 顶层对象，在浏览器环境指的是window对象，在Node指的是global对象。ES5之中，顶层对象的属性与全局变量是等价的。

// window.a = 1;
// a//1
// a = 2;
// window.a //2

// ES6为了改变这一点，一方面规定，为了保持兼容性，var命令和function命令声明的全局变量，依旧是顶层对象的属性；
// 另一方面规定，let命令，const命令，class命令声明的全局变量，不属于顶层对象属性。
// 也就是说，从ES6开始，全局变量将逐步与顶层对象的属性脱钩。

/*var a = 1;
// 如果在Node的REPL环境，可以写成 global.a
// 或者采用通用方法，写成 this.a
window.a //1

let b = 1;
window.b //undefined*/



// global对象
/*
  ES5的顶层对象，本身也是一个问题，因为它在各种实现里面是不统一的。
  -浏览器里面，顶层对象是window，但Node和Web Worker没有window。
  -浏览器和Web Worker里面，self也指向顶层对象，但是Node 没有self。
  -Node里面，顶层对象是global，但其他环境都不支持。
*/






















   
