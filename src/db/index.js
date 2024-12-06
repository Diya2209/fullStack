import mongoose from "mongoose";
import { DB_NAME } from "../constatnts.js";


const connectDB = async() => {
    try { 
        const connectionInstance = await mongoose.connect(`${process.env.MONNGODB_URI}/${DB_NAME}`)
        console.log(`\nMONOGO DB connected!! DB HOST ${connectionInstance} ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB;  //exporting the function to use it in other files  //connectDB()