const express = require("express");
const router = express.Router();
const Incient = require("../models/incident");

//Creamos el metodo get
router.get("/", (req, res) => {
    
    Incient.find({}, (err, incidents) => {
        res.status(200).send(incidents)
    })
});


//creamos el metodo post

router.post("/", (req, res) => {

    // expected output: "Hello World"

    let body = req.body;
    Incient.find({}, (err, incidents) => {
        res.status(200).send(incidents)
    })
  });

router.put("/", (req, res) => {

    res.json("PUT Incient");
});

router.delete("/", (req,res) => {
    res.json("DELETE Incient");
})

module.exports = router;