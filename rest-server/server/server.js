const express = require("express");

//Asignamos el expres a nuestra aplicacion
const app = express();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


//Creamos el metodo get
app.get("/user", (req, res) => {

    console.log("Estamos en el get");
    res.json("GET local user");
});

//creamos el metodo post
app.post("/user", (req, res) => {

    const body = req.body;

    res.json({
        user: body
    });
});

app.put("/user/:id", (req, res) => {

    const id = req.params.id

    res.json({
        id
    })
});

// app.delete("/user", () => {
//     res.json("DELETE USER");
// })

//Generamos la escucha del servidor
app.listen(3000, () => {
    console.log("Listening 3000 port");
});