import cors from "cors"
import express from "express"
import cookieParser from "cookie-parser"
const app=express()
app.use(cors())

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import UserRouter from "./routers/Routes.js"

app.use("/User",UserRouter)


export {app}