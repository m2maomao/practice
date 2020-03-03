// 抽象类，只能继承，不能实例化
abstract class Animal {
    eat() {
        console.log('eat')
    }
    abstract sleep():void // 抽象方法，必须在子类中实现
}

// let animail = new Animal()

class Dog extends Animal{
    constructor(name: string) {
        super()
        this.name = name
    }
    name: string;
    run() {}
    sleep() {
        console.log('dog sleep')
    }
}
let dog = new Dog('wangwang')
dog.eat()


// ts中的多态
class Cat extends Animal{
    sleep() {
        console.log('cat sleep')
    }
}
let cat = new Cat()

let animals:Animal[] = [dog,cat]
animals.forEach(i => {
    i.sleep()
})

// 链式调用
class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}
new WorkFlow().step1().step2()

class Myflow extends WorkFlow {
    next() {
        return this;
    }
}
new Myflow().next().step1().next().step2()




export {}