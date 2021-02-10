const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const incidentsTypesSchema = new Schema({
    category: {
        type: String,
        required: true
    }
});

incidentsTypesSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("IncidentsTypes", incidentsTypesSchema);