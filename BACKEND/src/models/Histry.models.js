import mongoose from "mongoose";

const HistorySchema=new mongoose.Schema({
    UserId:{
        type:String
    },
    UserName:{
        type:String,
        required:true
    },
    Topic:{
        type:String
    },
    question:{
       type:[String],
        required:true
        
    },
    Questionanswer:{
        type:[String],
        required:true
    },
    UserAnswer:{
        type:[String],
        required:true,
    },
    Score:{
        type:Number,
        required:true
    },
    
},{timestamps:true})

export const History=mongoose.model("History",HistorySchema)