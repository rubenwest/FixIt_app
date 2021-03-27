const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const User = require("../models/user");
const IncidentType = require("../models/incident_type");
const Element = require("../models/element");

/* const IncidentsType = mongoose.model('IncidentsTypes'); */

const validPriority = {
    values: ["Leve", "media", "alta"],
    message: "{VALUE} is not a valid role"
};

const validState = {
    values: ["En proceso", "Gestionada", "Cerrada"],
    message: "{VALUE} is not a valid role"
};

const incidentSchema = new Schema({

    user: String,
    element: String,
    incidentType: String,
    description: String,
    priority: {
        type: String,
        required: true,
        default: "Leve",
        enum: validPriority
    },
    address: String,
    state:  {
        type: String,
        required: true,
        default: "En proceso",
        enum: validState
    }   
    ,date: {
        type: Date, 
        default: Date.now
    },
    imgUrl: String,
},{
    timestamps: true
});

incidentSchema.methods.setImgUrl = function setImgUrl (filename){
    
    this.imgUrl = `http://localhost:8081/public/${filename}`
    
}

incidentSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("Incident", incidentSchema);