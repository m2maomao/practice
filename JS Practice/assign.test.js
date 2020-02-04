let a = {
  x:1,
  y:2,
  z:3
}

let b = {
  a:4,
  b:5,
  c:6
}

// Object.assign 方法用来将源对象（source）的所有可枚举属性，复制到目标对象 （target）。它至少需要两个对象作为参数，第一个参数是目标对象，
// 后面的参数都是源对象。只要有一个参数不是对象，就会抛出TypeError错误。

Object.assign(a,b);

console.log(a);
console.log(b);
