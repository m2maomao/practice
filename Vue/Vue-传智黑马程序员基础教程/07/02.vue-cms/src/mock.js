import Mock from 'mockjs'
const Random = Mock.Random

let lunbo = {
  message: [],
  status: 0
}

for(let i = 0; i < 3; i++) {
  let newLunbo = {
    img:Random.dataImage('600x400')
  }
  lunbo.message.push(newLunbo)
}
Mock.mock('/getlunbo',/post|get/i,lunbo)