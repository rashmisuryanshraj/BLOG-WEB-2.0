import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true,
        minLength:3
    },
    Emailmail:{
       type:String,
       require:true,
       validate(value){
        if(! validator.isEmail(value)){
            throw new Error("Invailed email id")
        }
       } 
    },
    Phone:{
        type:Number,
        require:true,
        minLength:10
    },
    Message:{
        type:String,
        require:true,
        minLength:3
    }
});

const UserModule = mongoose.model("user",UserSchema);

export default UserModule;