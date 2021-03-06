const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const IncidentType = require("../models/incident_type");
const R = require("ramda");

//Creamos el metodo get
router.get("/", (req, res) => {
    res.json("GET IncientTypes");
});

//creamos el metodo post

router.post("/", (req, res) => {

    // expected output: "Hello World"

    let body = req.body;
    let incidentType = new IncidentType({
      incidentType: body.incidentType,
      element: body.element
    });
  
    incidentType.save((err, incidentTypeDB) => { 
      if (err) {
        res.status(400).json({
          ok: false,
          err,
        });
      } else {
        res.json({
          ok: true,
          incidentType: incidentTypeDB,
        });
      }
    });
  });

router.put("/", (req, res) => {

    res.json("PUT incidentType");
});

router.delete("/", (req,res) => {
    res.json("DELETE incidentType");
})

module.exports = router;