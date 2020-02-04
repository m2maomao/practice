// function doSomething(name) {
//     console.log('Hello, ' + name);
// }
// function loggingDecorator(wrapped) {
//     return function () {
//         console.log('Starting');
//         var result = wrapped.apply(this, arguments);
//         console.log('Finishied');
//         return result;
//     };
// }
// var wrapped = loggingDecorator(doSomething);
// doSomething('Michael');

// wrapped('Michael');

// console.log(typeof function(a){});
// console.log(typeof (function(a){}));

// if (true) {
//     function foo() {
//         alert(0)
//     }
// } else {
//     function foo() {
//         alert(1)
//     }
// }
// foo();


// function () {
//     console.log(111);
// } ()

// function foo() {
//     console.log(222)
// } ()

// alert(foo)

// function foo(x) {
//     alert(x)
// }(1)

// foo(10)

// (function foo(x) {
//     alert(x);
// })(1)


// var foo = {
//     bar:function(x) {
//         return x % 2 !=0 ? 'yes' : 'no';
//     }(1)
// }
// alert(foo.bar)

// !function(){
//     alert('ECMAScript')
// }()

// var fn = function(a) {
//     console.log(a)
// }(12345678)
// console.log(fn);
// console.log(fn(123));

// var a = function(value) {alert(value)}
// (function() {
//     alert(1)
// })()

// 柯里化实现
function curry(fn, args) {
    var length = fn.length;
    args = args || [];
    return function() {
        var _args = args.slice(0),
        arg,i;
        for (i=0;i<arguments.length;i++) {
            arg = arguments[i];
            _args.push(arg);
        }
        if(_args.length < length) {
            return curry.call(this,fn, _args);
        }
        else {
            return fn.apply(this,_args);
        }
    }
}
var fn = curry(function(a,b,c) {
    console.log([a,b,c]);
});

fn('a','b','c');
fn("a")("b")("c");