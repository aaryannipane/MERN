import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const result = await mongoose.connect("mongodb+srv://root:root@nodeapi.c1c5h.mongodb.net/collegedb?retryWrites=true&w=majority");

        console.log("connected to database collegedb");

        return result;
    }
    catch(er){
        console.log(er);
    }
}

export default connectDB;