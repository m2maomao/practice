function getData():string| string[] {
  if(Math.random() < .5) {
    return 'miaov'
  } else {
    return ['1', '2', '3']
  }
}

var result: string | string[] = getData();

if((<string[]>result).push) {
  (<string[]>result).push();
} else {
  (<string>result).substring(0);
}
console.log(result.length)