// 接口定义对象
interface List {
    readonly id: number
    name: string
    // [x:string]: any
    age?: number
}

interface Result {
    data: List[]
}

function render(result:Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name)
        if(value.age) {
            // console.log(value.age)
        }
        // value.id++
    })
}

let result = {
    data: [
        {id: 1, name: 'Michael', sex: 'male'},
        {id: 2, name: 'Lucy', age: 22},
        {id: 3, name: 'Hans'}
    ]
}

// render(result)

// 三种方法设置
// 1.把对象字面量赋值给一个变量
// 2.类型断言 (as + 对象类型)
// 3.字符串索引签名 [x:string]:any;（用任意字符串索引List，可以得到任意的结果）

interface StringArray {
    [index: number]: string
}

let chars: StringArray = ['A', 'B'];

interface Names {
    [x: string]: string
    // y: number;
    [z: number]: string
}
