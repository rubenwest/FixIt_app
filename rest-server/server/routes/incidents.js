const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Incient = require("../models/incident");
const R = require("ramda");

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
    let incident = new Incient({
        user: body.user,
        description: body.description,
        category: body.category,
        priority: body.priority,
        state: body.state,
        date: body.date
    });
  
    incident.save((err, incidentDB) => { 
      if (err) {
        console.log("Error al insertar: ",err);
        res.status(400).json({
          ok: false,
          err,
        });
      } else {
        console.log("insertada la incidencia: ",incidentDB);
        res.json({
          ok: true,
          incident: incidentDB,
        });
      }
    });
  });

router.put("/", (req, res) => {

    res.json("PUT Incient");
});

router.delete("/", (req,res) => {
    res.json("DELETE Incient");
})

module.exports = router;