import mongoose from "mongoose";


// defining schema
const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age :{type:Number, required:true, min:18, max:50},
    fees:{type:mongoose.Decimal128, required:true, validate: v=> v>5500.50},
    hobies:{type:Array},
    isactive:{type:Boolean},
    comment:[{value:{type:String}, published:{type:Date, default:Date.now}}],
    join:{type:Date, default:Date.now},
})


// to get properties of age from schema use
console.log(studentSchema.path('age'));


// compiling schema
const studentModel = mongoose.model("student", studentSchema);