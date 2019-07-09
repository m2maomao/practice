// 声明式函数定义
function fn1(x, y) {
    return x + y;
}
fn1(1, 2);
// 函数表达式定义
var fn2 = function () { };
// 无返回值
var fn2 = function () {
};
// 有返回值
// var fn3:(x:number,y:number) => number = function(x: number,y: number): number {
//   return x + y
// }
var fn3 = function (x, y) {
    return x + y;
};
// 可选参数?
var fn4 = function (x, y) {
    return x + y;
};
// 默认值
function fn5(x, y = 0) {
    return x + y;
}
function fn6(x, y) {
    if (typeof x === 'number') {
        console.log(x * y);
        return x * y;
    }
    else {
        console.log(x + y);
        return x + y;
    }
}
fn6(1, 2); // 2
fn6('1', '2'); // 12
