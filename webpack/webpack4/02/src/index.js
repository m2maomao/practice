import 'bootstrap';
import './style'

let url = ''
if(DEV === 'dev') {
  url = 'http://localhost:3000'
} else {
  url = 'http://www.baidu.com'
}
console.log(url);
console.log(DEV);
console.log(FLAG);
console.log(EXPRESSION);


let xhr = new XMLHttpRequest();

xhr.open('GET','/user', true);

xhr.onload = function() {
  console.log(xhr.response);
}

xhr.send();
// console.log('home');

// class Log {
//   constructor() {
//     console.log('出错误了12221')
//   }
// }
// let log = new Log();