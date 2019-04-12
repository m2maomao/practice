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

let goods = {
  message:[
    {
      id:1,
      title:'花瓣的图片摘选',
      add_time:Random.datetime(),
      zhaiyao:'简单的摘要文字',
      click:0,
      img_url:'https://hbimg.huabanimg.com/312c9391a6930b4cfa7322610b6c58226ffef580430da-Vv1cZH_fw236',
      sell_price:2195,
      market_price:2499,
      stock_quantity:60
    },
    {
      id: 2,
      title: '花瓣的图片摘选',
      add_time: Random.datetime(),
      zhaiyao: '简单的摘要文字',
      click: 0,
      img_url: 'https://hbimg.huabanimg.com/8ee7471a8aa671acc9f51ec48cedc26718f17cdf88a84-6glPM5_fw236',
      sell_price: 2195,
      market_price: 2499,
      stock_quantity: 60
    },
    {
      id: 3,
      title: '花瓣的图片摘选',
      add_time: Random.datetime(),
      zhaiyao: '简单的摘要文字',
      click: 0,
      img_url: 'https://hbimg.huabanimg.com/e3256baa0fe287f5826b5661334f610de4feb0033e3749-5rH3BV_fw236',
      sell_price: 2195,
      market_price: 2499,
      stock_quantity: 60
    },
    {
      id: 4,
      title: '花瓣的图片摘选',
      add_time: Random.datetime(),
      zhaiyao: '简单的摘要文字',
      click: 0,
      img_url: 'https://hbimg.huabanimg.com/20fdc58a13d16482e01aa49e25f7026e50d0866f33716d-DnhfsY_fw236',
      sell_price: 2195,
      market_price: 2499,
      stock_quantity: 60
    },
    {
      id: 5,
      title: '花瓣的图片摘选',
      add_time: Random.datetime(),
      zhaiyao: '简单的摘要文字',
      click: 0,
      img_url: 'https://hbimg.huabanimg.com/8cb0d817fb918869b4f4854a662704c71a8d753c10a4e0-CuHjTq_fw236',
      sell_price: 2195,
      market_price: 2499,
      stock_quantity: 60
    },
    {
      id: 6,
      title: '花瓣的图片摘选',
      add_time: Random.datetime(),
      zhaiyao: '简单的摘要文字',
      click: 0,
      img_url: 'https://hbimg.huabanimg.com/41c8e7d5bbafafb11f032879d6b27ec118381e112e37a-c6PKak_fw236',
      sell_price: 2195,
      market_price: 2499,
      stock_quantity: 60
    },
    {
      id: 7,
      title: '花瓣的图片摘选',
      add_time: Random.datetime(),
      zhaiyao: '简单的摘要文字',
      click: 0,
      img_url: 'https://hbimg.huabanimg.com/cc88112b2ad0c2d1cd13ed4e8434c10618b3612fed20-60TyEG_fw236',
      sell_price: 2195,
      market_price: 2499,
      stock_quantity: 60
    },
    {
      id: 8,
      title: '花瓣的图片摘选8',
      add_time: Random.datetime(),
      zhaiyao: '简单的摘要文字',
      click: 0,
      img_url: 'https://hbimg.huabanimg.com/f3ee9951d34afe066f95c54e33ec214b55027d7637a992-DXVtG5_fw236',
      sell_price: 2195,
      market_price: 2499,
      stock_quantity: 60
    }
  ],
  status: 0
}
// 商品列表
Mock.mock('http://localhost:3000/getgoods?pageindex=1', goods)
