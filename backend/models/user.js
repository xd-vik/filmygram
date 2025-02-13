const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('../db/DB_Connect')

connectDB();

const userSchema = mongoose.Schema({
    userid: { type: String, required: true, unique: true },  
    password: { type: String, required: true },             
});

module.exports = mongoose.model('user',userSchema);