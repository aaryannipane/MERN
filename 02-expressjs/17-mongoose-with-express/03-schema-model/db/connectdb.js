import mongoose from "mongoose";

const connectDB = async ()=>{
    
    try{
        await mongoose.connect("mongodb+srv://root:root@nodeapi.c1c5h.mongodb.net/schooldb?retryWrites=true&w=majority", ()=>{
            console.log("connected to databse");
        })
    }catch(e){
        console.log(e);
    }
    
}

export default connectDB;