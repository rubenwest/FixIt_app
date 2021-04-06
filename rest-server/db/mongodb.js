const mongoose = require('mongoose');

//Conexion con atlas

mongoose.connect(process.env.DB_HOST, {
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