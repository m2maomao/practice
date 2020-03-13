import $ from 'jquery'

$('.app').css('color', 'red')

globalLib({x: 1})
globalLib.doSomething()

import moduleLib from './module-lib';
moduleLib.doSomething()

import umdLib from './umd-lib';
umdLib.doSomething()

import m from 'moment';
// 给外部类库增加自定义方法<添加声明>
declare module 'moment' {
    export function myFunction(): void
}
m.myFunction = () => {}

// 全局插件
declare global {
    namespace globalLib {
        function doAnything(): void
    }
}
globalLib.doAnything = () => {}

