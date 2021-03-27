const express = require("express");
const router = express.Router();
const Incient = require("../models/incident");
const app = express();

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

//Creamos el metodo get
router.get("/", (req, res) => {
    res.send("holaa este es el get")
});


//creamos el metodo post

router.post("/", (req, res) => {

    // expected output: "Hello World"

    let body = req.body;
    console.log("lo que llega a loadIncidents: ",body.user);
    Incient.find({ email: body.email }, (err, incidents) => {
        console.log("Encontramos: ", incidents);
        res.status(200).send(incidents);
    })
  });

router.put("/", (req, res) => {

    res.json("PUT Incient");
});

router.delete("/", (req,res) => {
    res.json("DELETE Incient");
})

module.exports = router;