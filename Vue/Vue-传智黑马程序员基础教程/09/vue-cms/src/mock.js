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
// 轮播图
Mock.mock('http://localhost:3000/getlunbo',/post|get/i,lunbo)

let newslist = {
  message:[],
  status:0
}

for (let i = 0; i< 10; i++) {
  newslist.message.push({
    id:i,
    title:Random.csentence(10),
    add_time:new Date(),
    zhaiyao:Random.csentence(10),
    click: Random.string('number',3),
    img_url:Random.dataImage('120x120')
  })
}
// 新闻列表
Mock.mock('http://localhost:3000/getnewslist', newslist)
 
let newsinfo = {
  message: [],
  status: 0
}
newsinfo.message.push({
  id: Random.natural(1,10),
  title: Random.ctitle(30,40),
  click: Random.natural(20,200),
  add_time:new Date(),
  content:Random.cparagraph(200,300)
})
// 新闻详情
Mock.mock('http://localhost:3000/getnew/1', newsinfo)

let comments = {
  message: [],
  status: 0
}
for (let i = 0; i < 20; i++) {
  comments.message.push({
    user_name:Random.cname(),
    add_time: new Date(),
    content:Random.csentence(20)
  })
}
// 新闻评论
Mock.mock('http://localhost:3000/getcomments/1?pageindex=1', comments)

let imageCates = {
  message: [],
  status: 0
}
for (let i = 0; i < 10; i++) {
  imageCates.message.push({
    id:Random.natural(1,20),
    title:Random.ctitle(4)
  })
}
Mock.mock('http://localhost:3000/getimgcategory',imageCates)