var a = true;
var b = 'miaov';
var c = null;
// 数组：一组具有相同类型特征的数据的有序集合
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
// var obj = {
//   init:0,
//   success:1,
//   error:2
// }
// var result:number
// if (result === obj.init) {
// }
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red);
