const express = require("express");
const router = express.Router();
const IncientType = require("../models/incident_type");
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

    IncientType.find({}, (err, incientTypes) => {
        res.status(200).send(incientTypes)
    })
});


//creamos el metodo post

router.post("/", (req, res) => {

    // expected output: "Hello World"

    let body = req.body;
    IncientType.find({ element: body.element }, (err, incientTypes) => {
        res.status(200).send(incientTypes);
    })
  });

router.put("/", (req, res) => {

    res.json("PUT IncientType");
});

router.delete("/", (req,res) => {
    res.json("DELETE IncientType");
})

module.exports = router;