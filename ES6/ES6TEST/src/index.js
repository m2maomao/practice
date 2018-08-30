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

let arr = ['michael','zhang','blog'];
// arr.forEach((val,index)=>console.log(index,val))
// arr.filter(x => console.log(x))
// arr.some(x => console.log(x))
// console.log(arr.map(x=>'web'))
// console.log(arr)
console.log(arr.toString());
console.log(arr.join('---'));
