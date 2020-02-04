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


// interface Animal{
//   name:string;
//   eat(str:string):void;
// }

// class Dog implements Animal {
//   name:string;
//   constructor(name:string) {
//       this.name = name;
//   }
//   eat():void {
//       console.log(this.name + '吃粮食');
//   }
// }

// var d = new Dog('小黑');
// d.eat();

// class Cat implements Animal {
//   name:string;
//   constructor(name:string){
//       this.name = name;
//   }
//   eat(food:string):void {
//       console.log(this.name + food)
//   }
// }
// var c = new Cat('咪咪');
// c.eat('猫粮');


// interface Animal {
//   eat():void;
// }
// interface Person extends Animal {
//   work():void;
// }

// class Programmer {
//   public name: string;
//   constructor(name:string) {
//       this.name = name;
//   }
//   coding(code:string):void {
//       console.log(this.name+code)
//   }
// }

// class Web extends Programmer implements Person{
//   constructor(name:string) {
//       super(name);
//   }
//   eat():void {
//       console.log(this.name + '吃面条')
//   }
//   work():void {
//       console.log(this.name + '写代码')
//   }
// }

// var w = new Web('毛毛');
// w.work();
// w.coding('写ts代码');


// class MainClass {
//   public list:number[] = [];
  
//   add(num:number) {
//       this.list.push(num)
//   }
//   min():number {
//       var minNum = this.list[0];
//       for(var i= 0; i < this.list.length; i++) {
//           if(minNum>this.list[i]) {
//               minNum = this.list[i]
//           }
//       }
//       return minNum;
//   }
// }
// var m = new MainClass();
// m.add(3);
// m.add(1);
// m.add(2);
// console.log(m.min());


// class User {
//   username: string | undefined;
//   password: string | undefined;
// }

// class MysqlDb{
//   add(user:User):boolean {
//       console.log(user)
//       return true;
//   }
// }

// var u = new User();
// u.username = '张三';
// u.password = '123456';

// var db = new MysqlDb();
// db.add(u);


//
// import { getData, save } from './modules/db'

// console.log(getData());
// save();


// 1.普通装饰器(不带参数)
/* function logClass (params:any) {
  console.log(params)
  params.prototype.apiUrl = '动态扩展的属性'
  params.prototype.run = function() {
    console.log('我是一个run方法')
  }
}
@logClass
class HttpClient {
  constructor() {

  }
  getData() {

  }
}

var http:any = new HttpClient();
console.log(http.apiUrl);
http.run(); */

// 装饰器工厂(带参数)
/* function logClass (params:string) {
  return function(target:any) {
    console.log(target);
    console.log(params);

    target.prototype.apiUrl = params;
  }
}

@logClass('http://www.baidu.com/')
class HttpClient {
  constructor() {

  }
  getData() {

  }
}

var http = new HttpClient();
console.log(http.apiUrl) */


/* function logClass(target) {
  console.log(target);
  return class extends target {
    apiUrl = '我是修改后的数据';
    getData() {
      this.apiUrl = this.apiUrl + '------'
      console.log(this.apiUrl);
    }
  }
}


@logClass
class HttpClient {
  public apiUrl: string| undefined;
  constructor() {
    this.apiUrl = '我是构造函数里面的apiUrl'
  }
  getData() {
    console.log(this.apiUrl)
  }
}

var http = new HttpClient();
http.getData(); */



/* // 类装饰器
function logClass(params) {
  return function(target) {
    console.log('target1', target)//输出类,最后执行
    console.log('params', params)//xxx
  }
}

// 属性装饰器
function logProperty(params:any){
  return function (target,attr) {
    console.log('target2', target)//返回构造函数
    console.log('attr', attr);//1、url 2、price
    target[attr] = params;
  }
}

@logClass('xxx')
class HttpClient {
  @logProperty('http://itying.com')
  public url:any | undefined;
  @logProperty(500)
  public price:any | undefined;
  constructor() {
  }
  getData() {
    console.log(this.url,this.price)
  }
}

var http = new HttpClient()
http.getData() */


// 方法装饰器1
/* function get(params:any) {
  return function(target:any,methodName:any,desc:any) {
    console.log(target);
    console.log(methodName);
    console.log(desc);

    target.apiUrl = 'xxxx';
    target.run = function() {
      console.log('run');
    }
  }
}

class HttpClient {
  public url: any | undefined;
  constructor() {}
  @get('http://www.baidu.com')
  getData() {
    console.log(this.url)
  }
}

var http:any = new HttpClient();
console.log(http.apiUrl);
http.run() */
/* 
{getData: ƒ, constructor: ƒ}
getData
undefined
xxxx
run
 */



// 方法装饰器2
function get(params:any) {
  return function(target:any,methodName:any,desc:any) {
    console.log(target);
    console.log(methodName);
    console.log(desc);
    console.log(desc.value);
  }
}

class HttpClient {
  public url: any | undefined;
  constructor() {}
  @get('http://www.baidu.com')
  getData() {
    console.log(this.url)
  }
}

// var http = new HttpClient();
// http.getData(123,'222');
get('11',222);