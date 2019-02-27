var express = require('express');
var router = express.Router();
var petfinderCtrl = require('../controllers/petfinder');


router.get('/', petfinderCtrl.petDetails);
router.get('/show/:id', petfinderCtrl.show);

module.exports = router;