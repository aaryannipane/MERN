import UserModel from "../models/User.js";
import bcrypt from "bcrypt";

class UserController{
    static home = (req, res)=>{
        res.render("index");
    }

    static registration = (req, res)=>{
        res.render("registration");
    }

    static createUserDoc = async (req, res)=>{

        let {name, email, password} = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        try{
            // create document using model
            const doc = UserModel({
                name:name,
                email:email,
                password:hashPassword,
            });

            const result = await doc.save();
            console.log(result)
            res.redirect("/login");

        }
        catch(err){
            console.log(err);
        }
    }

    static login = (req, res)=>{
        res.render("login");
    }

    static verifyLogin = async (req, res)=>{
        try{
            const {email, password} = req.body;

            // const result = await UserModel.findOne( {$and:[{email:email}, {password:password}]});`
            const result = await UserModel.findOne({email:email});

            if(result != null){
                const isMatch = await bcrypt.compare(password, result.password);
                if(result.email == email && isMatch){
                    res.redirect("/");
                }
                else{
                    res.send("<h1>email or password is incorrect</h1>");
                }
            }
            else{
                res.send("<h1>You are not registered user</h1>");
            }
            
            // res.redirect("/login");

            console.log(result);
        }
        catch(e){
            console.log(e);
        }
    }
}

export default UserController;