
let obj = {
    firstName: 'Mike',
    lastName: 'Hurley',
    hj: {
        a:1,
        b:2
    }
}

// let firstName = obj.firstName,
//     lastName = obj.lastName;

// 变量的结构赋值语法
// let {firstName: f, lastName: l} = obj;
let {firstName, lastName} = obj;

// 嵌套的结构
let {hj: {a,b}, hj } = obj;

// console.log(`${f} ${l}`);
console.log(`${firstName} ${lastName}`);

// console.log(hj);
console.log(a,b, hj);

// 在函数参数里面， 可以直接结构
function logNames({firstName, lastName}, n) {
    console.log(`${firstName} ${lastName} ${n}`);
}

logNames( {firstName: 'ahjk', lastName: 'b'}, 889 )
