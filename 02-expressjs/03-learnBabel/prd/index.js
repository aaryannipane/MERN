"use strict";

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send("Hello Aryan Che");
});
app.listen(3000, function () {
  console.log('Port 3000');
});