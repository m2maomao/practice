const name = 'Michael911';

function getName() {
  return '我是getName里面的返回值'
}

class Animal {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return 'sayHi的方法输出name:' + this.name
  }
}

let Directions = {
  Up:0,
  Down:1,
  Left:2,
  Right:3
}

let Options = {
  data: null
}

export {
  name,
  getName,
  Animal,
  Directions,
  Options
}