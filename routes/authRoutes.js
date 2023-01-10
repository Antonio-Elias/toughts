const express = require('express');
const router = express.Router();
const AughtController = require('../controllers/AuthController');

// Controller

router.get('/login', AughtController.login);
router.get('/register', AughtController.register);
router.post('/register', AughtController.registerPost);
router.get('/logout', AughtController.logout);

module.exports = router;

