// 接收默认导出
// 接收默认导出的时候， 可以任意命名
import anm, {num, bvc} from './modules/a.js';
import b from './modules/b';

// 接收 export 的导出
// import {num} from './modules/a';


// ----- 以下是 commonJS 规范的导入

const aac = require('./modules/common');
console.log(aac, 'aac');
// ----- 以上是 commonJS 规范的导入

anm();
b();

console.log(num, bvc);
