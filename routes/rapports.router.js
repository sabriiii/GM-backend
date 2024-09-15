const express = require('express');
const router = express.Router();
const authRouter = require('../controllers/auth.controller');

router.get('/login', authRouter.Login);

module.exports = router;