// function fibonacci(n) {
//   if(n == 1) {
//     return 1
//   }
//   if(n == 2) {
//     return 2
//   }
//   if (n > 2) {
//     return fibonacci(n-1) + fibonacci(n-2)
//   }
// }
// console.log(fibonacci(10))

// function fibonacciopt (n) {
//   let res = new Array(n+1).fill(0);
//   res[1] = 1;
//   res[2] = 2;
//   for(i=3;i<n+1;i++) {
//     res[i] = res[i-1] + res[i-2]
//   }
//   return res[n]
// }

// console.log(fibonacciopt(10))


var cache = {}

function fib(n) {
  console.log(cache)
  if (!(n in cache)) {
    debugger
    cache[n] = _fib(n);
  }
  return cache[n];
}

function _fib(n) {
  if (n===1 || n===2) {
    return n
  } else {
    return fib(n-1) + fib(n-2);
  }
}
console.log(fib(5));