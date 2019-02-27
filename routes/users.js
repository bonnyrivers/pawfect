var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);

router.get('/saved', usersCtrl.showSaved);

router.post('/save/:id', usersCtrl.saveDog);

router.delete('/saved/:id', function(req, res, next) {

})

module.exports = router;
