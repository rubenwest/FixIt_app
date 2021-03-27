const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Element = require("../models/element");
const R = require("ramda");

//Creamos el metodo get
router.get("/", (req, res) => {
    
    Element.find({}, (err, elements) => {
        res.status(200).send(elements)
    })
});


//creamos el metodo post

router.post("/", (req, res) => {

    // expected output: "Hello World"

    let body = req.body;
    let element = new Element({
        element: body.element
    });
  
    element.save((err, elementDB) => { 
      if (err) {
        console.log("Error al insertar calle: ",err);
        res.status(400).json({
          ok: false,
          err,
        });
      } else {
        console.log("insertada la calle: ",elementDB);
        res.json({
          ok: true,
          element: elementDB,
        });
      }
    });
  });

router.put("/", (req, res) => {

    res.json("PUT element");
});

router.delete("/", (req,res) => {
    res.json("DELETE element");
})

module.exports = router;