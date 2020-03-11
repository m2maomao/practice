namespace Shape {
    const pi = Math.PI
    // 如果需要全局访问，则需要export 导出
    export function circle(r:number) {
        return pi * r ** 2
    }
}