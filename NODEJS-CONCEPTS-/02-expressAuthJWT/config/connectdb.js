import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        const DB_OPTIONS = {
            dbName:"jwtauth"
        }
        const result = await mongoose.connect(process.env.DB_URI, DB_OPTIONS);

        // remove below line in production
        console.log("Connected to database");
    } catch (err) {
        console.log(err);
    }
}

export default connectDB;