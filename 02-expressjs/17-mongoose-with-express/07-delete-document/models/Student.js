import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number},
    comment:[{value:{type:String}}],
    fees:{type:mongoose.Decimal128},
    date:{type:Date, default:Date.now}
})

// compiling schema to collection
const studentModel = mongoose.model("student", studentSchema);


// delete document

const deleteDocById = async (id)=>{
    try{
        const result = await studentModel.findByIdAndDelete(id);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}


// delete one document
const deleteDocOne = async (age)=>{
    try{
        // const result = await studentModel.deleteOne({_id:id});
        const result = await studentModel.deleteOne({age:age});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

// delete many document
const deleteManyDoc = async (age)=>{
    try{
        // const result = await studentModel.deleteMany({_id:id});
        const result = await studentModel.deleteMany({age:age});
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

export {deleteDocById, deleteDocOne}