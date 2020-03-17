interface DogInterface {
    run(): void
}

interface CatInterface {
    jump(): void
}
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}
let a4: number | string = 'a'
let b4: 'a' | 'b' | 'c'
let c4: 1 | 2 | 3

class Dog4 implements DogInterface {
    run() {}
    eat() {}
}
class Cat4 implements CatInterface {
    jump() {}
    eat() {}
}
enum Master { Boy, Gril}
function getPet(master:Master) {
    let pet = master === Master.Boy ? new Dog4() : new Cat4();
    pet.eat()
    // pet.run()
    return pet
}

interface Square {
    kind: 'square';
    size: number;
}
interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}
interface Circle {
    kind: 'circle';
    r: number;
}
type Shape = Square | Rectangle | Circle
function area(s:Shape): number {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.height * s.width;
        case 'circle':
            return Math.PI * s.r ** 2
        default: 
            return ((e: never) => {
                throw new Error(e)
            })(s)
    }
}
let square = area({
    kind: 'square',
    size: 10
})
let rectangle = area({
    kind:'rectangle',
    width: 10,
    height: 20
})
console.log('the squre area is:', square, 'the rectangle area is:', rectangle)
console.log(area({kind: 'circle', r: 1}))
// 交叉类型：适合做对象的混入
// 联合类型：使类型具有一定的不确定性，增加代码的灵活性
