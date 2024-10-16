const mongoose = require('mongoose');
require('dotenv').config(); // To load environment variables from a .env file
const DB_NAME = 'DB';

const CONNECT_DB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // await mongoose.connect('mongodb://localhost:27017/DB');

        console.log(`${process.env.MONGODB_URI}/${DB_NAME}`);
        
        console.log("Successfully connected to DB");
        
    } catch (error) {
        console.log("Error while connecting to DB: ", error);
        throw error;
    }
};

module.exports = CONNECT_DB;

