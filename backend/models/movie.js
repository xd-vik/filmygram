const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('../db/DB_Connect')

connectDB();

const movieSchema = mongoose.Schema({
    id:{type:Number, unique:true},
    title:String,
    overview:String,
    img1:String,
    img2:String,
    img3:String,
    dlink1:String,
    dlink2:String,
    dlink3:String
})

module.exports = mongoose.model('movieCollections',movieSchema);