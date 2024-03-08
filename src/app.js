import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//now we have to configure the cors and cookie-parser we can configure them by making them app
//configuring the cors
app.use(cors({
    origin: process.env.CORS_ORIGIN, //CORS_ORIGIN we define it into the .env file| in .env we have given CORS_ORIGIN=*, * means from anywhere i can accept the request but this is not the standard practise we to specific mention the url form which the request is comming
    
    //we can do setting in cors,this is setting which tell as which origin you r allowing--> this setting tells us form where in front end i can accept the request in backend
    credential: true
}))    // use() is use for middlerware



//three major configuration
// data are comming in backend for many places (like url json body form) so we have to write best practise that limit of json fiel etc.

app.use(express.json({limit: "16kb"})) //earlyer express simply cant take the json file easily we have to use body-parser but no need now
app.use(express.urlencoded({extended: true, limit: "16kb"})) // space = + %20
app.use(express.static("public")) //store file and folder

app.use(cookieParser())//it allow the server to access the cookies of the user browser and perform CURD operation(sequerity)


export { app };
