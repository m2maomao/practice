var a = 2; // 声明全局变量a
function (){
    alert(1)
}
(function foo(globel) {
    var a = 3;
    console.log(a); // 调用局部变量 3
    console.log(globel.a); // 调用全局变量 2
}
    (window));
console.log(a); // 调用全局变量 2