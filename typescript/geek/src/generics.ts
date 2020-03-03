// 泛型
function log<T>(value: T): T {
    console.log(value);
    return value
}

log<string[]>(['a', 'b'])
log([1,2])

// type Log = <T>(value: T) => T
// let myLog: Log = log

// interface Log {
//     <T>(values: T): T
// }

interface Log<T = string> {
    (value: T): T
}

let myLog: Log = log
myLog('2')