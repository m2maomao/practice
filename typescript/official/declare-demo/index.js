"use strict";
exports.__esModule = true;
var m2maomao_1 = require("m2maomao");
var ts_npm_export_default_demo_1 = require("ts-npm-export-default-demo");
console.log(m2maomao_1.name);
console.log(m2maomao_1.getName());
var a = new m2maomao_1.Animal('maomao');
console.log(a.sayHi());
console.log(m2maomao_1.Directions.Up);
var b = {
    data: '我是Options里data的值'
};
console.log(b.data);
// 导出一个拥有子属性的对象
console.log(m2maomao_1.foo.name);
console.log(m2maomao_1.foo.bar.baz('猫猫'));
// 通过export default的方式写声明文件
console.log(ts_npm_export_default_demo_1["default"](3, 2));
