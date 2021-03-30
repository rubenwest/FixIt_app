const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use("/user", require("./Users"));
app.use("/incident", require("./Incidents"));
app.use("/incident_type", require("./Incidents_types"));
app.use("/login", require("./Login"));
/* app.use("/loadIncidents", require("./LoadIncidents")); */
app.use("/loadIncidentsTypes", require("./LoadIncidentsTypes"));
app.use("/element", require("./Elements"));

app.use('/public', express.static(`${__dirname}/storage/imgs`))

module.exports = app;
