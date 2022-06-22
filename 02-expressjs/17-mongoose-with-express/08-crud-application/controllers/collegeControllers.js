import StudentModel from "../models/College.js";

class CollegeController{

    static createDoc = async (req, res)=>{

        try {
            // console.log(req.body.name);
            
            // destructuring
            const {name, age, fees} = req.body;

            const data = new StudentModel({
                name:name,
                age:age,
                fees:fees
            });

            const result = await data.save();

            // console.log(result);

            // redirects to below path after execution of this function
            res.redirect('/');
        } catch (error) {
            console.log(error);
        }
    }

    static getAllDoc = async (req, res)=>{

        try{
            const result = await StudentModel.find();
            // console.log(result)
            res.render("index", {data:result});

        }catch(err){
            console.log(err);
        }
    }

    static editDoc = async (req, res)=>{

        try{
            // console.log(req.params.id);

            // get data by id from database
            const result = await StudentModel.findById(req.params.id);
            // console.log(result)
            res.render("edit", {data:result});
        }
        catch(err){
            console.log(err);
        }
    }

    static updateDocById = async (req, res)=>{

        try{
            
            const id = req.params.id;
            const {name, age, fees} = req.body;

            const result = await StudentModel.findByIdAndUpdate(id, {name:name, age:age, fees:fees}, {returnDocument:"after"});
            console.log(result);
                        
            // redirects to below path after execution of this function
            res.redirect('/');
        }catch(err){
            console.log(err);
        }

    }

    static deleteDocById = async (req, res)=>{

        try{
            const id = req.params.id;

            const result = await StudentModel.findByIdAndDelete(id);
            // redirects to below path after execution of this function
            res.redirect('/');
        }
        catch(err){
            console.log(err);
        }

    }
}


export default CollegeController;