import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true, min:18, max:60},
    fees:{type:mongoose.Decimal128, required:true, validate:(fee)=> fee >= 5000.5}
});

// compile to model
const StudentModel = mongoose.model("college", studentSchema);

export default StudentModel;