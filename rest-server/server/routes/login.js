const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const R = require("ramda");

//creamos el metodo post

router.post("/", (req, res) => {

    try {

        const body = req.body;
        

        User.findOne({ email: body.email }, (error, userDB) => {

            if (error !== null) {

                return res.status(500).json({
                    ok: false,
                    error
                })
            }

            if (userDB == null) {
                return res.status(400).json({
                    ok: false,
                    error: {
                        message: email,
                        message: password,
                        message: bcrypt.hashSync(body.password, 10),
                        message: "invalid (User) or password"
                    }
                })
            }

            if (!bcrypt.compareSync(body.password, userDB.password)) {
                return res.status(400).json({
                    ok: false,
                    error: {
                        message: "invalid User or (password)"
                    }
                })
            }

            const token = jwt.sign(
                {
                  user: userDB,
                },
                process.env.SEED,
                { expiresIn: process.env.TOKEN_EXPIRY }
            );
          
            res.json({
                ok: true,
                user: userDB,
                token,
            });

        })

    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "Internal error login"
        })
    }
    
    
});


module.exports = router;