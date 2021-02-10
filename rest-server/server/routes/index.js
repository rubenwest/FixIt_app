const express = require("express");
const app = express();

app.use("/user", require("./users"));
app.use("/incient", require("./incients"));
app.use("/district", require("./districts"));
app.use("/incidents_types", require("./incidents_types"));
module.exports = app;
