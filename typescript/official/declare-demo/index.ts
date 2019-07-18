import {name, getName, Animal, Directions, Options} from 'm2maomao';
console.log(name);
console.log(getName());
let a = new Animal('maomao');
console.log(a.sayHi());
console.log(Directions.Up);

let b: Options = {
  data:'我是Options里data的值'
}
console.log(b.data);