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


var createData = async ()=>{
    const newDoc = studentModel({
        name:"Babu",
        age:20,
        comment:[{value:"Smart boy"}],
        fees:5500.05
    })
    
    const result = await newDoc.save();
}

// createData();


// retrieve all documents
const getAllDoc = async ()=>{
    const result = await studentModel.find();
    console.log(result);

    // print name from each document from returned array 
    result.forEach((item)=>{
        console.log(item.name);
        if(item.name === "Babu"){
            console.log(item.fees.toString());
        }
    })
}


// Retrieve Specific Field of All Documents
const getAllDocSpecificField = async ()=>{
    // const result = await studentModel.find().select("name age"); // include that fields
    // const result = await studentModel.find().select(["name", "age"]); // include
    // const result = await studentModel.find().select({name:1, age:1}); // include


    const result = await studentModel.find({}, 'name age'); // include


    // exclude fields
    //  const result = await studentModel.find().select("-name -age"); // exclude that fields
    // const result = await studentModel.find().select(["-name", "-age"]); // exclude
    // const result = await studentModel.find().select({name:0, age:0}); // exclude

    console.log(result);
}


// Retrieve Single Document
const getSingleDoc = async ()=>{
    const result = await studentModel.findById("62adb6748399891d78d465b7");
    console.log(result, result.name, result.age, result._id.getTimestamp());
}


// Retrieve Single Document with specific field
const getSingleDocSpecificField = async ()=>{
    const result = await studentModel.findById("62adb6748399891d78d465b7", "name age");
    console.log(result);
}


// Retrieve Document by field
const getDocByField = async ()=>{
    const result = await studentModel.find({name:'Babu'});
    console.log(result, result[0].age);
}


// Retrieve Document by field with specific field
const getDocByFieldSpecificField = async ()=>{
    const result = await studentModel.find({name:'Babu'}).select({name:1, age:1});
    console.log(result);
}


// Retrieve Limited Document
const getLimitedDoc = async ()=>{
    // const result = await studentModel.find().limit(2);
    const result = await studentModel.find({}, null, {limit:2});
    console.log(result);
}


// Retrieve Skip Document
const getSkipDoc = async ()=>{
    // const result = await studentModel.find().skip(1);
    const result = await studentModel.find({}, null, {skip:1});
    console.log(result);
}


// Count Document
const getCountDoc = async ()=>{
    const result = await studentModel.find().countDocuments();
    console.log(result);
}


// Sorted Document
const getSortedDoc = async ()=>{
    // const result = await studentModel.find().sort({age:1}); // ascending

    const result = await studentModel.find().sort({age:-1}); // decending
    
    console.log(result);
}


// mixed query
const mixDoc = async ()=>{
    const result = await studentModel.find({}, {name:1, age:1}, {limit:2, skip:1});

    console.log(result);
}


// comparision query operator
const compDoc = async ()=>{

    // equal to age
    // const result = await studentModel.find({age: {$eq: 19}})

    // greater than in age
    // const result = await studentModel.find({age: {$gt: 25}})

    // greater than equal in age
    // const result = await studentModel.find({age: {$gte: 25}})

    // less than  in age
    // const result = await studentModel.find({age: {$lt: 25}})

    // less than equal in age
    // const result = await studentModel.find({age: {$lte: 25}})

    // not equal in age
    // const result = await studentModel.find({age: {$ne: 25}})

    // age 'in' some array
    // const result = await studentModel.find({age: {$in: [19, 25]}})

    // age 'nin' not in some array
    const result = await studentModel.find({age: {$nin: [19, 25]}})

    console.log(result);
}



// LOGICAL QUERY
const logDoc = async ()=>{

    // AND operation
    // const result = await studentModel.find({$and : [{name:"Aryan Nipane"}, {age:19}]});

    // OR operation
    // const result = await studentModel.find({$or : [{name:"Babu"}, {age:19}]});


    // logical + comparision
    // const result = await studentModel.find({$or : [{name:"alibaba"}, {age:{$gt:25}}]});


    // NOT operation
    const result = await studentModel.find({age: { $not: {$gt: 25}}});

    console.log(result);

}



// export this model
export {studentModel, getAllDoc, getAllDocSpecificField, getSingleDoc, getSingleDocSpecificField, getDocByField, getDocByFieldSpecificField, getLimitedDoc, getSkipDoc, getCountDoc, getSortedDoc, mixDoc, compDoc, logDoc};