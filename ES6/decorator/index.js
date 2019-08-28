
/*
* ### 类装饰器 ###
*/

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
//添加静态属性
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

/* 
// 添加实例属性
function testable(target) {
    target.prototype.isTestable = true;
}
@testable
class MyTestableClass{}

let obj = new MyTestableClass()
console.log(obj.isTestable) 
*/

/* 
import {mixins} from './mixins'

const Foo = {
    foo() {console.log('foo')}
}

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
obj.foo();
 */

/* 
const Foo = {
    foo() {
        console.log('foo2')
    }
};
 
class MyClass{}

Object.assign(MyClass.prototype,Foo);

let obj = new MyClass();
obj.foo();
*/


/*
* ### 方法装饰器 ###
*/

/* 
class Person {
    @readonly
    name() {
        return `${this.first} ${this.last}`
    }
}

//第一个为类的原型对象，第二个为方法名，第三个为
function readonly(target, name, description) { 
    console.log(target) // {constructor: ƒ, name: ƒ}
    console.log(name) // name
    console.log(description) // {value: ƒ, writable: true, enumerable: false, configurable: true}
    description.writable = false;
    return description
} 
*/

/* let Person = {}
Object.defineProperty(Person, 'name', { writable: true })
Person.name = 'rose'
console.log(Person.name) */

/* let Person = {}
let temp = null
Object.defineProperty(Person,'name',{
    get:function() {
        return temp
    },
    set: function(val){
        temp = val
    }
})
Person.name = 'Jack'
console.log(Person.name) // Jack */

/* 
'use strict'
let Person = {}
Object.defineProperty(Person, 'name', {
    value: 'Jack',
    configurable: false,
    writable: true,
    enumerable: true
})
delete Person.name // Cannot delete property 'name' of #<Object>
 */


/* 
let Person = {}
Object.defineProperty(Person,'name',{
    value:'jack',
    configurable: false
})
Object.defineProperty(Person,'name',{
    value:'rose'
})
// Cannot redefine property: name
*/

/* 
let Person = {}
Object.defineProperty(Person,'name',{
    value:'jack',
    configurable: true,
    writable: false
})

Object.defineProperty(Person,'name',{
    value:'rose'
})
console.log(Person.name) // rose
 */

/* 
 let Person = {}
 Object.defineProperty(Person,'name',{
     value:'jack',
     configurable: false,
     writable: true
 })
 Object.defineProperty(Person,'name',{
     value:'rose'
 })
 console.log(Person.name) // rose
  */

/* 
'use strict'
let Person = {}
Object.defineProperty(Person,'name', {
    value:'jack',
    configurable: true,
    writable:true,
    enumerable:true
})
delete Person.name
console.log(Person.name) // undefined
 */

/* 
 let Person = {}
 Object.defineProperty(Person,'name',{
     value:'jack',
     configurable: true,
     writable: false
 })
 Object.defineProperty(Person,'name',{
     value:'rose'
 })
 // 通过属性定义的形式可以修改name的属性值
 console.log(Person.name) // rose
//  通过赋值的形式，不可以修改，因为writable为false
Person.name = 'tom'
console.log(Person.name) // rose
 */

/* 
 let Person = {}
 Object.defineProperty(Person,'name', {
     value:'jack',
     configurable: false,
     writable: true
 })
 Object.defineProperty(Person,'name', {
     value:'rose'
 })
//  通过属性定义的形式可以修改name的属性值
console.log(Person.name) // rose
Person.name = 'tom'
console.log(Person.name) // tom
 */

/* 
let Person = {}
Object.defineProperty(Person, 'name', {
    value: 'Jack',
    enumerable: false
})

Person.gender = 'male'

Object.defineProperty(Person, 'age', {
    value: '26',
    enumerable: true
})

console.log(Object.keys(Person)) // ["gender","age"]
for (let k in Person) { console.log(k) } // gender, age

console.log(Person.propertyIsEnumerable('name')); // false
console.log(Person.propertyIsEnumerable('gender')); // true
console.log(Person.propertyIsEnumerable('age')); // true
 */

/* 
let Person = {}
Object.defineProperty(Person, 'name', {
    value: 'Jack',
    configurable: false,
    writable: false
})
delete Person.name // 不可删除
Person.name = 'rose' // 不可重新赋值
console.log(Person.name) // Jack
// 通过赋值，还可以添加新属性
Person.gender = 'male'
console.log(Person.gender) // male
// 不可重新定义
Object.defineProperty(Person, 'name', { // Cannot redefine property:name
    value: 'rose'
})
 */

/* 
//  禁止扩展
'use strict'
var Person = {
    name: 'Jack'
}
Object.preventExtensions(Person)
Person.gender = 'male' // Cannot add property gender, object is not extensible
console.log(Person.gender)
 */


/* 
var Person = {
    name: 'Jack'
}
Object.preventExtensions(Person) // 禁止扩展
//仍然可以进行配置
Object.defineProperty(Person, 'name', {
    value: 'rose',
    writable: false,
    configurable: false
})
// 输出配置后的结果
console.log(Person.name) // rose
// 不能进行扩展
Person.gender = 'male'
console.log(Person.gender) // undefined
console.log(Person) // {name: "rose"}
 */

/* 
 var Person = {
     name:'Jack'
 }
 Object.seal(Person)
 Person.gender = 'male'
// 不能扩展属性
console.log(Person.gender) // undefined
// 再次验证
console.log(Object.keys(Person)) // ['name']
// 不能再次配置属性
Object.defineProperty(Person, 'name', { // Cannot redefine property: name
    value: 'rose',
    configurable: true
})
Person.name = 'Michael'
console.log(Person)
 */

/* 
var Person = {
    name: 'Jack'
}
Object.freeze(Person)
Person.gender = 'male'
// 不能扩展属性
console.log(Person.gender) // undefined
// 再次验证
console.log(Object.keys(Person)) // ['name']
Person.name = 'Tom'
// 不可修改已有属性的值
console.log(Person.name) // Jack
// 不能再次配置属性
Object.defineProperty(Person, 'name', { // Cannot redefine property: name
    name:'rose',
    configurable: true
})
 */
/* 
class Math {
    @log
    add(a,b) {
        return a + b
    }
}

// 输出日志
function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling ${name} with`, arguments);
        return oldValue.apply(this, arguments)
    }
    // return descriptor
}

const math = new Math();

math.add(2,4)
 */

/* 
function  doSomething(name) {
    console.log('Hello, ' + name);
}

function loggingDecorator(wrapped) {
    return function() {
        console.log('Starting!');
        const result = wrapped.apply(this,arguments)
        console.log('Finished!');
        return result
    }
}
const wrapped = loggingDecorator(doSomething)
wrapped('Michael')
// Starting!
// Hello, Michael
// Finished!
 */


/* 
import { autobind } from 'core-decorators';
class Person {
    @autobind
    getPerson() {
        return this;
    }
}
let person = new Person();
let getPerson = person.getPerson;
console.log(getPerson());
console.log(person);

console.log(getPerson() === person);
 */

/* 
import { readonly } from 'core-decorators';

class Meal {
    @readonly
    entree = 'michael'
}

var dinner = new Meal();
dinner.entree = 'salmon'; // Cannot assign to read only property 'entree' of object
 */


/* 
import { override } from 'core-decorators'
class Parent {
    speak(first, second) {}
}

class Child extends Parent{
    @override
    speak() {}
    // Child#speak() does not properly override Parent#speak(first, second)
}

class Child extends Parent {
    @override
    speaks() {}
}
 */

/* 
import { deprecate } from 'core-decorators'

class Person {
    @deprecate
    facepalm() {}

    @deprecate('We stopped facepalming')
    facepalmHard() {}

    @deprecate('We stopped facepalming', {url:'http://konwyourname.com'})
    facepalmHarder() {}
}

let person = new Person()
person.facepalm(); // This function will be removed in future versions.
person.facepalmHard(); // We stopped facepalming
person.facepalmHarder(); // We stopped facepalming See http://konwyourname.com for more details.
 */

/* 
import { suppressWarnings, deprecate } from 'core-decorators';

class Person {
    @deprecate
    facepalm() { }

    @suppressWarnings
    facepalmWithoutWarning() {
        this.facepalm();
    }
}

let person = new Person();

person.facepalmWithoutWarning();
// no warning is logged
 */


// 装饰类
/* 
function log(target, name, descriptor) {
    console.log(target);
    console.log(name);
    console.log(descriptor);
    target.prototype.name = 'Michael' // 动态扩展的属性
}

@log
class Car {
    run() {
        console.log('Car is running');
    }
}

const c1 = new Car()
c1.run()
console.log(c1.name)
 */

/* 
//  装饰类方法
 function log(target, name, descriptor) {
     console.log(target) // {constructor: ƒ, run: ƒ}
     console.log(name); // run
     console.log(descriptor); // {value: ƒ, writable: true, enumerable: false, configurable: true}
     var oldValue = descriptor.value
     descriptor.value = function() {
         console.log('我被改了')
         oldValue.call(this,arguments)
     }
 }

 class Car {
     @log
     run() {
         console.log('Car is running!')
     }
 }

 const c1 = new Car()
 c1.run()
  */

/* 
function log(target, name, descriptor) {
    console.log(target);
    console.log(name);
    console.log(descriptor);
    return class Bike {
        run() {
            console.log('Bike is running!')
        }
    }
    // return null
}

@log
class Car {
    run() {
        console.log('Car is running!');
    }
}

const c1 = new Car()
c1.run()
 */

/* 
//  1.日志输出
function log(target, name, descriptor) {
    console.log(Date.now())
}

class Car {
    @log
    run() {
        console.log('Car is running!');
    }
}

const c1 =new Car()
c1.run()
 */


/* 
// 2.函数劫持
function log(target, name, descriptor) {
    const old = descriptor.value
    descriptor.value = function(...arg) { // 注意这里需要保留原this作用域，不能使用箭头函数
        console.log('哈哈哈哈劫持啦')
        return old.apply(this,arg)
    }
}

class Car {
    @log
    run() {
        console.log('Car is running!');
    }
}

const c1 = new Car()
c1.run()
 */



// 3.Cache
