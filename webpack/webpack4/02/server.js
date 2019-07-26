//express
let express = require('express');
let webpack = require('webpack');
let app = express();
let middle = require('webpack-dev-middleware');

let config = require('./webpack.config')
let compiler = webpack(config);

app.use(middle(compiler));

app.get('/user',(req,res) => {
  res.json({
    name:'michael 911'
  })
})

app.listen(3000);