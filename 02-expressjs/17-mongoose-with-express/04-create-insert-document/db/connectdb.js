import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://root:root@nodeapi.c1c5h.mongodb.net/schooldb?retryWrites=true&w=majority");
        console.log("Connected to database");
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB;