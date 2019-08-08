let hello = require('./helloModule');
hello.sayName()
console.log(hello.name);

var obj = {}
obj.a = {}
var a = obj.a
console.log(obj === obj.a)
console.log(obj.a === a)
