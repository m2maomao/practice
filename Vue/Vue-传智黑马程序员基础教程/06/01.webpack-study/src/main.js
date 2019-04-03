// 项目的JS入口文件
console.log('ok')

import './css/index.css'
import './css/index.scss'
// 注意：如果要通过路径的形式，去引入node_modules中相关的文件，可以直接省略路径前面的node_modules这一层目录，直接写包的名称，然后后面跟上具体的文件路径
// 不写 node_modules 这一层目录，默认就会去 node_modules 中查找
import 'bootstrap/dist/css/bootstrap.css'

// class 关键字，是ES6中提供的新语法，是用来实现ES6中面向对象编程的方式
class Person {
  // 使用static关键字，可以定义静态属性
  // 所谓的静态属性就是可以直接通过类名，直接访问的属性
  // 实例属性：只能通过类的实例，来访问的属性，叫做实例属性
  static info = {
    name:'zs',
    age:20
  }
}

// 访问Person类身上的info静态属性
console.log(Person.info)
// 在 webpack 中，默认只能处理一部分ES6的新语法，一些更高级的ES6语法或者ES7语法，webpack是处理不了的；这时候，就需要借助于第三方的 loader，来帮助webpack处理这些高级的语法，当第三方的loader把高级语法转为低级的语法之后，会把结果交给 webpack 去打包到bundle.js中
// 通过 Babel，可以帮我们将高级的语法转换为低级的语法
// 1在webpack中，可以运行如下两套命令，安装两套包，去安装 Babel 相关的loader功能：
// 1.1第一套包：cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// 1.2第二套包：cnpm i babel-preset-env babel-preset-stage-0 -D
// 2.打开 webpack 的配置文件，在module节点下的 rules 数组中，添加一个新的匹配规则：
// 2.1 { test: /\.js$/, use: 'babel-loader', exclude:/node_modules/}
// 2.2 注意：在配置 babel 的loader规则的时候，必须把node_modules目录，通过exclude选项排除掉：原因有俩：
// 2.2.1 如果不排除node_modules，则Babel会把 node_modules 中所有的第三方JS文件，都打包编译，这样，会非常消耗CPU，同时，打包速度非常慢；
// 2.2.2 哪怕，最终，Babel把所有node_modules中的JS转换完毕了，但是，项目也无法正常运行！
// 3.在项目的根目录中，新建一个叫做 .babelrc 的Babel配置文件，这个配置文件，属于JSON格式，所以，在写.babelrc配置的时候，必须符合JSON语法规范：不能写注释，字符串必须用双引号
// 3.1 在 .babelrc 写如下配置：
// {
//   "presets":["env","stage-0"],
//   "plugins":["transform-runtime"]
// }


// Java C# 实现面向对象的方式完全一样，class是从后端语言中借鉴过来，来实现面向对象
// var p1 = new Person()