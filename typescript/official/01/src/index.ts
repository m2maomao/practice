/* declare var */
// jQuery('#foo');
// 使用 declare let 定义的 jQuery 类型，允许修改这个全局变量
// jQuery = function(selector) {
//   return document.querySelector(selector);
// }
// 一般来说，全局变量都是禁止修改的常量，所以大部分情况都应该使用 const 而不是 var 或 let。
// 需要注意的是，声明语句中只能定义类型，切勿在声明语句中定义具体的实现：

/* declare function */
// jQuery(function () {
//   alert('Dom Ready!');
// });

/* declare class */
// var cat = new Animal('小花');

/* declare enum */
// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];

/* declare namespace */
// jQuery.ajax('api/something');
// console.log(jQuery.version);
// const e = new jQuery.Event();
// e.blur(jQuery.EventType.CustomClick);
// jQuery.fn.extend({
//   check: function() {
//     return this.each(function() {
//       this.checked = true;
//     });
//   }
// })

// jQuery.fn.extend({
//   check:function() {
//     return this.each(() => {
//       this.checked = true;
//     })
//   }
// })

// let settings: AjaxSettings = {
//   method: 'POST',
//   data: {
//     name:'foo'
//   }
// }

// jQuery.ajax('/api/post_something', settings);

// let settings: jQuery.AjaxSettings = {
//   method: 'POST',
//   data: {
//     name:'foo'
//   }
// }
// jQuery.ajax('/api/some_thing', settings);

// jQuery('#app');
// jQuery.ajax('/api/some_thing');

<<<<<<< HEAD:typescript/official/01/src/index.ts
// var a:number = 5;
// var b: string = 'Tom';
// alert(a.length);
// alert(b.length);

// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }
// let tom:Person = {
//   name: 'tom',
//   gender: 'male',
//   age: 23
// }

// interface NumberArray {
//   arr: number[];
//   age: number;
// }

// let n:NumberArray = {
//   arr: [1, 2],
//   age: 2
// }

// interface ArrNum {
//   [index:number]: string
// }
// let arr:ArrNum = ['11', '22', '33'];
  
// function buildName(firstName: string, lastName: string = 'Cat') {
//   return firstName + ' ' + lastName;
// }

// let tomcat = buildName('Tom', 'Cat');
// let tom = buildName('Tom',undefined);

function push(array:any[], ...items:any[]) {
  items.forEach(function(item:any) {
      array.push(item); 
  })
}
let a:number[] = [];
push(a,1,2,3);
console.log(a);
=======
// function getLength(something: string | number): number{
//   return something.length();
// }

// function getLength(something: string | number): string {
//   return something.toString();
// }

// let myFavoriteNumber: string | number;
// myFavoriteNumber = 'Tom';
// console.log(myFavoriteNumber.length);

// myFavoriteNumber = 5
// console.log(myFavoriteNumber.toString());
>>>>>>> 1e1a80174c7312e7e543b2274e186675af866347:typescript/official/src/index.ts
