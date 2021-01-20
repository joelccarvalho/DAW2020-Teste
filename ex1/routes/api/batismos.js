var express = require('express');
var router = express.Router();
var BatismosController = require('../../controllers/batismo')

router.get('/', function(req, res, next) {

  let ano = req.query.ano;

  if (ano != undefined) { //?ano=...
    BatismosController.findAno(ano)
    .then(data => {
      res.status(200).jsonp(data);
    })
    .catch(err => {
      console.log("Something was wrong: ", {error: err});
    })
  }
  else {
    BatismosController.list()
    .then(data => {
      res.status(200).jsonp(data);
    })
    .catch(err => {
      console.log("Something was wrong: ", {error: err});
    })
  }
});

router.get('/batisado', function(req, res, next) {
  BatismosController.findBatizados()
    .then(data => {
      res.status(200).jsonp(data);
    })
    .catch(err => {
      console.log("Something was wrong: ", {error: err});
    })
});

router.get('/progenitores', function(req, res, next) {
  BatismosController.findProgenitores()
    .then(data => {
      res.status(200).jsonp(data);
    })
    .catch(err => {
      console.log("Something was wrong: ", {error: err});
    })
});

router.get('/stats', function(req, res, next) {
  BatismosController.findStats()
    .then(data => {
      res.status(200).jsonp(data);
    })
    .catch(err => {
      console.log("Something was wrong: ", {error: err});
    })
});

router.get('/:id', function(req, res, next) {
  var id = req.params.id;

  BatismosController.findSimple(id)
    .then(data => {
      res.status(200).jsonp(data);
    })
    .catch(err => {
      console.log("Something was wrong: ", {error: err});
    })
});

module.exports = router;
