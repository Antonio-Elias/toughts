const express = require('express');
const router = express.Router();
const AughtController = require('../controllers/AuthController');

// Controller

router.get('/login', AughtController.login);
router.get('/register', AughtController.login);

module.exports = router;

