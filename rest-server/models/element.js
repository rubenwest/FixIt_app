const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const elementSchema = new Schema({
    element: {
        type: String,
        required: true
    }
});

elementSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("Element", elementSchema);