const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;
const validRoles = {
    values: ["ADMIN", "USER"],
    message: "{VALUE} is not a valid role"
};

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        default: "USER",
        enum: validRoles
    },
    state: {
        type: Boolean,
        default: true
    }
});

userSchema.methods.toJSON = function() {

    const user = this;
    const userObject = user.toObject();
    delete userObject.password;

    return userObject;

}

userSchema.plugin(uniqueValidator, { message: "{PATH} should be unique" });

module.exports = mongoose.model("User", userSchema);