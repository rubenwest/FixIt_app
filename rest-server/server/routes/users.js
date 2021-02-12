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
    let body = req.body;

  let user = new User({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
  });

  user.save((err, userDB) => {
    if (err) {
      res.status(400).json({
        ok: false,
        err,
      });
    } else {
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