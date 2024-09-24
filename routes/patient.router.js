const express = require('express');
const router = express.Router();
const patientRouter = require('../controllers/patient.controller');

router.get('/', patientRouter.getListPatient);
router.get('/:id', patientRouter.getPatient);
router.put('/:id', patientRouter.updateProfilePatient);
router.delete('/:id', patientRouter.deletePatient);


module.exports = router;