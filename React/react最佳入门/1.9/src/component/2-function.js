
// 可以给函数参数一个默认的值
function fn(a,b=7) {
    console.log(a,b);
}

// fn(1,3)
//

// 声明一个箭头函数， 它是匿名的
// let a = (a, b,c=90)=>{
//     console.log(a,b,c);
// };
//
// a(1,2)

// 如果函数只有一个参数， 可以不写括号
// let a = arg=>{
//     console.log(arg);
// };
//
// a(89)

// 箭头后面可以直接写 返回值
// let a = (a,c)=>[1,2, a, c];
// 如何想返回一个对象字面量， 那么应该用一个括号括起来， 否则会当成函数体
// let a = (a,c)=>({a:1,b:2, c:a, d: c});
//
// console.log( a(122, 'hjk') );
//

// this 指向会是 函数所在的上下文环境
let obj = {
    fn: function() {
        console.log(this, "fn");
        let _this = this;
        let a = ()=>{
            console.log(this, 'arrow');
            console.log(this===_this);
        };

        a();
    }
}

// obj.fn();

let newFn = obj.fn;

newFn()
