import mongoose from "mongoose";
import { config } from "./config";



const connectDB = async () => {
 try{
    await  mongoose.connect(config.databaseUrl as string);
   mongoose.connection.on('connected', (err) => {
    console.log("connected to db sucessfully ", err);
   });

    mongoose.connection.on('error', (err) => {
        console.log('Error in connecting to database..', err);
    })
} catch(err){
    console.error("Failed to connect to database.", err);
     process.exit(1);
}
};

export default connectDB;