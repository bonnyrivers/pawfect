var express = require('express');
var router = express.Router();
var petfinderCtrl = require('../controllers/petfinder');
var sheltersCtrl = require('../controllers/shelters');


router.get('/', petfinderCtrl.petDetails);
router.get('/show/:id', petfinderCtrl.show);
router.get('/shelters', sheltersCtrl.index);

module.exports = router;