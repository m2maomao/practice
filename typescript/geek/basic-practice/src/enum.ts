enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}
// console.log(Role.Reporter)
// console.log(Role[1])
// console.log(Role);

const enum Month {
    Jan,
    Feb,
    Mar
}
let month = [Month.Jan, Month.Feb]
// console.log(month)

// 枚举类型
enum E { a, b }
enum F { a = 1, b = 2 }
enum G { a = 'apple', b = 'banana' }

let e: E = 3
let f: F = 3
// e === f