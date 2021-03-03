const express = require("express");
const app = express();

app.use("/user", require("./Users"));
app.use("/incident", require("./Incidents"));
app.use("/district", require("./Districts"));
app.use("/incidents_types", require("./Incidents_types"));
app.use("/login", require("./Login"))
module.exports = app;
