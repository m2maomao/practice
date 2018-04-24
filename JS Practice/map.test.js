// var data = [1,2,3,4];

// var arrayOfSquares = data.map(function(item,index){
//     return item ;
// })

// console.log('data==',data);
// console.log('arrayOfSquares==',arrayOfSquares);

var users = [
    {
        name:'张含韵',
        email:'zhang@email.com'
    },
    {
        name:'周杰伦',
        email:'zhou@163.com'
    },
    {
        name:'TWINS',
        email:'t@tom.com'
    }
];

var emails = users.map(function(user){
    return user.email;
});

console.log(emails);

console.log(emails.join(","));