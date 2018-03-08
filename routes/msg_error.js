var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  const body = req.body;

  console.log((body));

  res.send({
    code: '0000',
    msg: 'success',
    data: null
  });
});

module.exports = router;