import mongoose from "mongoose";
 const questionschema=new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    answer: {   // fixed typo
        type: String,
        required: true
    }
 },{timestamps:true})

 export {questionschema}
