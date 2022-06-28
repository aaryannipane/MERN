import jwt from "jsonwebtoken";
import UserModel from "../models/User.js"


// middleware to check user is logged in and authenticated while we are using protected routes
const checkUserAuth = async (req, res, next)=>{

    let token;

    // at frontend user will store token in header while sending requests
    const {authorization} = req.headers;


    if(authorization && authorization.startsWith("Bearer")){
        try{

            token = authorization.split(" ")[1];

            // verify token and get user id from token
            const {userID} = jwt.verify(token, process.env.JWT_SECRET_KEY);

            // get user from user id and set that data to req.user 
            req.user = await UserModel.findById(userID).select('-password');

            next();
        }
        catch(err){
            console.log(err);
            res.status(401).send({"status":"failed", "message":"unauthorized user"});
        }
    }
    

    if(!token){
        res.status(401).send({"status":"failed", "message":"unauthorized user, no token"});
    }

}

export default checkUserAuth;