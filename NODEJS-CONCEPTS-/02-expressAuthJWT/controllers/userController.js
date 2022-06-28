import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transporter from "../config/emailConfig.js";


class UserController{
    static userRegistration = async (req, res)=>{
        const {name, email, password, password_confirmation, tc} = req.body;

        const user = await UserModel.findOne({email:email});

        if(user){
            res.send({"status":"failed", "message":"Email already exists"})
        }
        else{
            if(name && email && password && password_confirmation && tc){
                if(password === password_confirmation){
                    
                    try{

                        const salt = await bcrypt.genSalt(10);
                        const hashPassword = await bcrypt.hash(password, salt);

                        const doc = UserModel({
                            name:name,
                            email:email,
                            password:hashPassword,
                            tc:tc
                        });
    
                        const result = await doc.save();

                        const savedUser = await UserModel.findOne({email:email});
                        // genarating jwt token
                        const token = jwt.sign({userID: savedUser._id}, process.env.JWT_SECRET_KEY, {expiresIn:"5d"})


                        // this token can be stored as session, cookie or localStorage in user browser

                        res.status(201).send({"status":"success", "message":"user registered success", "token":token});
                        
                    }
                    catch(err){
                        // in production use res.send() here with error message
                        console.log(err);
                    }

                }
                else{
                    res.send({"status":"failed", "message":"password and confirm password not matched"})
                }
            }
            else{
                res.send({"status":"failed", "message":"All Fields are required"});
            }
        }
    }


    static userLogin = async (req, res)=>{
        try {
            
            const {email, password} = req.body;

            if(email && password){
                const user = await UserModel.findOne({email:email});

                if(user != null){
                    const isMatch = await bcrypt.compare(password, user.password);

                    if((email === user.email) && isMatch){
                        // generate jwt token
                        const token = jwt.sign({userID: user._id}, process.env.JWT_SECRET_KEY, {expiresIn:"5d"})
                        res.send({"status":"success", "message":"login success", "token":token});
                    }  
                    else{
                        res.send({"status":"failed", "message":"incorrect password"});
                    }

                }
                else{
                    res.send({"status":"failed", "message":"user is not registered"});
                }
            }
            else{
                res.send({"status":"failed", "message":"All Fields are required"});
            }

        } catch (err) {
            console.log(err);
            res.send({"status":"failed", "message":"Unable to login"});
        }
    }


    // after user login change password
    static changeUserPassword = async (req, res)=>{

        const {password, password_confirmation} = req.body;

        if(password && password_confirmation){
            if(password !== password_confirmation){
                res.send({"status":"failed", "message":"new password and confirm password not matched"})
            }
            else{
                const salt = await bcrypt.genSalt(10);
                const hashPassword = await bcrypt.hash(password, salt);

                await UserModel.findByIdAndUpdate(req.user._id, {password:hashPassword});

                res.send({"status":"success", "message":"password change success"});
            }
        }
        else{
            res.send({"status":"failed", "message":"All Fields are required"})
        }

    }


    static loggedUserData = async (req, res)=>{
        res.send({"userData":req.user});
    }


    // when user forget password we use this method tp send reset link
    static resetPasswordEmail = async (req, res)=>{
        const {email} = req.body;

        if(email){
            const user = await UserModel.findOne({email:email});

            if(user){
                const secret = user._id + process.env.JWT_SECRET_KEY;
                const token = jwt.sign({userID:user._id}, secret, {expiresIn:"5m"});

                // link for front end to use like react routers 
                const link = `http://localhost:3000/api/user/reset/${user._id}/${token}`
                // this link will be sent to user by email

                let info = await transporter.sendMail({
                    from:process.env.EMAIL_FROM,
                    to:user.email,
                    subject:"NipaneStore - Reset Link",
                    html:`<a href="${link}">click here</a> to reset password`
                })

                console.log(link);

                res.send({"status":"success", "message":"reset password link sent to your email", "info":info});

            }
            else{
                res.send({"status":"failed", "message":"email does not exist"})
            }

        }
        else{
            res.send({"status":"failed", "message":"email field is required"})
        }
    }

    
    // when user send reset pass from reset link to server
    static userResetPassword = async (req, res)=>{
        const {password, password_confirmation} = req.body;
        const {id, token} = req.params;

        const user = await UserModel.findById(id);
        const new_secret= user._id + process.env.JWT_SECRET_KEY;

        try{
            jwt.verify(token, new_secret);

            if(password && password_confirmation){
                if(password !== password_confirmation){
                    res.send({"status":"failed", "message":"password and confirm password not matched"});
                }
                else{
                    const salt = await bcrypt.genSalt(10);
                    const hashPassword = await bcrypt.hash(password, salt);

                    await UserModel.findByIdAndUpdate(user._id, {$set:{password:hashPassword}});



                    res.send({"status":"success", "message":"password reset success"});

                }
            }
            else{
                res.send({"status":"failed", "message":"all fields are required"})
            }

        }
        catch(err){
            console.log(err);
            res.send({"status":"failed", "message":"invalid token"});
        }

    }

}


export default UserController;