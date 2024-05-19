const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String // Storing hashed passwords
});

module.exports = mongoose.model('User', userSchema);