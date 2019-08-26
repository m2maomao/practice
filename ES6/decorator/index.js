/* 
function testable(target) {
    target.isTestable = true;
}
@testable
class MyTestableClass {
    // ...
}
console.log(MyTestableClass.isTestable) // true 
*/

/* 
function testable(isTestable) {
    return function(target) {
        target.flag = isTestable
    }
}

@testable(true)
class MyTestableClass {}
console.log(MyTestableClass.flag); // true

@testable(false)
class MyClass{}
console.log(MyClass.flag) // false 
*/

function testable(target) {
    target.prototype.isTestable = true;
}
@testable
class MyTestableClass{}

let obj = new MyTestableClass()
console.log(obj.isTestable)