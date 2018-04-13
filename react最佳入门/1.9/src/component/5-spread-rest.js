
// spread 展开
function fn(a,b,c) {
    console.log(a,b,c);
}

let arr = [2,3,4]
// 在函数参数里面展开一个数组
fn(...arr);
fn(...[2,3,4]);

// 可以在一个数组里面展开另外一个数组
console.log(['a','b', ...arr, 'c', 'd']);

// 展开一个对象

let obj = {a:1,b:2, c:3, d:4};

console.log(
    {
        a: 89,
        name: 'flowke',
        ...obj,
        a: 67
    }
);

// rest 剩余

// 在函数形参里面使用 rest
function fun2(a, dd, ...b) {
    console.log(a, dd, b);
}

fun2(1, 2, 3,4);
// 在结构一个对象的时候 使用 rest
let {a, c, ...rest} = obj;

console.log(a,c, rest);
