const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());

app.use("/user", require("./Users"));
app.use("/incident", require("./Incidents"));
app.use("/district", require("./Districts"));
app.use("/incident_type", require("./Incidents_types"));
app.use("/login", require("./Login"));
app.use("/search", require("./Search"));
app.use("/loadIncidents", require("./LoadIncidents"));
app.use("/street", require("./Streets"));
app.use("/element", require("./Elements"));
module.exports = app;
