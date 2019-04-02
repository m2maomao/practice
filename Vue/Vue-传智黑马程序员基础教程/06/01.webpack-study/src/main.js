// 项目的JS入口文件
console.log('ok')

import './css/index.css'
import './css/index.scss'
// 注意：如果要通过路径的形式，去引入node_modules中相关的文件，可以直接省略路径前面的node_modules这一层目录，直接写包的名称，然后后面跟上具体的文件路径
// 不写 node_modules 这一层目录，默认就会去 node_modules 中查找
import 'bootstrap/dist/css/bootstrap.css'