declare class Animal {
  name: string;
  constructor(name: string);
  sayHi():string;

  // 同样的 declare class 语句也只能用来定义类型，不能用来定义具体的实现，比如定义 sayHi 方法的具体实现则会报错：
  // sayHi() {
  //   return `My name is ${this.name}`
  // };
  // ERROR: An implementation cannot be declared in ambient contexts.
}