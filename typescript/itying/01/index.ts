// function sum(...result:number[]):number {
//   var sum = 0;
//   for(var i=0; i<result.length; i++) {
//       sum += result[i]
//   }
//   return sum
// }
// console.log(sum(1,2,3,4));

// function getInfo(name:string):string;
// function getInfo(age:number):number;
// function getInfo(str:any):any {
//     if(typeof str === 'string') {
//         return '我叫：' + str
//     } else {
//         return `我的年龄是：        ${str}`
//     }
// }
// console.log(getInfo('张三'));
// console.log(getInfo(30));

// class Person {
//   name: string;
//   constructor(name:string) {
//     this.name = name
//   }
//   getName():string {
//     return this.name
//   }
//   setName(name:string):void {
//     this.name = name
//   }

// }

// var p = new Person('张三');
// console.log(p.getName());
// p.setName('michael');
// console.log(p.getName());

// class Person {
//   name: string;
//   constructor(name:string) {
//     this.name = name
//   }
//   run():string {
//     return `${this.name}在运动`
//   }
// }

// // var p = new Person('毛毛');
// // console.log(p.run());
// class Web extends Person {
//   constructor(name:string) {
//     super(name);
//   }
//   run():string {
//     return `${this.name}在运动--子类`
//   }
// }
// var w = new Web('Lisi');
// console.log(w.run());

// interface

// interface FullName{
//   firstName: string;
//   secondName: string;
// }

// function printName(name:FullName) {
//   // console.log(name.firstName,'---',name.secondName);
//   console.log(`${name.firstName} --- ${name.secondName}`);
// }

// printName({firstName:'Michael', secondName:'Zhang'});

// 原生js封装的ajax
// interface Config {
//   type: string;
//   url: string;
//   data?: string;
//   dataType: string;
// }

// function ajax(config:Config) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(config.type, config.url, true);
//   xhr.send(config.data);
//   xhr.onreadystatechange = function() {
//     if(xhr.readyState==4 && xhr.status==200) {
//       console.log('成功!')
//       if(config.dataType=='json') {
//         console.log(JSON.parse(xhr.responseText))
//       } else {
//         console.log(xhr.responseText)
//       }
//     }
//   }
// }

// ajax({
//   type:'get',
//   url:'http://a.itying.com/api/productlist',
//   dataType:'json'
// })

// 加密的函数类型接口
// interface encrypt{
//   (key:string, value: string):string;
// }
// var md5:encrypt = function(key:string,value:string):string {
//   //模拟操作
//   return key + value;
// }
// console.log(md5('name','zhangsan'))


interface Animal{
  name:string;
  eat(str:string):void;
}

class Dog implements Animal {
  name:string;
  constructor(name:string) {
      this.name = name;
  }
  eat():void {
      console.log(this.name + '吃粮食');
  }
}

var d = new Dog('小黑');
d.eat();