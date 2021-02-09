const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const R = require("ramda");

// const { verifyToken } = require("../middlewares/auth");

//Creamos el metodo get
router.get("/", /* verifyToken, */ (req, res) => {

    console.log("Estamos en el get");

});

//creamos el metodo post

router.post("/", (req, res) => {
    const body = req.body;

    const user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    })

    user.save((error, userDB) => {
        if (error !== null) {
            res.status(400).json({
                ok: false,
                error
            })
        } else {
            res.json({
                ok: true,
                user: userDB
            })
        }
    })
});

router.put("/", (req, res) => {

    const id = req.params.id

    res.json({
        id
    })
});

router.delete("/", () => {
    res.json("DELETE USER");
})


module.exports = router;