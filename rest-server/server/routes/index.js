const express = require("express");
const app = express();

app.use("/user", require("./users"));
app.use("/incident", require("./incidents"));
app.use("/district", require("./districts"));
app.use("/incidents_types", require("./incidents_types"));
app.use("/login", require("./login"))
module.exports = app;
