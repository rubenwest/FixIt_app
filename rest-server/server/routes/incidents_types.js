const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const IncientType = require("../models/incidents_types");
const R = require("ramda");

//Creamos el metodo get
router.get("/", (req, res) => {
    res.json("GET IncientTypes");
});

//creamos el metodo post

router.post("/", (req, res) => {

    // expected output: "Hello World"

    let body = req.body;
    let incientType = new IncientType({
        category: body.category
    });
  
    incientType.save((err, incientTypeDB) => { 
      if (err) {
        console.log("Error al insertar categoria: ",err);
        res.status(400).json({
          ok: false,
          err,
        });
      } else {
        console.log("insertada la categoria: ",incientTypeDB);
        res.json({
          ok: true,
          incientType: incientTypeDB,
        });
      }
    });
  });

router.put("/", (req, res) => {

    res.json("PUT IncientTypes");
});

router.delete("/", (req,res) => {
    res.json("DELETE IncientTypes");
})

module.exports = router;