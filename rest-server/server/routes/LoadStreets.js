const express = require("express");
const router = express.Router();
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
    res.send("holaa este es el get");
    console.log("Esto funciona");
});


//creamos el metodo post

router.post("/", (req, res) => {

    res.status(200).send("Hola este es el post");
    
  });


module.exports = router;