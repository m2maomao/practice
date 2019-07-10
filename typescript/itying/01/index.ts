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

class Person {
  name: string;
  constructor(name:string) {
    this.name = name
  }
  run():string {
    return `${this.name}在运动`
  }
}

// var p = new Person('毛毛');
// console.log(p.run());
class Web extends Person {
  constructor(name:string) {
    super(name);
  }
  run():string {
    return `${this.name}在运动--子类`
  }
}
var w = new Web('Lisi');
console.log(w.run());