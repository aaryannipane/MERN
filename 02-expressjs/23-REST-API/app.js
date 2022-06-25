import express from "express";
import connectDB from "./db/connectdb.js";
import router from "./routes/web.js";

const app = express();
const port = process.env.PORT || "3000";

// make connection with database
connectDB();

// use cors middleware aswell so we can make request from different sites

// for every api we have to use express.json() 
// that will take data that is in json and we can access it
app.use(express.json());


// use this to accept Form-encode data 
app.use(express.urlencoded({extended:true}));

app.use("/", router);

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
})