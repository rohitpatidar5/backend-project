
import { app } from "./app.js";
 //require('dotenv').config({path: './env'})
 //the above require syntax are distrubring the code consistency of using import sytax so we have to use the import syntax as an experimental features 
 // then we have to config the dotenv and have to change in package.json file add experimental features

import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
    path: './env'
})

connectDB()
//we are using .then .catch because dbconnect return the promise which give us the ability to use this things
.then( () =>{

    // sir given this assignment but i dont know where should i put this code
 /*   app.on("error", (error) =>{
       console.log("ERR:", error);
        throw error
    })  */

// to start the server
//we have connected the database but our application have not started the listening using that database so we write the below code
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`app listening on port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection failed!!!", err);
})




// another mehtod to connect the db all inside the index file by using iffe but it polute the index file(many code)
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