var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//박성수 branch


//정민우 branch


//김율리 branch
router.get('/', function(req, res, next){
  res.send('world')
})

//김수현 branch


//남종현 branch

module.exports = router;
