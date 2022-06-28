import mongoose from "mongoose";

const connectDB = async ()=>{

    try{
        const result = await mongoose.connect("mongodb+srv://root:root@nodeapi.c1c5h.mongodb.net/sessiondb?retryWrites=true&w=majority")

        console.log("Connected to database");

        return result;
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB