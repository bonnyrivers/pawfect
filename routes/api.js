var express = require('express');
var router = express.Router();
var petfinderCtrl = require('../controllers/petfinder');


router.get('/', petfinderCtrl.petDetails);

module.exports = router;