const express = require("express");
const {  addIncident, getIncidents, getAllIncidents, finishedIncident} = require('../controllers/incidentController');
const upload = require('../libs/storage');
const router = express.Router();

//packages import


router.post('/newIncident', upload.single('image'), addIncident);
router.post('/loadIncidents', getIncidents);
router.post('/finishedIncident', finishedIncident);
router.get('/', getAllIncidents);



module.exports = router;
