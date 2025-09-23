import { app } from "./app.js"
import dotenv from "dotenv"
import { ConnectDB } from "./db/ConnectDB.js"
dotenv.config({
    path:"./.env"
})


ConnectDB()
.then(()=>{
app.get("/",(req,res)=>{
    res.send("hello Home")
})
const PORT=process.env.PORT_NO
app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT}`)
})
})
.catch((error)=>{
console.log("MONGO DB CONNECTION FAILED",error);

}
)