// let hello: string = 'Hello TypeScript!'
// document.querySelectorAll('.app')[0].innerHTML = hello

import Vue from 'vue';
import Hello from './components/Hello.vue';

// let app1 = new Vue({
//     el: '.app',
//     data: {
//         name: 'TypeScript'
//     },
//     template: `<h1>Hello {{name}} </h1>`
// })

let app2 = new Vue({
    el: '.app',
    components: {
        Hello
    },
    template: '<Hello />'
})