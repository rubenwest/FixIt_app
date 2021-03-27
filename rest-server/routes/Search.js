const express = require("express");
const router = express.Router();
const User = require("../models/user");
const app = express();
var cors = require('cors');
app.use(cors());

router.post("/", (req, res) => {
                try {
                    console.log("body: ",req.body);
                    const body = req.body;
                    User.findOne({ email: body.email }, (error, userDB) => {
                    
                        console.log("error: ",error);
                        console.log("userDB: ",userDB);

                    if (error !== null) {
                        
                        console.log("error De servidor: ",error);
                        return res.status(500).json({
                                            ok: false,
                                            error
                                        })
                    }
                    if (userDB == null) {
                        console.log("Devolvemos ok para hacer el alta");
                        res.json({
                            ok: true,
                            user: userDB
                        })
                    }else{
                        console.log("Usuario encontrado: ",userDB);
                        return res.status(401).json({
                                            ok: false,
                                            message: "User already exists"
                                        })
                    }

                    })
                } catch (error) {
                    console.log(error)
                        res.status(500).json({
                            message: "Internal error Search"
                        })
                    }
});

module.exports = router;