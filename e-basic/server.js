var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render("public/index.html")
});

app.listen(3008, function () {
  console.log('Example app listening on port 3008!');
});