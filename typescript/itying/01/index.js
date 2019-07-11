// function sum(...result:number[]):number {
//   var sum = 0;
//   for(var i=0; i<result.length; i++) {
//       sum += result[i]
//   }
//   return sum
// }
// console.log(sum(1,2,3,4));
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('成功!');
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    url: 'http://a.itying.com/api/productlist',
    dataType: 'json'
});
