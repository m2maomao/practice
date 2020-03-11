/// <reference path="a.ts" />
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.circle(1));
console.log(Shape.square(1));
// 原则：命名空间和模块不要混用，不要在一个模块中使用命名空间，命名空间最好在一个全局的环境中使用
// 当前import与ES6中模块的“import”无任何关系,现在是挂载"Shape.circle"方法到"circle"上，可以直接使用“circle()”调用“Shape.circle()”方法
var circle = Shape.circle;
console.log(circle(2));
