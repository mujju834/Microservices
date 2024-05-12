const express = require('express');
const { getStatus } = require('../controllers/authController');
const router = express.Router();

router.get('/status', getStatus);

module.exports = router;
