var express = require('express');
var router = express.Router();
var BatismosController = require('../controllers/batismo')

/* GET home page. */
router.get('/', function(req, res, next) {
  BatismosController.list()
    .then(data => {
      res.status(200).jsonp(data);
    })
    .catch(err => {
      console.log("Something was wrong: ", {error: err});
    })
});

module.exports = router;
