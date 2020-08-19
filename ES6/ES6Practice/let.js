// function show(flag) {
//   console.log(a); // 变量提升 undefined
//   if(flag) {
//     var a = 'ghostwu';
//     console.log(a);
//     return a;
//   } else {
//     console.log(a); // 变量提升 undefined
//     return null;
//   }
// }
// show();

/**
 * 块级作用域
 * 1.函数内部
 * 2.块中（通常指的是一对花括号之间）
 */
function show(flag) {
  console.log(a); // a is not defined
  if(flag) {
    let a = 'ghost';
    return a
  } else {
    console.log(a);
    return null;
  }
}
show()