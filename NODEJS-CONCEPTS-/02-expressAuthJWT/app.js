import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/connectdb.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT;

// CORS POLICY
app.use(cors());

// connection with database
connectDB();

// to acccept json data
app.use(express.json());

// load user routes
app.use("/api/user", userRoutes);


app.listen(port, ()=>{
    console.log(`Server running http://localhost:${port}`);
})

