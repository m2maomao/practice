
let firstName = 'Flowke',
    lastName = 'Hurley';

let string = 'My name is ' + firstName + ' ' + lastName + '!';

// 声明模板字符串使用 反引号
// 你可以 使用${} 在里面写表达式
let s = `My name is ${firstName} ${lastName}!`

function fn() {
    return 'Mike';
}


let st = `My name is ${ fn() } ${lastName}!`
st = `My name is ${ 3<2 ? 'Moli' : 'Mike' } ${lastName}!`

console.log(string);
console.log(s);
console.log(st);
