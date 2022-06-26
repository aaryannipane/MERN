import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(uri, options);
        console.log("Connected to database");
    }
    catch(err){
        console.log(err);
    }
}