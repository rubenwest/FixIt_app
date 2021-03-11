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

  // expected output: "Hello World"

  let body = req.body;
  let user = new User({
    name: body.first_name.concat(' ',body.last_name),
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
  });

  user.save((err, userDB) => {
    if (err) {
      console.log("Error al insertar: ",err);
      res.status(400).json({
        ok: false,
        err,
      });
    } else {
      console.log("insertardo el maquina: ",userDB);
      res.json({
        ok: true,
        user: userDB,
      });
    }
  });
});

router.put("/", (req, res) => {

    res.json("PUT USER");
});

router.delete("/", (req,res) => {
    res.json("DELETE USER");
})

module.exports = router;