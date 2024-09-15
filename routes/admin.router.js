const express = require('express');
const router = express.Router();
const adminRouter = require('../controllers/admin.controller');

router.put('/accept/doctors/:id', adminRouter.acceptDoctorRequests);

module.exports = router;