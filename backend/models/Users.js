const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true, minlength: 3, maxlength: 20},
    email: {type: String, required: true, unique: true, minlength: 3, maxlength: 50},
    password: {type: String, required: true, minlength: 8, maxlength: 30},
}, {timestamps: true});