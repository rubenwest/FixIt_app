const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Street = require("../models/street");
const R = require("ramda");

//Creamos el metodo get
router.get("/", (req, res) => {
    
  Street.find({}, (err, streets) => {
        res.status(200).send(streets)
    })
});


//creamos el metodo post

router.post("/", (req, res) => {

    // expected output: "Hello World"

    let body = req.body;
    let street = new Street({
        street: body.street,
        district: body.district,
        latitude: body.latitude,
        longitude: body.longitude
    });
  
    street.save((err, streetDB) => { 
      if (err) {
        console.log("Error al insertar calle: ",err);
        res.status(400).json({
          ok: false,
          err,
        });
      } else {
        console.log("insertada la calle: ",streetDB);
        res.json({
          ok: true,
          street: streetDB,
        });
      }
    });
  });

router.put("/", (req, res) => {

    res.json("PUT street");
});

router.delete("/", (req,res) => {
    res.json("DELETE street");
})

module.exports = router;