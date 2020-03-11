interface A {
    x: number,
    // y: string
    foo (bar: number): number; // 5
    foo (bar: 'a'): number; // 2
}
interface A {
    y: number,
    foo (bar: string): string; // 3
    foo (bar: number[]): number[]; // 4
    foo (bar: 'b'): number; // 1 // 字面量
}

let aaaa: A = {
    x: 1,
    y: 1,
    foo(bar: any) {
        return bar
    }
}

// 命名空间和函数的合并 [位置：命名空间必须放在声明函数的后面]
function Lib() {}
namespace Lib {
    export let version = '1.0'
}

console.log(Lib.version)

// 类+命名空间 合并 [位置：命名空间必须放在声明类的后面]
class CC {}
namespace CC {
    export let state = 1
}
console.log(CC.state)

// 枚举+命名空间 合并 [位置：命名空间必须放在声明枚举的前面、后面均可以]
enum Color{
    Red,
    Yellow,
    Blue
}
namespace Color {
    export function mix() {}
}
console.log(Color)