let a = 1
let b = [1, null]

let c = (x = 1) => x + 1

window.onkeydown = (event: KeyboardEvent) => {
    // console.log(event)
}

interface Foo {
    bar: number
}
// let foo = {} as Foo // 类型断言
// foo.bar = 1
let foo: Foo = {bar: 1}
