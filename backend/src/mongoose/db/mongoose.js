const mongoose = require("mongoose");
// const mongoURI = "mongodb://127.0.0.1:27017/hritwij-webapp"
const dotenv = require('dotenv').config();
const mongoURI = process.env.MONGO_URI

const connectToMongo = () =>{

    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongo Successfully");
        
    })
}

module.exports = connectToMongo;