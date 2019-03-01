var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

router.get('/', usersCtrl.index);

router.get('/saved', usersCtrl.showSaved);

router.get('/profile/:id', usersCtrl.showProfile);

router.put('/profile/:id', usersCtrl.updateDescription);

router.post('/save/:id', usersCtrl.saveDog);

router.delete('/saved/:id', usersCtrl.delete)

module.exports = router;
