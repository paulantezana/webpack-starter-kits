const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.render(path.join(__dirname,"public/index.html"));
});

app.listen(3008, function () {
  console.log('Example app listening on port 3008!');
});