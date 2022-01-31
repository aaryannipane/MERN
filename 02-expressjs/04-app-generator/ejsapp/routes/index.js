var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // index is file name
  res.render('index', { title: 'Aryan Nipane', message: 'This Application is Created and run using express' });
});

module.exports = router;
