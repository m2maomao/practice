// 引入其他的模块
/**
 * 在node中，通过require()函数来引入外部的模块
 * require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
 * 这里路径，如果使用相对路径，必须以.或..开头
 * 
 * 使用require()引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块
 *  */
var md = require('./02.module');
var math = require('./math');
var fs = require('fs');


console.log(md)
console.log(math.add(111,222));
console.log(fs)