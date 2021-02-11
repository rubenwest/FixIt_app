const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

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
app.use(require("./routes/index"));

//Generamos la conexion con la base de datos de MONGODB
mongoose.connect("mongodb://localhost:27017/complainst_app", {
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