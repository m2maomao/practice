/**
 * X 兼容 Y:X(目标类型) = Y(源类型)
 * 当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
 * 口诀：
 * 结构之间兼容：成员少的兼容成员多的
 * 函数之间兼容：参数多的兼容参数少的
 */
let s: string = 'a'
// s = null

// 接口兼容性
interface X {
    a: any;
    b: any;
}
interface Y {
    a: any;
    b: any;
    c: any;
}
let xx: X = {a: 1, b: 2}
let yy: Y = {a: 1, b: 2, c: 3}
// 源类型必须具备目标类型的必要属性（成员少的兼容成员多的）[接口]
xx = yy
// yy = xx

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}
// 1.参数个数
let handler1 = (a: number) => {}
hof(handler1)

let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)

// 可选参数和剩余参数
let aa = (p1: number, p2: number) => {}
let bb = (p1?: number, p2?: number) => {}
let cc = (...args: number[]) => {}

aa = bb
aa = cc

// bb = cc
// bb = aa
cc = aa

// 2.参数类型
let handler3 = (a: string) => {}
// hof(handler3)

interface Point3D {
    x: number;
    y: number;
    z: number;
}
interface Point2D {
    x: number;
    y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (poinst: Point2D) => {}
p3d = p2d // 成员个数多的兼容成员个数少的 [对象]
// p2d = p3d

// 3，返回值类型 (成员个数少的兼容成员个数多的)
let ff = () => ({name: 'Alice'});
let gg = () => ({name: 'Alice', location: 'Beijing'});
ff = gg
// gg = ff

// 函数重载
