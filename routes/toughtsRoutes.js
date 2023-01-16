const express = require('express');
const router = express.Router();
const ToughtController = require('../controllers/ToughtController');

//helpers
const checkAuth = require('../helpers/auth').checkAuth;

// Controller
router.get('/add', checkAuth, ToughtController.creatTought);
router.post('/add', checkAuth, ToughtController.creatToughtSave);
router.get('/dashboard', checkAuth, ToughtController.dashboard);
router.get('/', ToughtController.showToughts);

module.exports = router;

