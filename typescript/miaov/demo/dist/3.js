function getData() {
    if (Math.random() < .5) {
        return 'miaov';
    }
    else {
        return ['1', '2', '3'];
    }
}
var result = getData();
if (result.push) {
    result.push();
}
else {
    result.substring(0);
}
console.log(result.length);
