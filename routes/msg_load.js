var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  const body = req.body;
  console.log(req.headers.referer);
  console.log(body);

  res.send({
    code: '0000',
    msg: 'success',
    data: null
  });
});

module.exports = router;
