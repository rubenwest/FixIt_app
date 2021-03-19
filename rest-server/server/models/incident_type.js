const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const incidentTypeSchema = new Schema({
    incidentType: {
        type: String,
        required: true
    }
});

incidentTypeSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("Incident_type", incidentTypeSchema);