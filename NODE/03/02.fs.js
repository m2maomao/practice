var fs = require('fs');
//打开文件
var fd = fs.openSync('hello.txt','w');

// 向文件中写入内容
fs.writeSync(fd,"今天天气不错",30,'UTF-8')

// 关闭文件
fs.closeSync(fd)