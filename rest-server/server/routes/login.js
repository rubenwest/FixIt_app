const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const R = require("ramda");

//creamos el metodo post

router.post("/", (req, res) => {
    res.json("POST LOGIN");
});


module.exports = router;