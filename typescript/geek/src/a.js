var Shape;
(function (Shape) {
    var pi = Math.PI;
    // 如果需要全局访问，则需要export 导出
    function circle(r) {
        return pi * Math.pow(r, 2);
    }
    Shape.circle = circle;
})(Shape || (Shape = {}));
