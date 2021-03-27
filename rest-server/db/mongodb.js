const mongoose = require('mongoose');

//Conexion con atlas

mongoose.connect("mongodb+srv://rubenwest:Zangetsu2.@cluster0.nvm1m.mongodb.net/FixIt_app?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const conectDb = mongoose.connection;

conectDb.on("error", (error) => {
    console.log("Connection to DB error: ", error);
});

conectDb.once("open", () => {
    console.log("Connection to DB successful");
})

module.exports = conectDb;