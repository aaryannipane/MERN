import express  from "express";
import router from "./routes/web.js";
import session from "express-session";

const app = express();
const port = process.env.PORT || "3000";


// session
app.use(session({
    name:"sessionAryan",
    secret:"iamkey",
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:120000},
}))

app.use("/", router);

app.listen(port, ()=>{
    console.log(`Server running at localhost:${port}`);
})