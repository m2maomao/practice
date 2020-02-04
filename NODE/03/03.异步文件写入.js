const fs = require('fs')
// 打开文件
fs.open('hello.txt','w',function(err,fd) {
  if(!err) {
    fs.write(fd,'这是异步写入的内容', function(err) {
      if(!err) {
        console.log('写入成功~~~')
      }
      fs.close(fd, function(err) {
        if(!err) {
          console.log('文件已关闭~~~~');
        }
      })
    });
  } else {
    console.log(err);
  }
});
console.log('程序向下执行')