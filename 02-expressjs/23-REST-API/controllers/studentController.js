import StudentModel from "../models/Student.js";

class StudentController{
    static createDoc = async (req, res)=>{
        try{

            const {name, age, fees} = req.body;
            console.log(name, age, fees);
            
            const Doc = StudentModel({
                name:name,
                age:age,
                fees:fees
            })

            const result = await Doc.save()

            console.log(result);

            // set status code while sending data
            res.status(201).send(result);

            // res.json(result);
        }
        catch(err){
            console.log(err);
        }
    }

    static getAllDoc = async (req, res)=>{
        try{
            const result = await StudentModel.find();
            res.json(result);
        }
        catch(err){
            console.log(err);
        }
    }

    static getSingleDocById = async (req, res)=>{
        try{
            const id = req.params.id;
            const result = await StudentModel.findById(id);
            res.json(result);
        }
        catch(err){
            console.log(err);
        }
    }

    static updateDoc = async (req, res)=>{
        try{
            const id = req.params.id;
            const {name, age, fees} = req.body;

            const result = await StudentModel.findByIdAndUpdate(id, req.body);

            console.log(result);

            res.status(201).send(result);

        }
        catch(err){
            console.log(err);
        }
    }

    static deleteDoc = async (req, res)=>{
        try{
            const id = req.params.id;
            const result = await StudentModel.findByIdAndDelete(id);

            console.log(result);

            res.status(201).send(result);
        }
        catch(err){
            console.log(err);
        }
    }

    static getForm = (req, res)=>{
        console.log(req.body);
        res.send("Got Form");
    }

}

export default StudentController;