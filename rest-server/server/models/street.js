const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const District = require("../models/district");

const streetSchema = new Schema({
    street: {
        type: String,
        required: true
    },
    district: { type: Schema.ObjectId, ref: District, required: true},

    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
});

streetSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("Street", streetSchema);