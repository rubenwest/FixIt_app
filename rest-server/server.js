const express = require("express");
require('dotenv').config();
require('./db/mongodb'); 
const cors = require('cors');
const bodyParser = require("body-parser");

//Importamos el archivo de configuracion del servidor
require("./config/config");

//Asignamos el expres a nuestra aplicacion

const app = express();

//CORS
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true  }));
app.use('/public', express.static(`${__dirname}/storage/imgs`))
// parse application/json
app.use(bodyParser.json());

//Global routes
app.use(require("./routes/Index"));

//Generamos la escucha del servidor
app.listen(8081, () => console.log("Listening 8081 port"));



