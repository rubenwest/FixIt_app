const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const validPriority = {
    values: ["Leve", "media", "alta"],
    message: "{VALUE} is not a valid role"
};

const incidentSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    category: [{ type: Schema.Types.ObjectId, ref: 'incidents_types' }],

    priority: {
        type: String,
        required: true,
        default: "Leve",
        enum: validPriority
    },
    state: {
        type: String
    },
    date: {
        type: Date
    }
});

incidentSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("Incident", incidentSchema);