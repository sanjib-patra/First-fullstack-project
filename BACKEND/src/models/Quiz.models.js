import mongoose from "mongoose";
import { questionschema } from "./Question.model.js";


const QuizSchema=new mongoose.Schema({
   

    topic:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        enum:["easy","moderate","hard"],
        default:"easy",
        required:true
    },
    qnumber:{
        type:Number
    },
    questions:[questionschema]
},{})

export const Quiz=mongoose.model("Quiz",QuizSchema)