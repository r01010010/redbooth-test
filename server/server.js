const data    = require('./data');
const express = require('express');
const app     = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.get('/board', function(req, res) {
  res.json(data);
});

app.listen(1508);
