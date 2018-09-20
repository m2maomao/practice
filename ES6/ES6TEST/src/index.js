// var a = 1;
// {
//   var a = 2
// }
// {
//   let a = 3
//   console.log(a)
// }

// let [a,b,c] = [0,1,2]
// console.log(a)

// [4]
// function michael(...arg){
//   console.log(arg[0])
//   console.log(arg[1])
//   console.log(arg[2])
//   console.log(arg[3])
// }
// michael(1,2,3)
// let arr1 = ['www','michael','com']
// // let arr2 = arr1
// let arr2 = [...arr1]

// console.log(arr2)

// arr2.push('Michael')
// console.log(arr2)
// console.log(arr1)

// function a(first,...arg) {
//   for(let val of arg) {
//     console.log(val)
//   }
// }
// a(0,1,2,3,4,5,6,7)

// let name = "Michael"
// let words = "Welcome to you, named "+name
// let b = `<br />Welcome to you, named ${name}`
// document.write(words)
// document.write(b)
// document.write('michael<br />'.repeat(20))

// 7
// JSON数组格式
// let json = {
//   '0':'michael',
//   '1':'aaa',
//   '2':'bbb',
//   length:3
// }
// console.log(json)

// let arr = Array.from(json)
// console.log(arr);
// console.log(json)

// let arr = Array.of(3,4,5,6)
// console.log(arr)

// let arr2 = Array.of('大家庭','Michael','重庆斯威')
// console.log(arr2)

// let arr=[1,2,3,4,5,6,7,8,9];
// console.log(arr.find(function(value,index,arr){
//     return value > 5;
// }))

// var json1 = '{"name":"GDT","age":"23","University":"GDUT"}'
// var json2 = {"name":"GDT","age":"23","University":"GDUT"}

// console.log('json1 type:',typeof(json1),json1) //json1 type:string {"name":"GDT","age":"23","University":"GDUT"}
// console.log('json2 type:',typeof(json2),json2) //json2 type:object {"name":"GDT","age":"23","University":"GDUT"}

// // 1.JSON.parse()函数 [string转JSON]
// // 将JSON字符串转换为json对象
// console.log(JSON.parse(json1)) // object {"name":"GDT","age":"23","University":"GDUT"}

// // 2.JSON.stringify()函数 [JSON转string]
// console.log(JSON.stringify(json2)) // string {"name":"GDT","age":"23","University":"GDUT"}

// //3.eval()函数 [计算某个字符串，并执行其中的javascript表达式或要执行的语句]
// // eval(string)
// eval("x=2;y=3;document.write(x*y)") //6

// //使用eval()函数也可以将JSON字符串解析为对象，这个功能能完成JSON.parse()的功能，但是也有不一样的地方：
// var info1 = JSON.parse(json1)
// console.log('info1',info1) //object
// var info2 = eval('('+json1+')')
// console.log('info2',info2) //object

// // eval()在string转json时需要用一对圆括号将字符串包起来：
// // 归结于eval本身的问题，由于json是以“{}”的方式来开始及结束的，在JS中，它会被当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。

// alert(eval("{}")); //undefined
// alert(eval('('+'{}'+')')); //[object Object]

// let arr = [0,1,2,3,4,5,6,7,8,9];
// arr.fill('Michael',2,5);
// console.log(arr);
//0,1,"Michael","Michael","Michael",5,6,7,8,9

// let arr = ["www","Michael",".com"];
// // for([index,val] of arr.entries()) {
// //   console.log(index+':'+val)
// // }

// let list = arr.entries();
// console.log(list);
// console.log(list.next().value);
// console.log('---------------');
// console.log(list.next().value);
// console.log('***************');
// console.log(list.next().value);
// console.log('666666666666666');

// function add (a=1,b=1) {
//   // 'use strict'
//   if(a === 0) {
//     //抛出异常
//     throw new Error('A is Error');
//   }
//   return a+b
// }
// console.log(add.length);//获取必须传递的个数

// 箭头函数内不允许使用new，构造函数
// var add = (a,b) => {
//   console.log('JS')
//   return a+b
// }
// console.log(add(1,2));

// 10、对象的函数解构
// let json = {
//   a:"1",
//   c:"2"
// }
// function fun({a,b='Michael'}){
//   console.log(a,b)
// }
// fun(json)

// let arr = ['1','2','3'];
// function fun(a,b,c){
//   console.log(a,b,c)
// }
// fun(...arr)

// in的用法
// let obj = {
//   a:'michael',
//   b:'yuanxiao'
// }
// console.log('a' in obj)

// let arr = ['maomao',,,];
// console.log(1 in arr)

// let arr = ['michael','zhang','blog'];
// // arr.forEach((val,index)=>console.log(index,val))
// // arr.filter(x => console.log(x))
// // arr.some(x => console.log(x))
// // console.log(arr.map(x=>'web'))
// // console.log(arr)
// console.log(arr.toString());
// console.log(arr.join('---'));

// 11.ES6中的对象

// let name = 'Michael';
// let age = '12';

// // let obj = {name:name,age:age}
// let obj = {name,age}
// console.log(obj)
// key值的构建
// let key = 'skill';
// var obj = {
//   [key]:'web'//不知道key值的情况下，可以使用key值构建
// }
// console.log(obj)

// let obj = {
//   add:function(a,b){
//     return a+b
//   }
// }
// console.log(obj.add(1,2));

// is() 对两个对象进行比较
// let obj1 = {name:'Michael'};
// let obj2 = {name:'Michael'};

// // console.log(obj1.name === obj2.name)
// console.log(Object.is(obj1.name,obj2.name));

//同值相等
// console.log(+0===-0) //true
// console.log(NaN===NaN); //false

// // 严格相等
// console.log(Object.is(+0,-0));//false
// console.log(Object.is(NaN,NaN)); //true

// assign 合并对象

// let a = {a:'Michael'};
// let b = {b:'迈克'};
// let c = {c:'Web Develop'};

// let d = Object.assign(a,b,c);
// console.log(d);

// let name = 'Michael';
// let age = 27;

// var arr1 = ['a','b','c','d'];
// var arr2 = ['d'];
// var arr3 = ['e','f'];
// //第一种复制数组
// var cc = arr1.concat();
// cc[1] = 'Michael';

// console.log('cc:',cc);//['a','Michael','c','d']
// console.log('arr1:',arr1);//['a','b','c','d']

// // 第二种复制数组
// console.log(...arr1);//a b c d
// var ee = [...arr1];
// ee[3] = '!';
// console.log(ee);//['a','b','c','!'];
// console.log(arr1);//['a','b','c','d'];

// // 以下情形不是复制，是引用，会改变原有数组值
// var dd = arr1;
// dd[2] = 'Zhang';
// console.log('dd:',dd);//['a','b','Zhang','d']
// console.log('arr1:',arr1);//['a','b','Zhang','d']

//合并数组
// var arr1 = ['a','b','c'];
// var arr2 = ['d'];
// // var arr3 = arr1.concat(arr2);
// var arr3 = [...arr1,...arr2];
// console.log(arr3);

//12.Symbol在对象中的作用

// var a = new String;
// var b = new Number;
// var c = new Boolean;
// var d = new Array;
// var e = new Object;
// // 全局的原始数据
// let f = Symbol();

// console.log(typeof(f));//Symbol

// let michael = Symbol('张国龙')

// console.log(michael)
// console.log(michael.toString())

// let michael = Symbol();
// let obj = {
//   [michael] : '毛毛'
// }

// console.log(obj[michael]);

// obj[michael] = '张先森'
// console.log(obj[michael]);

// let obj = {
//   name:'michael',
//   skill:'web'
// }
// let age = Symbol();
// obj[age] = 18;//保护
// // console.log(obj);

// for(item in obj) {
//   console.log(obj[item]);
// }
// console.log(obj[age]);

// var g = Symbol('michael');
// console.log(g);//红色 Symbol(michael)
// console.log(g.toString());//普通 Symbol(michael)

// let obj = {name:'Michael',skill:'web'}
// let age = Symbol();
// obj[age] = 18;
// for(let item in obj) {
//     console.log(obj[item]);//Michael,web
// }
// console.log(obj);

// 13.Set和WeakSet数据结构
// let setArr = new Set(['michael','毛毛','web','michael']);
// let weakObj = new WeakSet();
// let obj = {
//   a:'Michael',
//   b:'Xinxin',
//   c:'family',
//   d:'家庭'
// }
// let obj1 = {
//   a:'Michael',
//   b:'Xinxin',
//   c:'family',
//   d:'家庭'
// }
// weakObj.add(obj);
// weakObj.add(obj1);
// console.log(weakObj);

// setArr.add('前端');
// setArr.delete('web');

// console.log(setArr);
// // console.log(setArr.has('michael'));

// setArr.clear();
// console.log(setArr);

// for(let item of setArr) {
//   console.log(item);
// }

// setArr.forEach((x) => {
//   console.log(x);
// });

// console.log(setArr.size)//3

// let weakObj = new WeakSet();
// let obj = {a:1,b:2}
// weakObj.add(obj);
// console.log(weakObj);//

// 15.用Proxy进行预处理
// let obj = {
//   add: function(val) {
//     return val + 100
//   },
//   name: 'I am Michael'
// }
// // console.log(obj.add(100))
// // console.log(obj.name)

// let pro = new Proxy(
//   {
//     add: function(val) {
//       return val + 100
//     },
//     name: 'I am Michael',
//     a: '哈哈，我是a值'
//   },
//   {
//     //get set apply
//     get: function(target, key, property) {
//       console.log('come in Get')
//       console.log(target, key)
//       return target[key]
//     },
//     set: function(target, key, value, receiver) {
//       console.log(` setting ${key} = ${value}`)
//       return (target[key] = value)
//     }
//   }
// )

// console.log(pro.a)
// pro.name = 'maomao'
// console.log(pro.name)

// let target = function() {
//   return `I am Michael`
// }
// let handler = {
//   apply(target, ctx, args) {
//     console.log('do apply')
//     return Reflect.apply(...arguments)
//   }
// }

// let pro = new Proxy(target, handler)

// console.log(pro())

// target = function() {
//   return 'I am Michael'
// }
// var handler = {
//   apply(target, ctx, args) {
//     console.log('do apply')
//     return Reflect.apply(...arguments)
//   }
// }

// var pro = new Proxy(target, handler)

// console.log(pro())

// 16.promise对象的使用
// 1.洗菜做饭 2.坐下来吃饭 3.收拾桌子吃饭
// let state = 1

// function step1(resolve, reject) {
//   console.log('1.开始洗菜做饭')
//   if (state === 1) {
//     resolve(`洗菜做饭-完成`)
//   } else {
//     reject(`洗菜做饭-出错`)
//   }
// }

// function step2(resolve, reject) {
//   console.log('2.开始坐下来吃饭')
//   if (state === 1) {
//     resolve(`坐下来吃饭-完成`)
//   } else {
//     reject(`坐下来吃饭-出错`)
//   }
// }

// function step3(resolve, reject) {
//   console.log('3.开始收拾桌子洗碗')
//   if (state === 1) {
//     resolve(`收拾桌子洗碗-完成`)
//   } else {
//     reject(`收拾桌子洗碗-出错`)
//   }
// }

// new Promise(step1)
//   .then(function(val) {
//     console.log(val)
//     return new Promise(step2)
//   })
//   .then(function(val) {
//     console.log(val)
//     return new Promise(step3)
//   })
//   .then(function(val) {
//     console.log(val)
//   })

// let state = 1

// function step1(resolve, reject) {
//   console.log('1.开始-洗菜做饭')
//   if (state === 1) {
//     resolve('洗菜做饭-完成')
//   } else {
//     reject('洗菜做饭-出错')
//   }
// }

// function step2(resolve, reject) {
//   console.log('2.开始-坐下来吃饭')
//   if (state === 1) {
//     resolve('坐下来吃饭-完成')
//   } else {
//     reject('坐下来吃饭-出错')
//   }
// }

// function step3(resolve, reject) {
//   console.log('3.开始-收拾桌子洗碗')
//   if (state === 1) {
//     resolve('收拾桌子洗碗-完成')
//   } else {
//     reject('收拾桌子洗碗-失败')
//   }
// }

// new Promise(step1).then(function(val) {
//   console.log(val)
//   return new Promise(step2).then(function(val) {
//     console.log(val)
//     return new Promise(step3).then(function(val) {
//       console.log(val)
//     })
//   })
// })

// 17.class的使用
// class Coder {
//   name(val) {
//     console.log(val)
//     return val
//   }

//   skill(val) {
//     console.log(this.name('毛毛') + ':' + 'Skill-' + val)
//   }
//   // 类的参数
//   constructor(a, b) {
//     this.a = a
//     this.b = b
//   }

//   add() {
//     return this.a + this.b
//   }
// }

// let michael = new Coder(2, 3)

// // michael.name('Hello world!')

// // michael.skill('web前端工程师')
// console.log(michael.add())

// //不继承属性
// class htmler extends Coder {}

// let mao = new htmler()
// mao.name('哈哈哈')
// console.log(michael.a)

// class Coder {
//   name(val) {
//     console.log(val)
//   }
// }

// let person = new Coder()
// person.name('毛毛')
// //毛毛
// import { name, skill, area } from './temp'

// console.log(name)
// import { a, add } from './temp'

// console.log(a)

import maomao from './temp'

console.log(maomao)
