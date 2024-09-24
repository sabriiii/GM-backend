const express = require('express');
const router = express.Router();
const doctorRouter = require('../controllers/doctor.controller');

router.get('/', doctorRouter.getListDoctors);
router.get('/:id', doctorRouter.getDoctor);
router.put('/:id', doctorRouter.updateDoctorProfile);
router.delete('/:id', doctorRouter.deleteDoctor);

module.exports = router;