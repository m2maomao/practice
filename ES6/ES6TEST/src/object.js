// 属性的简洁表示法
// ES6允许直接写入变量和函数，作为对象的属性或方法。
// const foo = 'Michael'
// const name = foo

// console.log(name)

// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.map((e, i) => { return e * 10 })
// console.log(newArr)

// let newArr2 = arr.filter((e, i) => { return e > 3 })
// console.log(newArr2)

// let arr5 = [{ result: true }, { result: false }]
// let newArr5 = arr5.some((e, i) => e.result);
// console.log(newArr5);

// let arr = [1, 2, 3, 4, 5, -2, -6, 7].find((e, i) => e < 0);
// // 找出第一个符合条件的数组成员。
// console.log(arr)//-2

// let a = [1, 5, 10, 15].findIndex((e, i, a) => {
//   return e > 9
// })
// // 数组实例的findIndex方法的用法与find方法类似，返回第一个符合条件的数组下标，如果所有成员都不符合，返回-1
// console.log(a)//2

// let b = [1, 2, 3].includes(4)
// // Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值。
// // 没有该方法之前，我们通常使用数组的indexOf方法，检查是否包含某个值。indexOf方法有两个缺点：
// // 1.不够语义化，它的含义是找到参数值的一个出现位置，所以要去比较是否不等于-1，表达起来不够直观
// // 2.内部使用严格相等运算符（===）进行判断，这会导致对NaN的误判。
// console.log(b)

// 数组实例的entries(),keys(),values()
// ES6提供entries(),keys(),values(),用于遍历数组。它们都返回一个遍历器对象，可以用for...of循环进行遍历
// 唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历

// 箭头函数：1.缩减代码 2.改变this指向

// const team = {
//   members: ["Michael", "Elyse"],
//   teamName: "es6",
//   teamSummary: function() {
//     return this.members.map(function (member) {
//       return `${member}隶属于${this.teamName}小组`;//this不知道指谁了
//       // return `${member}隶属于${team.teamName}小组`
//     })
//   }
// }
// console.log(team.teamSummary());//Michael隶属于undefined小组，Elyse隶属于undefined小组

// teamSummary函数里面又嵌了个函数，这导致内部的this的指向发生了错乱。可以做以下修改

// 方法一、let self = this
// const team = {
//   members: ["Michael", "Lucy"],
//   teamName: "ES6",
//   teamSummary: function () {
//     let self = this;
//     return this.members.map(function (member) {
//       return `${member}隶属于${self.teamName}小组`;
//     })
//   }
// }
// console.log(team.teamSummary()); // Michael隶属于ES6小组，Elyse隶属于ES6小组

// // 方法二、bind函数
// const team = {
//   members: ["Michael", "Maomao"],
//   teamName: "ES6",
//   teamSummary: function () {
//     return this.members.map(function (member) {
//       return `${member}隶属于${this.teamName}小组`;
//     }.bind(this))
//   }
// }
// console.log(team.teamSummary()); // Michael隶属于ES6小组，Elyse隶属于ES6小组

// 方法三、箭头函数
// const team = {
//   members: ["Michael", "Honey"],
//   teamName: "ES6",
//   teamSummary: function(){
//     return this.members.map((member) => {
//       return `${member}隶属于${this.teamName}小组`
//     })
//   }
// }
// console.log(team.teamSummary()); // Michael隶属于ES6小组，Elyse隶属于ES6小组

// rest用法
// function addNumber (a, b, c, d, e) {
//   var numbers = [a, b, c, d, e]
//   return numbers.reduce((a,b) => {
//     return a + b
//   },0)
// }
// console.log(addNumber(1, 2, 3, 4, 5)) //15

// function addNumber (...nums) {
//   return nums.reduce((a, b) => {
//     return a+b
//   },0)
// }
// console.log(addNumber(1,2,3,4,5))

// 扩展运算符
// var array = [1, 2, 3, 4, 5]
// var [a, b, ...c] = array
// console.log(a);//1
// console.log(b);//2
// console.log(c);//[3,4,5]

// var array = [1, 2, 3, 4, 5]
// console.log(...array);//1 2 3 4 5
// var str = "String"
// console.log(...str);//S t r i n g

// 解构赋值
// var expense = {
//   type: 'ES6',
//   mount: '45'
// };
// const { type, mount } = expense;
// console.log(type, mount)//ES6 45

// let node = {
//   type: 'Identifier',
//   name: 'foo'
// },
//   type = 'Literal',
//   name = 5;
//   ({ type, name } = node);
// console.log(type,name) //Identifier foo

// function setCookie (name, value, { secure, path, domain, expires }) {
//   // 设置cookie代码
// }
// setCookie('type', 'js');//报错：  Cannot destructure property `secure` of 'undefined' or 'null'.

// 在此函数内，name与value参数是必须的，而secure,path,domain,expires则不是。默认情况下调用函数时未给参数解构传值
// 会抛出错误。若解构参数是可选的，可以给解构的参数提供默认值来处理这种错误。
// function setCookie (name, value, { secure, path, domain, expires } = {}) {
//   //设置cookie代码
// }

// 模板字符串：模板字符串是增强版的字符串，用反引号(`)标识。**它可以当做普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
// 模板字符串中嵌入变量和函数，需要将变量名写在${}之中。**

// Class
// class MathHandle {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   add () {
//     return this.x + this.y
//   }
// }

// const m = new MathHandle(2018, 3)
// console.log(m.add())

// // 继承
// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//   eat () {
//     alert(this.name + ' eat!')
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name) //有extends就必须要又super，它代表父类的构造函数，即Animal中的constructor
//     this.name = name
//   }
//   say () {
//     alert(this.name + ' say!')
//   }
// }

// const dog = new Dog('labuladuo');
// dog.say()
// dog.eat()

// Promise原理
// 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：
// 从pending变为fulfilled和从pending变为rejected。promise对象初始化状态为pending；
// 当调用resolve(成功)，会由pending => fulfilled;当调用reject(失败)，会由pending => rejected.

function loadImg (src) {
  const promise = new Promise(function (resolve, reject) {
    var img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject()
    }
    img.src = src
  })
  return promise
}

var src = 'http://www.imooc.com/static/img/index/logo_new.png';
var result = loadImg(src)
result.then(function (img) {
  console.log(img.width)
}, function () {
  console.log('failed')
})
