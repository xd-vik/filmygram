const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('../db/DB_Connect')

connectDB();

const userSchema = mongoose.Schema({
    userid: { type: String, required: true, unique: true }, // Ensures unique user IDs
    password: { type: String, required: true },            // Ensures password is required
});

module.exports = mongoose.model('user',userSchema);