declare const name: string;// DOM typings
declare function getName(): string;
declare class Animal {
  constructor(name: string);
  sayHi(): string;
}
declare enum Directions {
  Up,
  Down,
  Left,
  Right
}
interface Options {
  data: any;
}

// 导出一个拥有子属性的对象
declare namespace foo {
  let name: string;
  namespace bar {
    function baz(name:string):string;
  }
}

export {
  name,
  getName,
  Animal,
  Directions,
  Options,
  foo
}