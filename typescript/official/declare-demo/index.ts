import {name, getName, Animal, Directions, Options, foo} from 'm2maomao';
console.log(name);
console.log(getName());
let a = new Animal('maomao');
console.log(a.sayHi());
console.log(Directions.Up);

let b: Options = {
  data:'我是Options里data的值'
}
console.log(b.data);

// 导出一个拥有子属性的对象
console.log(foo.name);
console.log(foo.bar.baz('猫猫'));