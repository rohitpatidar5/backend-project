import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async() => {
    
    try {
       const connectionInstanc= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB connection !! DB HOST : ${connectionInstanc.connection.host}`);
        
    } catch (error) {

        console.log("MONGODB connection FAILED:", error);
        process.exit(1);
        
    }
} 



export default connectDB;
