const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const R = require('ramda');
const cors = require('cors');

//Asignamos el expres a nuestra aplicacion

//Importamos el archivo de configuracion del servidor
require("./config/config");
const app = express();
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

//Global routes
app.use(require("./routes/Index"));

//Generamos la conexion con la base de datos de MONGODB
/* mongoose.connect("mongodb://localhost:27017/complaints_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});
 */
//Conexion con atlas



 mongoose.connect("mongodb+srv://rubenwest:Zangetsu2.@cluster0.nvm1m.mongodb.net/FixIt_app?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
    console.log("Connection to DB error: ", error);
});

db.once("open", () => {
    console.log("Connection to DB successful");
})

//Generamos la escucha del servidor
app.listen(3000, () => {
    console.log("Listening 3000 port");
});