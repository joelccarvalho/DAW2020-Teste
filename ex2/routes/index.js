var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/classes', function(req, res, next) {
  axios.get('http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=' + req.cookies.token)
    .then(data => 
      {
        res.render('classes', {data: data.data})
      }
    )
    .catch(e => res.render('error', {error: e}))
});


router.get('/classes/:classe', function(req, res, next) {
  var classe = req.params.classe;
  axios.get('http://clav-api.di.uminho.pt/v2/classes/c' + classe +'?&token=' + req.cookies.token)
    .then(data => 
      {
        res.render('classeIndividual', {data: data.data})
      }
    )
    .catch(e => res.render('error', {error: e}))
});

router.get('/termosIndice', function(req, res, next) {
  axios.get('http://clav-api.di.uminho.pt/v2/termosIndice?token=' + req.cookies.token)
    .then(data => 
      {
        res.render('termosIndice', {data: data.data})
      }
    )
    .catch(e => res.render('error', {error: e}))
});

module.exports = router;
