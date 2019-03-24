import Mock from 'mockjs'

const Random = Mock.Random
// 模拟数据列表
let articles = []

for (let i = 0; i < 10; i++) {
  let newArticleObject = {
    id: i,
    author_name: Random.cname(),
    date: Random.date() + ' ' + Random.time(),
    email: Random.email()
  }
  articles.push(newArticleObject)
}

Mock.mock('/user', /post|get/i, articles)

// 数据的删除操作
let list = (opt) => {
  console.log(opt)
  let rtype = opt.type.toLowerCase()
  switch (rtype) {
    case 'get':
      break
    case 'post':
      let id = parseInt(JSON.parse(opt.body).params.id)
      articles = articles.filter(val => {
        return parseInt(val.id) !== id
      })
      break
    default:
      break
  }
  return articles
}

Mock.mock('/remove', /post|get/i, list)

// 添加数据操作
let listAdd = (opt) => {
  console.log(opt)
  let rtype = opt.type.toLowerCase()
  switch (rtype) {
    case 'get':
      break
    case 'post':
      let obj = JSON.parse(opt.body).params.obj
      articles = articles.concat(obj)
      break
    default:
      break
  }
  return articles
}

Mock.mock('/listAdd', /get|post/i, listAdd)

// 修改列表数据
let listUpdate = (opt) => {
  let rtype = opt.type.toLowerCase()
  switch (rtype) {
    case 'get':
      break
    case 'post':
      let obj = JSON.parse(opt.body).params.obj
      articles = articles.map(val => {
        return val.id === obj.id ? obj : val
      })
      break
    default:
      break
  }
  return articles
}

Mock.mock('listUpdate', /get|post/i, listUpdate)
