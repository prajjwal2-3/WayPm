const express = require('express');
const userroute = require('./user');
const accountroute = require('./account');
const router = express.Router()

router.use('./user',userroute);
router.use('./account',accountroute)

module.exports = router;