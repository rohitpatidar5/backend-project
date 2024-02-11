

 //require('dotenv').config({path: './env'})
 //the above require syntax are distrubring the code consistency of using import sytax so we have to use the import syntax as an experimental features

import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path: './env'
})

connectDB();




// another mehtod to connect the db all inside the index file by using iffe
/* import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";

const app = express()   


(async() => {

    try {

        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERROR:" , error);
            throw err;
        })

        app.listen(process.env.PORT, (() => {
            console.log(`App is listening on port${process.env.PORT}`);
        }))
        
    } catch (error) {

        console.error("ERROR:",error);
        throw err;
        
    }
})();*/