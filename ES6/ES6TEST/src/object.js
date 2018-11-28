// 属性的简洁表示法
// ES6允许直接写入变量和函数，作为对象的属性或方法。
const foo = 'Michael'
const name = foo

console.log(name)

// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.map((e, i) => { return e * 10 })
// console.log(newArr)

// let newArr2 = arr.filter((e, i) => { return e > 3 })
// console.log(newArr2)

// let arr5 = [{ result: true }, { result: false }]
// let newArr5 = arr5.some((e, i) => e.result);
// console.log(newArr5);

let arr = [1, 2, 3, 4, 5, -2, -6, 7].find((e, i) => e < 0);
// 找出第一个符合条件的数组成员。
console.log(arr)//-2
