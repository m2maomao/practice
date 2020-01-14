let express = require('express');
let bodyParser = require('body-parser');
let jwt = require('jwt-simple');
let cors = require('cors');
let app = express();
// 处理跨域
app.use(cors({
    origin:['http://localhost:8000'], // 来源
    Credentials:true,// 允许跨域发cookie
    allowedHeaders:"Content-Type,Authorization",// 允许请求头
    methods: { // 允许跨域方法
        GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS
    },
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.listen(4000);