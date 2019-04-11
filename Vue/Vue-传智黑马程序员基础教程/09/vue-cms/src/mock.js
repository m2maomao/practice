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
// 图片分类
Mock.mock('http://localhost:3000/getimgcategory',imageCates)

let imagesList = {
  message: [],
  status: 0
}
for (let i = 0; i < 10; i++) {
  imagesList.message.push({
    id:Random.natural(1,20),
    title:Random.ctitle(10,20),
    img_url: Random.dataImage('700x500'),
    zhaiyao: Random.ctitle(30,50)
  })
}
// 图片列表
Mock.mock('http://localhost:3000/getimages/0',imagesList)

let imageInfo = {
  message: [],
  status: 0
}
for (let i=0; i< 5; i++) {
  imageInfo.message.push({
    id:Random.natural(1,20),
    title:Random.ctitle(15),
    click:Random.natural(200,500),
    add_time: Random.datetime(),
    content:Random.cparagraph(5,10)
  })
}
// 图片详情
Mock.mock('http://localhost:3000/getimageInfo/0', imageInfo)

let thumbs = {
  message:[
    {
      src:'https://hbimg.huabanimg.com/60aaaa328fed7c8d91878a4ec35164d0cd49b9704d2a6-dL7vbu_fw236',
      msrc:'https://hbimg.huabanimg.com/60aaaa328fed7c8d91878a4ec35164d0cd49b9704d2a6-dL7vbu_fw236',
      alt:Random.ctitle(10),
      title: Random.ctitle(10)
    },
    {
      src: 'http://hbimg.huabanimg.com/bf0d9e0eccd6df2307ebbd5d3388d044a8be119d44a6c-XrLIvP_fw236',
      msrc: 'http://hbimg.huabanimg.com/bf0d9e0eccd6df2307ebbd5d3388d044a8be119d44a6c-XrLIvP_fw236',
      alt: Random.ctitle(10),
      title: Random.ctitle(10)
    },
    {
      src: 'http://hbimg.huabanimg.com/ecd113874f2d41ca1f57c4b33e3d0082063049a3d7eb6-Kf9tZr_fw236',
      msrc: 'http://hbimg.huabanimg.com/ecd113874f2d41ca1f57c4b33e3d0082063049a3d7eb6-Kf9tZr_fw236',
      alt: 'alt:' + Random.ctitle(10),
      title: 'title:' + Random.ctitle(10)
    }
  ],
  status: 0
}
// 缩略图
Mock.mock('http://localhost:3000/getthumimages/0', thumbs)