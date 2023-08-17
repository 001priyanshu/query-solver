const express = require('express');
const router = express.Router();
const {registerCustomer,loginCustomer,loginAgent} = require('../controllers/user')

router.post('/registeruser',registerCustomer);
router.post('/logincustomer',loginCustomer);
router.post('/loginagent',loginAgent);

module.exports = router;