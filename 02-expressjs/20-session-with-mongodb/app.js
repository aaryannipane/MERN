import express  from "express";
import router from "./routes/web.js";
import session from "express-session";
import connectDB from "./db/connectdb.js";
import MongoStore from "connect-mongo";

const app = express();
const port = process.env.PORT || "3000";

// database connection
connectDB();

// session Mongodb
const sessionStorage = MongoStore.create({
    mongoUrl: "mongodb+srv://root:root@nodeapi.c1c5h.mongodb.net/sessiondb?retryWrites=true&w=majority",
    dbName:"sessiondb",
    collectionName:"sessions",
    ttl: 14*24*60*60,
    autoRemove:"native"
})

// session
app.use(session({
    name:"sessionAryan",
    secret:"iamkey",
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:120000},
    store:sessionStorage
}))

app.use("/", router);

app.listen(port, ()=>{
    console.log(`Server running at localhost:${port}`);
})