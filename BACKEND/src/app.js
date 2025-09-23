import cors from "cors"
import express from "express"
import cookieParser from "cookie-parser"
const app=express()
const allowedOrigins = [
  "http://localhost:5173", // dev frontend
  "https://first-fullstack-project122.onrender.com" // Render frontend
];

// ✅ Proper CORS config
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser requests
    if (!allowedOrigins.includes(origin)) {
      return callback(new Error("CORS not allowed"), false);
    }
    return callback(null, true);
  },
  credentials: true, // allow cookies
}));

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import UserRouter from "./routers/Routes.js"

app.use("/User",UserRouter)


export {app}