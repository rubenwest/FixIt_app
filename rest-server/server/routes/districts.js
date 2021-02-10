const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const District = require("../models/district");
const R = require("ramda");

//Creamos el metodo get
router.get("/", (req, res) => {
    res.json("GET District");
});

//creamos el metodo post

router.post("/", (req, res) => {
    res.json("POST District");
});

router.put("/", (req, res) => {

    res.json("PUT District");
});

router.delete("/", (req,res) => {
    res.json("DELETE District");
})

module.exports = router;