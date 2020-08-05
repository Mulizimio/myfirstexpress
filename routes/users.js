var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  let name = req.query.name;
  res.send('你好'+name);
});

module.exports = router;
