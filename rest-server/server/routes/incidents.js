const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Incient = require("../models/incident");
const R = require("ramda");

//Creamos el metodo get
router.get("/", (req, res) => {
    res.json("GET Incient");
});

//creamos el metodo post

router.post("/", (req, res) => {
    res.json("POST Incient");
});

router.put("/", (req, res) => {

    res.json("PUT Incient");
});

router.delete("/", (req,res) => {
    res.json("DELETE Incient");
})

module.exports = router;