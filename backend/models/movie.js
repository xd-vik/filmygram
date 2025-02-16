const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('../db/DB_Connect')

connectDB();

const movieSchema = new mongoose.Schema({
    "id":{type:String, unique:true,required:true},
    "title":{type:String,required:true},
    "description":{type:String,required:true},
    "avatarUrl":{type:String,required:true},
    "screenshotsUrl":{type:[String], required:true},
    "storyLine":{type:String,required:true},
    "downloadLinks":{
        "720p":{type:String,required:true},
        "1080p":{type:String,required:true}
    }
});

module.exports = mongoose.model('moviesList',movieSchema);