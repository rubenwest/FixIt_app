const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const incientSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    priority: [{ type: Schema.Types.ObjectId, ref: 'incidents_types' }],

    state: {
        type: String
    },
    date: {
        type: Date
    }
});

incientSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("Incient", incientSchema);