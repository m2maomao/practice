// export var firstName = 'Michael';
// export var lastName = 'Zhang';
// export var year = 2018;

var firstName = 'Michael';
var lastName = 'Zhang';
var year = 2018;

// 输出变量
export {firstName,lastName,year};

// // 输出函数或类
// export function multiply(x,y) {
//     return x * y;
// };

// 通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名

/*
function v1() {...}
function v2() {...}

export {
    v1 as streamV1,
    v2 as streamV2,
    v2 as streamLastVersion
}
*/

// 上面代码中，重命名了函数v1和v2对外接口，重命名后，v2可以用不同的名字输出两次
