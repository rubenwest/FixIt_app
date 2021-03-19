const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const User = require("../models/user");
const IncidentType = require("../models/incident_type");

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

    user: { type: Schema.ObjectId, ref: User, required: true} 
    ,
    
    description: {
        type: String,
        required: true
    },

    incidentType: { type: Schema.ObjectId, ref: IncidentType, required: true 
            },
    priority: {
        type: String,
        required: true,
        default: "Leve",
        enum: validPriority
    },
    state:  {
        type: String,
        required: true,
        default: "En proceso",
        enum: validState
    }   
    ,date: {
        type: Date, 
        default: Date.now
    }
    
});

incidentSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("Incident", incidentSchema);