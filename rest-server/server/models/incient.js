const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const validCategories = {
    values: ["COMPLAINT", "REPORT", "SUGGESTION", "IMPROVEMENT", "CONGRATULATION", "COMPLAINT"],
    message: "{VALUE} is not a valid role"
};

const categorySchema = new Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        default: "REPORT",
        enum: validRoles
    },
    state: {
        type: String
    },
    date: {
        type: Date
    }
});

categorySchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("Category", categorySchema);