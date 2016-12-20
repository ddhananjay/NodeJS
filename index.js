var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('mypage', { title: 'Hey', message: 'Hello there!' })
})
app.listen(3000);