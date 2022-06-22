import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();
const port = process.env.PORT || "3000";

app.get("/", (req, res)=>{
    res.send("Hello");
})


app.listen(port, ()=>{
    console.log(`server running on ${port} port`);
})