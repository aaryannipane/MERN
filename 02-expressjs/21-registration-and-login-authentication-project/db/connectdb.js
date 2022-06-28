import mongoose from "mongoose";

const connectDB = async ()=>{

    try{
        const result = await mongoose.connect("mongodb+srv://root:root@nodeapi.c1c5h.mongodb.net/rlauth?retryWrites=true&w=majority")

        console.log("Connected to database rlauth");

        return result;
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB