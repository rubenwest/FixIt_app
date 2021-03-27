const express = require("express");
const {  addIncident, getIncidents, getAllIncidents} = require('../controllers/incidentController');
const upload = require('../libs/storage');
const router = express.Router();

//packages import


router.post('/newIncident', upload.single('image'), addIncident);
router.post('/loadIncidents', getIncidents);
router.get('/', getAllIncidents);



module.exports = router;
