// es6
// class Person {
// 初始化必须写在构造函数中
//   constructor(name) {
//     this.name = name
//   }
// }
// ts
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    say() {
        console.log('Hello, ', this.name);
    }
}
// let p1:Person = new Person('maomao', 20);
// p1.say();
// console.log(p1.age);
class Student extends Person {
    constructor(name, age, gender) {
        super(name, age, gender);
    }
    getAge() {
        return this.age;
    }
}
// let s1:Student = new Student('LEO', 40, '男')
// console.log(s1.name);
// s1.say();
// console.log(s1.getAge());
// console.log(s1.gender);
class Man {
    constructor(age) {
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        if (newAge < 200) {
            this._age = newAge;
        }
    }
}
let m1 = new Man(10);
m1.age = 100;
console.log(m1.age);
function fn(x, y) {
    return x;
}
fn('2', '10');
