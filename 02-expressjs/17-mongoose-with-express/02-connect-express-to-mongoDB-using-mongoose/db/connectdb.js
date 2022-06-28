import mongoose from "mongoose";

const connectDB = ()=>{
    return mongoose.connect("mongodb+srv://root:root@nodeapi.c1c5h.mongodb.net/schooldb?retryWrites=true&w=majority", ()=>{
        console.log("Connected with database");
    })
}

export default connectDB