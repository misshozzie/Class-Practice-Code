var express = require('express');
var  moviesCtrl = require('../controllers/movies')
var router = express.Router();

router.get('/', moviesCtrl.index);
router.get('/new', moviesCtrl.new);
router.get('/:id', moviesCtrl.show);
router.post('/', moviesCtrl.create);

module.exports = router;