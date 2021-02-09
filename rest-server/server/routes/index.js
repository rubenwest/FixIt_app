const express = require("express");
const app = express();

app.use("/user", require("./users"));

module.exports = app;