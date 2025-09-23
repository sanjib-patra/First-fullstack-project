import mongoose from "mongoose"
import { AsyncHandler } from "../utils/AsyncHandler.js"
const ConnectDB=AsyncHandler(async()=>{
try{
const connectdb= await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
console.log("DataBase Connection Successfull")
return connectdb;
    }catch(error){
console.log("Mongo DB ConnecTion Failed",error)
    }
})

export {ConnectDB}