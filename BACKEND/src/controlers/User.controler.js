
import {ErrorHandler} from "../utils/ErrorHandler.js"
import { AsyncHandler } from "../utils/AsyncHandler.js"
import {User} from "../models/User.models.js"
import {ResponceHandler} from "../utils/ResponceHandler.js"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Quiz } from "../models/Quiz.models.js";
import { Score } from "../models/Scorebord.models.js";
import dotenv from "dotenv";
import { Feedback } from "../models/Feedback.models.js";
import { History } from "../models/Histry.models.js";


dotenv.config();




const GenerateTokenes=async(userexist)=>{

   try{
const AccessToken=await userexist.GenerateAccessToken()
const RefreshToken=await userexist.GenerateRefreshToken()
userexist.refreshToken=RefreshToken
userexist.save({validateBeforeSave:false})
return{AccessToken,RefreshToken}
   }catch(error){
console.log("Token genetation failed",error)
   }
}





const RegisterUser=AsyncHandler(async(req,res)=>{
   

    const {UserName,email,password}=req.body


    if(!UserName||!email||!password){
        throw new ErrorHandler(400,"All Fields are required")
    }
const existeduser=  await User.findOne({$or:[{UserName},{email}]})


if(existeduser){
   throw new ErrorHandler(409,"user already axsist")
}

const user=await User.create({
  UserName:UserName.toLowerCase(),
   password,
   email
})
console.log(user)

if(!user){
   throw new ErrorHandler(500,"something went wrong when registering user")
}

return res.status(201).json(
   new ResponceHandler(200,user,"user registered sucessfully")
)

})




/// LOGIN CODE 


const LoginUser=AsyncHandler(async(req,res)=>{


const{ UserName,email,password}=req.body
 
if(!UserName&&!email){
   throw new ErrorHandler(400,"UserName or Email is required")
}

if(!password){
   throw new ErrorHandler(400,"Password is required for Login")
}

const userexist=await User.findOne({$or:[{UserName:UserName.toLowerCase()},{email}]})

if(!userexist){
   throw new ErrorHandler(400,"User is not Registered")
}

const correct=await userexist.isPasswordCorrect(password)

if(!correct){
   throw new ErrorHandler(400,"Entered Password Is Wrong")
}



const {AccessToken,RefreshToken}=await GenerateTokenes(userexist)

const LogedinUser=await User.findById(userexist._id).select("-password -RefreshToken")

const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // true on Render
//   sameSite: "none", // for cross-site frontend/backend
};

return res
.status(200)
.cookie("accesstoken",AccessToken,options)
.cookie("refreshtoken",RefreshToken,options)
.json(   new ResponceHandler(
            200, 
            {
                user: LogedinUser, AccessToken, RefreshToken
            },
            "User logged In Successfully"
        ))




})







console.log(process.env.GIMINI)

const genAI=new GoogleGenerativeAI(process.env.GIMINI)



//// FOR GIMINI VERSION 1.5 
// BERSION 1.5 GIVES UNWANTED SYMBOLS WOTH THE GSON RESPONCE LIKE ```JSON``` ETC BOT IN VERSION 2.0 THIS RETURNS PURE APPLITION JSON





// const GenerateQuiz=AsyncHandler(async(req,res)=>{
   
//    try{const {topic,difficulty}=req.body
//   const prompt=`Generate 5 ${difficulty} questions on ${topic}.
// Return ONLY valid JSON, no explanations, no markdown fences,no extra { or }, no extra , or  no \n its an strict order and generate different questions if one equestion is asked multiple time  .
// Format:
// [
//   {
//     "question": "string",
//     "options": ["string"],
//     "answer": "string"
//   }
// ]`
// const model=genAI.getGenerativeModel({model:"gemini-2.0-flash"})
// const result=await model.generateContent(prompt)
// let content=result.response.text().trim()
// console.log(result);
// if(content.startsWith("```")){
//    content=content.replace(/```json|```|.../g, "").trim()
// }
// const questions=JSON.parse(content)

// const quiz=Quiz.create({
//    topic,
//    difficulty,
//    questions
// })

//    return res
//       .status(200)
//       .json(new ResponceHandler(200,quiz, "Quiz generation successful"));

// }
//    catch(error){
//        console.error("Quiz generation error:", error);
//     return res
//       .status(500)
//       .json(new ResponceHandler(500, error.message, "Quiz Generation Failed"));
//    }
// })




const GenerateQuiz = AsyncHandler(async (req, res) => {
  
    const { topic,difficulty,qnumber } = req.body;


if(!topic){
   throw new ErrorHandler(400,"Topic feilds is required")
}
if(!difficulty){
   throw new ErrorHandler(400,"Difficulty is required")
}

  
    const prompt = `
    Generate ${qnumber||5} ${difficulty} questions on ${topic}.
    Return ONLY valid JSON, no explanations, no markdown fences.and giv different questions in responce if same question was asked multiple times
    Format:
    [
      {
        "question": "string",
        "options": ["string"],
        "answer": "string"
      }
    ]
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });

    // ✅ Force Gemini to respond with pure JSON
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    // response.text() is guaranteed JSON here
    const questions = JSON.parse(result.response.text());

    // Save quiz to DB
    const quiz = await Quiz.create({
      topic,
      difficulty,
      qnumber:qnumber||5,
      questions,
    });

       return res
      .status(200)
      .json(new ResponceHandler(200, quiz, "Quiz generation successful"));

});



// Save Quiz


const SaveQuiz=AsyncHandler(async(req,res)=>{

const {answers,quiz_id}=req.body

const quiz=await Quiz.findById(quiz_id)

if(!quiz){
   throw new ErrorHandler(400,"No Quiz is available according to this quiz_Id")
}


let score=0
// let length=0
quiz.questions.forEach((e,i)=>{
   if(answers[i]===e.answer){
score++
// length++
   }
})




const Questions = quiz.questions.map(q => q.question);  // 

let question_Answer=[]
let user_Answers=[]
quiz.questions.forEach((e,i)=>{
  
  question_Answer[i]=e.answer
   user_Answers[i]=answers[i]
})




const ScoreSaved=await Score.create({
   quizId:quiz_id,
   score:score,
   total:Object.keys(answers).length||5
})

if(!ScoreSaved){
   throw new ErrorHandler(400,"ScoreBord Saving Error")
}
console.log(ScoreSaved._id)




const currentuser= await User.findById(req.user._id)
const userHistory=await History.create({
UserId:currentuser._id,
UserName:currentuser.UserName,
Topic:quiz.topic,
question:Questions,
Questionanswer:question_Answer,
UserAnswer: user_Answers,
Score:score
})

console.log(userHistory)


const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // true on Render
//   sameSite: "none", // for cross-site frontend/backend
};

return res
.status(200)
.cookie("quiz_id",quiz_id,options)
.cookie("ScoreSaved_ID",ScoreSaved._id,options)
.json(   new ResponceHandler(
            200, 
            {
                ScoreSaved,quiz_id
            },
            "User Quiz Saved Successfully"
        ))




})


// ScoreBord

const ScoreBord=AsyncHandler(async(req,res)=>{

const quizid=await Score.findById(req.cookies.ScoreSaved_ID)
const id=quizid._id
const score=quizid.score
const totalquestion=quizid.total
return res
.status(200)
.json(
    new ResponceHandler(
      200,
      { id, score,totalquestion },
      "Score Sent Successfully"
    )
   )

})





// LOGOUT USER 



const LogoutUser=AsyncHandler(async(req,res)=>{

   await User.findByIdAndUpdate(
      req.user._id,
      {
$unset:{
   refreshToken:1
}
      },
      {
         new:true
      }
)

const options = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // true on Render
//   sameSite: "none", // for cross-site frontend/backend
};

res.status(200)
.clearCookie("refreshtoken",options)
.clearCookie("accesstoken",options)
.json(new ResponceHandler(200,{},"Loged Out Sucessfully"))


})



// User History


const UserHistory = AsyncHandler(async (req, res) => {
  const Id = req.user._id;  // comes from authentication middleware

  const QuizList = await History.find({ UserId: Id }).sort({ createdAt: -1 }); // newest first

  if (!QuizList || QuizList.length === 0) {
    throw new ErrorHandler(400, "No quiz history found");
  }
console.log(QuizList)
  res.status(200).json({
    success: true,
    history: QuizList
  });
});



// FeedBack


 const submitFeedback = AsyncHandler(async (req, res) => {
  const { name, email, experience } = req.body;

  if (!name || !email || !experience) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const feedback = await Feedback.create({ name, email, experience });

  return res.status(201).json(
    new ResponceHandler(201, feedback, "Feedback submitted successfully")
  );
});



export {RegisterUser,LoginUser,GenerateQuiz,SaveQuiz,ScoreBord,LogoutUser,UserHistory,submitFeedback}