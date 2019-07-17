const name = 'Michael'

function getName() {
  return '我是getName方法'
}
class Animal {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    return 'sayHiString'
  }
}
export {
  name,
  getName,
  Animal
}