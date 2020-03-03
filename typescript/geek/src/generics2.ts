class Log<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}

let log1 = new Log<number>()
log1.run(1)
let log2 = new Log()
log2.run('1')

function minLog<T extends Length>(value: T): T {
    console.log(value, value.length);
    return value
}

interface Length {
    length: number
}
minLog([1])
minLog('123')
minLog({length: 1})
