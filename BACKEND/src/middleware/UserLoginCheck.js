import { AsyncHandler } from "../utils/AsyncHandler.js";
import jwt from "jsonwebtoken"
import { ErrorHandler } from "../utils/ErrorHandler.js";
import { User } from "../models/User.models.js";
const UserLoginCheck=AsyncHandler(async(req,res,next)=>{
try{
// const token=req.cookies?.accesstoken || req.header("Authorization")?.replace("Bearer","")
    let token = req.cookies?.accesstoken;

if(!token){
    throw new ErrorHandler(401,"Unauthorized Request/ Login Required")
}
const validation_Token=await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)


const validateUser=await User.findById(validation_Token._id)
if(!validateUser){
    throw new ErrorHandler(401,"Invalide User Access Token")
}
req.user=validateUser
next()
}catch(error){
   throw new ErrorHandler(401,error?.message||"invalid access token")
}
})

export {UserLoginCheck}