import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () =>{
    try {
        const uri = `${process.env.MONGO_URI}/${DB_NAME}?retryWrites=true&w=majority`;
        const connectionInstance = await mongoose.connect(uri);
        console.log(`\n mongoDB connected. DB HOST: ${connectionInstance.connection.host}`);  
    } catch (error) {
        console.log("mongoDB connection error", error);
        process.exit(1);
        
    }
};
export default connectDB