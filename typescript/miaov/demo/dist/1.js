// console.log('Hello TypeScript!')
var inputs = document.querySelectorAll('input');
var btn = document.querySelector('button');
btn.onclick = function () {
    var result = Number(inputs[0].value) + Number(inputs[1].value);
    console.log(result);
};
