// es6
// class Person {
// 初始化必须写在构造函数中
//   constructor(name) {
//     this.name = name
//   }
// }

// ts
class Person {

  public name: string;
  protected age: number;
  readonly gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  public say():void {
    console.log('Hello, ', this.name)
  }
}

// let p1:Person = new Person('maomao', 20);
// p1.say();
// console.log(p1.age);

class Student extends Person {
  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }
  getAge():number {
    return this.age
  }
}

// let s1:Student = new Student('LEO', 40, '男')
// console.log(s1.name);
// s1.say();
// console.log(s1.getAge());
// console.log(s1.gender);

class Man {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }
  get age():number {
    return this._age;
  }
  set age(newAge: number) {
    if (newAge < 200) {
      this._age = newAge;
    }
  }
}

let m1:Man = new Man(10);
m1.age = 100;
console.log(m1.age);

function fn<T>(x: T,y: T): T {
  return x;
}
fn<string>('2','10');