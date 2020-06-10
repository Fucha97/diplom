const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    birthday: Date,
    password: String,
    fullname: String,
    famele: String
});

module.exports = mongoose.model('User', userSchema);
