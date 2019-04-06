const fs = require('fs')
const path = require('path')

function getFileByPath(fpath, succCb, errCb) {
  fs.readFile(fpath, 'utf-8', (err, dataStr) => {
    if (err) return errCb(err)
    succCb(dataStr)
  })
}

// getFileByPath(path.join(__dirname, './files/1.txt'),function(data){
//   console.log(data+'娃哈哈，成功了！！！')
// },function(err){
//   console.log('失败的结果，我们使用失败的回调处理了一下:'+err.message)
// })

// 需求，先读取文件1，再读取文件2，最后再读取文件3
// 回调地狱
// 使用 ES6 中的 Promise，来解决回调地狱的问题；并不能帮我们减少代码量；
getFileByPath(path.join(__dirname, './files/1.txt'), function (data) {
  console.log(data)
  getFileByPath(path.join(__dirname, './files/2.txt'), function (data) {
    console.log(data)
    getFileByPath(path.join(__dirname, './files/3.txt'), function (data) {
      console.log(data)
    })
  })
})