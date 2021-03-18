const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const districtSchema = new Schema({
    district: {
        type: String,
        required: true
    }
});

districtSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("District", districtSchema);