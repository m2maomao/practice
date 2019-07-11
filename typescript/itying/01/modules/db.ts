var dbUrl = 'xxxxxx'

function getData():any[] {
  console.log('获取数据库的数据');
  return [
    {
      'title':'xxxxx'
    },
    {
      'title':'xxxxx'
    }
  ]
}

function save() {
  console.log('保存数据成功!')
}

export {
  dbUrl,
  getData,
  save
}