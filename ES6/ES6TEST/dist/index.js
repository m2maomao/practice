/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _temp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temp */ \"./src/temp.js\");\n// var a = 1;\n// {\n//   var a = 2\n// }\n// {\n//   let a = 3\n//   console.log(a)\n// }\n\n// let [a,b,c] = [0,1,2]\n// console.log(a)\n\n// [4]\n// function michael(...arg){\n//   console.log(arg[0])\n//   console.log(arg[1])\n//   console.log(arg[2])\n//   console.log(arg[3])\n// }\n// michael(1,2,3)\n// let arr1 = ['www','michael','com']\n// // let arr2 = arr1\n// let arr2 = [...arr1]\n\n// console.log(arr2)\n\n// arr2.push('Michael')\n// console.log(arr2)\n// console.log(arr1)\n\n// function a(first,...arg) {\n//   for(let val of arg) {\n//     console.log(val)\n//   }\n// }\n// a(0,1,2,3,4,5,6,7)\n\n// let name = \"Michael\"\n// let words = \"Welcome to you, named \"+name\n// let b = `<br />Welcome to you, named ${name}`\n// document.write(words)\n// document.write(b)\n// document.write('michael<br />'.repeat(20))\n\n// 7\n// JSON数组格式\n// let json = {\n//   '0':'michael',\n//   '1':'aaa',\n//   '2':'bbb',\n//   length:3\n// }\n// console.log(json)\n\n// let arr = Array.from(json)\n// console.log(arr);\n// console.log(json)\n\n// let arr = Array.of(3,4,5,6)\n// console.log(arr)\n\n// let arr2 = Array.of('大家庭','Michael','重庆斯威')\n// console.log(arr2)\n\n// let arr=[1,2,3,4,5,6,7,8,9];\n// console.log(arr.find(function(value,index,arr){\n//     return value > 5;\n// }))\n\n// var json1 = '{\"name\":\"GDT\",\"age\":\"23\",\"University\":\"GDUT\"}'\n// var json2 = {\"name\":\"GDT\",\"age\":\"23\",\"University\":\"GDUT\"}\n\n// console.log('json1 type:',typeof(json1),json1) //json1 type:string {\"name\":\"GDT\",\"age\":\"23\",\"University\":\"GDUT\"}\n// console.log('json2 type:',typeof(json2),json2) //json2 type:object {\"name\":\"GDT\",\"age\":\"23\",\"University\":\"GDUT\"}\n\n// // 1.JSON.parse()函数 [string转JSON]\n// // 将JSON字符串转换为json对象\n// console.log(JSON.parse(json1)) // object {\"name\":\"GDT\",\"age\":\"23\",\"University\":\"GDUT\"}\n\n// // 2.JSON.stringify()函数 [JSON转string]\n// console.log(JSON.stringify(json2)) // string {\"name\":\"GDT\",\"age\":\"23\",\"University\":\"GDUT\"}\n\n// //3.eval()函数 [计算某个字符串，并执行其中的javascript表达式或要执行的语句]\n// // eval(string)\n// eval(\"x=2;y=3;document.write(x*y)\") //6\n\n// //使用eval()函数也可以将JSON字符串解析为对象，这个功能能完成JSON.parse()的功能，但是也有不一样的地方：\n// var info1 = JSON.parse(json1)\n// console.log('info1',info1) //object\n// var info2 = eval('('+json1+')')\n// console.log('info2',info2) //object\n\n// // eval()在string转json时需要用一对圆括号将字符串包起来：\n// // 归结于eval本身的问题，由于json是以“{}”的方式来开始及结束的，在JS中，它会被当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。\n\n// alert(eval(\"{}\")); //undefined\n// alert(eval('('+'{}'+')')); //[object Object]\n\n// let arr = [0,1,2,3,4,5,6,7,8,9];\n// arr.fill('Michael',2,5);\n// console.log(arr);\n//0,1,\"Michael\",\"Michael\",\"Michael\",5,6,7,8,9\n\n// let arr = [\"www\",\"Michael\",\".com\"];\n// // for([index,val] of arr.entries()) {\n// //   console.log(index+':'+val)\n// // }\n\n// let list = arr.entries();\n// console.log(list);\n// console.log(list.next().value);\n// console.log('---------------');\n// console.log(list.next().value);\n// console.log('***************');\n// console.log(list.next().value);\n// console.log('666666666666666');\n\n// function add (a=1,b=1) {\n//   // 'use strict'\n//   if(a === 0) {\n//     //抛出异常\n//     throw new Error('A is Error');\n//   }\n//   return a+b\n// }\n// console.log(add.length);//获取必须传递的个数\n\n// 箭头函数内不允许使用new，构造函数\n// var add = (a,b) => {\n//   console.log('JS')\n//   return a+b\n// }\n// console.log(add(1,2));\n\n// 10、对象的函数解构\n// let json = {\n//   a:\"1\",\n//   c:\"2\"\n// }\n// function fun({a,b='Michael'}){\n//   console.log(a,b)\n// }\n// fun(json)\n\n// let arr = ['1','2','3'];\n// function fun(a,b,c){\n//   console.log(a,b,c)\n// }\n// fun(...arr)\n\n// in的用法\n// let obj = {\n//   a:'michael',\n//   b:'yuanxiao'\n// }\n// console.log('a' in obj)\n\n// let arr = ['maomao',,,];\n// console.log(1 in arr)\n\n// let arr = ['michael','zhang','blog'];\n// // arr.forEach((val,index)=>console.log(index,val))\n// // arr.filter(x => console.log(x))\n// // arr.some(x => console.log(x))\n// // console.log(arr.map(x=>'web'))\n// // console.log(arr)\n// console.log(arr.toString());\n// console.log(arr.join('---'));\n\n// 11.ES6中的对象\n\n// let name = 'Michael';\n// let age = '12';\n\n// // let obj = {name:name,age:age}\n// let obj = {name,age}\n// console.log(obj)\n// key值的构建\n// let key = 'skill';\n// var obj = {\n//   [key]:'web'//不知道key值的情况下，可以使用key值构建\n// }\n// console.log(obj)\n\n// let obj = {\n//   add:function(a,b){\n//     return a+b\n//   }\n// }\n// console.log(obj.add(1,2));\n\n// is() 对两个对象进行比较\n// let obj1 = {name:'Michael'};\n// let obj2 = {name:'Michael'};\n\n// // console.log(obj1.name === obj2.name)\n// console.log(Object.is(obj1.name,obj2.name));\n\n//同值相等\n// console.log(+0===-0) //true\n// console.log(NaN===NaN); //false\n\n// // 严格相等\n// console.log(Object.is(+0,-0));//false\n// console.log(Object.is(NaN,NaN)); //true\n\n// assign 合并对象\n\n// let a = {a:'Michael'};\n// let b = {b:'迈克'};\n// let c = {c:'Web Develop'};\n\n// let d = Object.assign(a,b,c);\n// console.log(d);\n\n// let name = 'Michael';\n// let age = 27;\n\n// var arr1 = ['a','b','c','d'];\n// var arr2 = ['d'];\n// var arr3 = ['e','f'];\n// //第一种复制数组\n// var cc = arr1.concat();\n// cc[1] = 'Michael';\n\n// console.log('cc:',cc);//['a','Michael','c','d']\n// console.log('arr1:',arr1);//['a','b','c','d']\n\n// // 第二种复制数组\n// console.log(...arr1);//a b c d\n// var ee = [...arr1];\n// ee[3] = '!';\n// console.log(ee);//['a','b','c','!'];\n// console.log(arr1);//['a','b','c','d'];\n\n// // 以下情形不是复制，是引用，会改变原有数组值\n// var dd = arr1;\n// dd[2] = 'Zhang';\n// console.log('dd:',dd);//['a','b','Zhang','d']\n// console.log('arr1:',arr1);//['a','b','Zhang','d']\n\n//合并数组\n// var arr1 = ['a','b','c'];\n// var arr2 = ['d'];\n// // var arr3 = arr1.concat(arr2);\n// var arr3 = [...arr1,...arr2];\n// console.log(arr3);\n\n//12.Symbol在对象中的作用\n\n// var a = new String;\n// var b = new Number;\n// var c = new Boolean;\n// var d = new Array;\n// var e = new Object;\n// // 全局的原始数据\n// let f = Symbol();\n\n// console.log(typeof(f));//Symbol\n\n// let michael = Symbol('张国龙')\n\n// console.log(michael)\n// console.log(michael.toString())\n\n// let michael = Symbol();\n// let obj = {\n//   [michael] : '毛毛'\n// }\n\n// console.log(obj[michael]);\n\n// obj[michael] = '张先森'\n// console.log(obj[michael]);\n\n// let obj = {\n//   name:'michael',\n//   skill:'web'\n// }\n// let age = Symbol();\n// obj[age] = 18;//保护\n// // console.log(obj);\n\n// for(item in obj) {\n//   console.log(obj[item]);\n// }\n// console.log(obj[age]);\n\n// var g = Symbol('michael');\n// console.log(g);//红色 Symbol(michael)\n// console.log(g.toString());//普通 Symbol(michael)\n\n// let obj = {name:'Michael',skill:'web'}\n// let age = Symbol();\n// obj[age] = 18;\n// for(let item in obj) {\n//     console.log(obj[item]);//Michael,web\n// }\n// console.log(obj);\n\n// 13.Set和WeakSet数据结构\n// let setArr = new Set(['michael','毛毛','web','michael']);\n// let weakObj = new WeakSet();\n// let obj = {\n//   a:'Michael',\n//   b:'Xinxin',\n//   c:'family',\n//   d:'家庭'\n// }\n// let obj1 = {\n//   a:'Michael',\n//   b:'Xinxin',\n//   c:'family',\n//   d:'家庭'\n// }\n// weakObj.add(obj);\n// weakObj.add(obj1);\n// console.log(weakObj);\n\n// setArr.add('前端');\n// setArr.delete('web');\n\n// console.log(setArr);\n// // console.log(setArr.has('michael'));\n\n// setArr.clear();\n// console.log(setArr);\n\n// for(let item of setArr) {\n//   console.log(item);\n// }\n\n// setArr.forEach((x) => {\n//   console.log(x);\n// });\n\n// console.log(setArr.size)//3\n\n// let weakObj = new WeakSet();\n// let obj = {a:1,b:2}\n// weakObj.add(obj);\n// console.log(weakObj);//\n\n// 15.用Proxy进行预处理\n// let obj = {\n//   add: function(val) {\n//     return val + 100\n//   },\n//   name: 'I am Michael'\n// }\n// // console.log(obj.add(100))\n// // console.log(obj.name)\n\n// let pro = new Proxy(\n//   {\n//     add: function(val) {\n//       return val + 100\n//     },\n//     name: 'I am Michael',\n//     a: '哈哈，我是a值'\n//   },\n//   {\n//     //get set apply\n//     get: function(target, key, property) {\n//       console.log('come in Get')\n//       console.log(target, key)\n//       return target[key]\n//     },\n//     set: function(target, key, value, receiver) {\n//       console.log(` setting ${key} = ${value}`)\n//       return (target[key] = value)\n//     }\n//   }\n// )\n\n// console.log(pro.a)\n// pro.name = 'maomao'\n// console.log(pro.name)\n\n// let target = function() {\n//   return `I am Michael`\n// }\n// let handler = {\n//   apply(target, ctx, args) {\n//     console.log('do apply')\n//     return Reflect.apply(...arguments)\n//   }\n// }\n\n// let pro = new Proxy(target, handler)\n\n// console.log(pro())\n\n// target = function() {\n//   return 'I am Michael'\n// }\n// var handler = {\n//   apply(target, ctx, args) {\n//     console.log('do apply')\n//     return Reflect.apply(...arguments)\n//   }\n// }\n\n// var pro = new Proxy(target, handler)\n\n// console.log(pro())\n\n// 16.promise对象的使用\n// 1.洗菜做饭 2.坐下来吃饭 3.收拾桌子吃饭\n// let state = 1\n\n// function step1(resolve, reject) {\n//   console.log('1.开始洗菜做饭')\n//   if (state === 1) {\n//     resolve(`洗菜做饭-完成`)\n//   } else {\n//     reject(`洗菜做饭-出错`)\n//   }\n// }\n\n// function step2(resolve, reject) {\n//   console.log('2.开始坐下来吃饭')\n//   if (state === 1) {\n//     resolve(`坐下来吃饭-完成`)\n//   } else {\n//     reject(`坐下来吃饭-出错`)\n//   }\n// }\n\n// function step3(resolve, reject) {\n//   console.log('3.开始收拾桌子洗碗')\n//   if (state === 1) {\n//     resolve(`收拾桌子洗碗-完成`)\n//   } else {\n//     reject(`收拾桌子洗碗-出错`)\n//   }\n// }\n\n// new Promise(step1)\n//   .then(function(val) {\n//     console.log(val)\n//     return new Promise(step2)\n//   })\n//   .then(function(val) {\n//     console.log(val)\n//     return new Promise(step3)\n//   })\n//   .then(function(val) {\n//     console.log(val)\n//   })\n\n// let state = 1\n\n// function step1(resolve, reject) {\n//   console.log('1.开始-洗菜做饭')\n//   if (state === 1) {\n//     resolve('洗菜做饭-完成')\n//   } else {\n//     reject('洗菜做饭-出错')\n//   }\n// }\n\n// function step2(resolve, reject) {\n//   console.log('2.开始-坐下来吃饭')\n//   if (state === 1) {\n//     resolve('坐下来吃饭-完成')\n//   } else {\n//     reject('坐下来吃饭-出错')\n//   }\n// }\n\n// function step3(resolve, reject) {\n//   console.log('3.开始-收拾桌子洗碗')\n//   if (state === 1) {\n//     resolve('收拾桌子洗碗-完成')\n//   } else {\n//     reject('收拾桌子洗碗-失败')\n//   }\n// }\n\n// new Promise(step1).then(function(val) {\n//   console.log(val)\n//   return new Promise(step2).then(function(val) {\n//     console.log(val)\n//     return new Promise(step3).then(function(val) {\n//       console.log(val)\n//     })\n//   })\n// })\n\n// 17.class的使用\n// class Coder {\n//   name(val) {\n//     console.log(val)\n//     return val\n//   }\n\n//   skill(val) {\n//     console.log(this.name('毛毛') + ':' + 'Skill-' + val)\n//   }\n//   // 类的参数\n//   constructor(a, b) {\n//     this.a = a\n//     this.b = b\n//   }\n\n//   add() {\n//     return this.a + this.b\n//   }\n// }\n\n// let michael = new Coder(2, 3)\n\n// // michael.name('Hello world!')\n\n// // michael.skill('web前端工程师')\n// console.log(michael.add())\n\n// //不继承属性\n// class htmler extends Coder {}\n\n// let mao = new htmler()\n// mao.name('哈哈哈')\n// console.log(michael.a)\n\n// class Coder {\n//   name(val) {\n//     console.log(val)\n//   }\n// }\n\n// let person = new Coder()\n// person.name('毛毛')\n// //毛毛\n// import { name, skill, area } from './temp'\n\n// console.log(name)\n// import { a, add } from './temp'\n\n// console.log(a)\n\n\n\nconsole.log(_temp__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/object.js":
/*!***********************!*\
  !*** ./src/object.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 属性的简洁表示法\n// ES6允许直接写入变量和函数，作为对象的属性或方法。\nconst foo = 'Michael'\nconst name = foo\n\nconsole.log(name)\n\n\n//# sourceURL=webpack:///./src/object.js?");

/***/ }),

/***/ "./src/temp.js":
/*!*********************!*\
  !*** ./src/temp.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// var a = '毛毛'\n// var b = '前端工程师'\n// var c = '重庆展览中心'\n\n// // export function add(a, b) {\n// //   return a + b\n// // }\n\n// export { name as a, skill as b, area as c }\n// export var a = 'aaaa'\n// export function add(a, b) {\n//   return a + b\n// }\nvar a = '毛毛'\n/* harmony default export */ __webpack_exports__[\"default\"] = (a);\n\n\n//# sourceURL=webpack:///./src/temp.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/index.js ./src/object.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/object.js */\"./src/object.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/object.js?");

/***/ })

/******/ });