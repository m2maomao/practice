namespace Shape {
    const pi = Math.PI
    // 如果需要全局访问，则需要export 导出
    export function circle(r:number) {
        return pi * r ** 2
    }
    // 命名空间中函数不可以重新定义，接口之间是可以重新定义
}