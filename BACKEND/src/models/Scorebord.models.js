import mongoose from "mongoose";
const scorebordschema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
    score: { type: Number, required: true },
    total: { type: Number, required: true }
},{timestamps:true})

export const Score=mongoose.model("Score",scorebordschema)