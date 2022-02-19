import mongoose from "mongoose";

const getConnection = ()=>{
    // return mongoose.createConnection('mongodb://localhost:27017/test', { useMongoClient: true })

    mongoose.connect('mongodb://localhost/test');

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    // we're connected!
    console.log("Connected");
    });

    return db;

}

export {getConnection}