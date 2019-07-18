"use strict";
exports.__esModule = true;
var name = 'Michael911';
exports.name = name;
function getName() {
    return '我是getName里面的返回值';
}
exports.getName = getName;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return 'sayHi的方法输出name:';
    };
    return Animal;
}());
exports.Animal = Animal;
var Directions = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
};
exports.Directions = Directions;
var Options = {
    data: null
};
exports.Options = Options;
var foo = {
    name: '毛毛',
    bar: {
        baz: function (n) {
            return 'baz func 的名字' + n;
        }
    }
};
exports.foo = foo;
