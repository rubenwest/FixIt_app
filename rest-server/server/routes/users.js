const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const R = require("ramda");

//Creamos el metodo get
router.get("/", (req, res) => {
    res.json("GET USER");
});

//creamos el metodo post

router.post("/", (req, res) => {
    res.json("POST USER");
});

router.put("/", (req, res) => {

    res.json("PUT USER");
});

router.delete("/", (req,res) => {
    res.json("DELETE USER");
})

module.exports = router;