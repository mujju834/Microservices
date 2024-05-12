const express = require('express');
const { checkHealth } = require('../controllers/orderController');
const router = express.Router();

router.get('/health', checkHealth);

module.exports = router;
