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


// UPDATE DOCUMENT


// 
const updateDocById = async (id)=>{
    try{
        // const result = await studentModel.findByIdAndUpdate(id, {name:"Nipane Aryan"});
        const result = await studentModel.findByIdAndUpdate(id, {name:"Geek"}, {returnDocument:"after"});
        console.log(result)
    }catch(err){
        console.log(err)
    }
}


// update single document
const updateSingleDoc = async (id)=>{
    try{
        // const result = await studentModel.updateOne({_id:id}, {name:"sujit"});

        // filter by age
        const result = await studentModel.updateOne({age:19}, {name:"arijit singh"});

        // upserted option if not present then it create new doc
        // const result = await studentModel.updateOne({_id:id}, {name:"ajit"}, {upsert:true});

        console.log(result)
    }
    catch(err){
        console.log(err);
    }
}



// update many documents
const updateManyDoc = async (a) =>{
    try{
        const result = await studentModel.updateMany({age:a}, {name:"yahooooo"}, {upsert:true});

        console.log(result)
    }
    catch(err){
        console.log(err);
    }
}


export {updateDocById, updateSingleDoc, updateManyDoc};