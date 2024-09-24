const express = require('express');
const router = express.Router();
const rapportController =  require('../controllers/rapports.controller');

router.get('/:patientId', rapportController.getListRapportsByPatients);

router.post('/:patientId', rapportController.addRapportToPatient);

module.exports = router;