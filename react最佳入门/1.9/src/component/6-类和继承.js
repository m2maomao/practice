
// function Human() {
//     this.eyes = 2;
//     this.hands = 2;
// }
//
// Human.prototype.singing = function() {
//     console.log('I can sing');
// }
//
// let a = new Human();
//
//
// console.log(a);
//
// a.singing()

// 使用 class 关键字去声明类
class Human{
    // 就是类的构造函数，初始化一个对象的属性
    constructor(eyes=2, hands=2){
        this.eyes = eyes;
        this.hands = hands;
    }

    singing(){
        console.log('I can sing');
    }
}

let a = new Human(3,4);

console.log(a);

a.singing();


// 类 可以 继承另外一个类， 使用 extends 语法
// 可以继承到另外一个类的所有属性和方法
class NormalMan extends Human{
    constructor(name='Flowke'){
        // 调用一下父类的构造函数
        // 当你继承了另外一个类的时候， 你必须用
        super(1000, 2000);
        // this.eyes = 100;
        // this.hands = 200;
        this.feet = 2;
        this.name = name;

        this.singing = this.singing.bind(this);
    }

    // 重写父类继承过来的方法
    singing(){
        // console.log(this);
        console.log(`${this.name} can sing`);
    }
    run(){
        console.log('NormalMan can run');
    }

}

let b = new NormalMan('Mike');

console.log(b);

b.singing();
b.run();


// 关于类里面方法的 this 指向
let fnn = b.singing;

fnn();
