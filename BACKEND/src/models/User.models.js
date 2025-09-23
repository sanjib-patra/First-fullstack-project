import mongoose from "mongoose";

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const UserSchema=new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        index:true
    },
    password:{
        type:String,
        required:true,

    },
    refreshToken:{
        type:String,
    }

},{timestamps:true})



UserSchema.pre("save",async function(next){
  if(!this.isModified("password"))return next()
    this.password=await bcrypt.hash(this.password,10)
next()
})


UserSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

UserSchema.methods.GenerateAccessToken=async function(){
  return  jwt.sign({
        _id:this._id,
        UserName:this.UserName
    },process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRE
    }
)
}


UserSchema.methods.GenerateRefreshToken=async function(){
  return  jwt.sign({
        id:this.id,
    },process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPAIRY
    }
)
}





 export const User=mongoose.model("User",UserSchema)