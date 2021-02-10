const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const IncientTypes = require("../models/incients_types");
const R = require("ramda");

//Creamos el metodo get
router.get("/", (req, res) => {
    res.json("GET IncientTypes");
});

//creamos el metodo post

router.post("/", (req, res) => {
    res.json("POST IncientTypes");
});

router.put("/", (req, res) => {

    res.json("PUT IncientTypes");
});

router.delete("/", (req,res) => {
    res.json("DELETE IncientTypes");
})

module.exports = router;