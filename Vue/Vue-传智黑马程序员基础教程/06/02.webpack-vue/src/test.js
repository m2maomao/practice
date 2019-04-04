// 这是 Node 中向外暴露成员的形式：
// module.exports = {}

// 在 ES6 中，也通过规范的形式，规定了ES6中如何导入和导出模块
// ES6 中导入模块，使用 import 模块名称 from '模块标识符' import '标识路径'

// 在ES6 中，使用export default 和 export向外暴露成员
var info = {
  name:'zs',
  age:20
}
export default info
/* export default {
  address:'北京'
} */
// 注意：export default 向外暴露的成员，可以使用任意的变量来接收
// 注意：在一个模块中，export default只允许向外暴露1次
// 注意：在一个模块中，可以同时使用 export default 和 export 向外暴露成员

export const title = '小星星'
export const content = '哈哈哈'
// 注意：使用 export 向外暴露的成员，只能使用{}的形式来接收，这种形式叫做【按需导入】
// 注意：export 可以向外暴露多个成员，同时，如果某些成员，我们在 import 的时候，不需要，则可以不在{}中定义
// 注意：使用 export 导出的成员，必须严格按照导出时候的名称，来使用 {} 按需接收；
// 注意：使用 export 导出的成员，如果就想换个名称来接收，可以使用 as 来起别名


// 在Node中，使用var 名称 = require('模块标识符')
// module.exports 和 exports 来暴露成员