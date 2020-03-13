// 类的继承，成员修饰符

// 构造函数中为私有，则该类不能被实例化，也不能被继承
// 构造函数为protected，则该类不能被实例化，只能被继承
class Dog {
    constructor(name: string) {
        this.name = name
    }
    public name: string
    run() {}
    private pri() {}
    protected pro() {} // 可以在子类中访问，不能在实例中访问
    static food: string = 'bones' // 只能通过类名调用，不能通过实类调用,可以被继承
}
// 类成员的属性，都是实例属性，而不是原型属性
// 类成员的方法，都是实例方法

console.log(Dog.prototype)

let dog = new Dog('wangwang')
console.log(dog)
// console.log(Dog.food, dog.food)
// dog.pri()
// dog.pro()

class Husky extends Dog {
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
        // this.pri()
        // this.pro()
    }
    // color: string
}
console.log(Husky.food)