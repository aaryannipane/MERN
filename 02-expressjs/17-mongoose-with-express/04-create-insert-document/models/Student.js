import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number},
    comment:[{value:{type:String}}],
    date:{type:Date, default:Date.now}
})

// compiling schema to collection
const studentModel = mongoose.model("student", studentSchema);

/* const rahulDoc = studentModel({
    name:"rahul",
    age:20,
    comment:[{value:"good"}],
}) */


// ...

// insert many doc
/* try{
    const result = studentModel.insertMany([rahulDoc, sumanDoc, kunalDoc]);
    console.log(result);
}catch(err){
    console.log(err);
} */

// export this model
export default studentModel;