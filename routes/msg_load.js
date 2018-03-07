var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = req.query;
  console.log(query);
  res.send({
    code: '0000',
    msg: 'success',
    data: null
  });
});

module.exports = router;
