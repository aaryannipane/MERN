import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, reuired:true, trim:true},
    email:{type:String, reuired:true, trim:true},
    password:{type:String, reuired:true, trim:true},
    tc:{type:Boolean, reuired:true}
})

// MODEL
const UserModel = mongoose.model("user", userSchema);

export default UserModel;