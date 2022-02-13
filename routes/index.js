var express = require('express');
var router = express.Router();
var baseController = require('../controller/app-controller')

router.post('/', /* add validation if need,  */   baseController.baseController);

module.exports = router;
