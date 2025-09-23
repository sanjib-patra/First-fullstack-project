import { Router } from "express"
import { LoginUser, RegisterUser, UserHistory } from "../controlers/User.controler.js"
import { GenerateQuiz } from "../controlers/User.controler.js"
import { SaveQuiz } from "../controlers/User.controler.js"
import { ScoreBord } from "../controlers/User.controler.js"
import { LogoutUser } from "../controlers/User.controler.js"
import {UserLoginCheck} from "../middleware/UserLoginCheck.js"
import { submitFeedback } from "../controlers/User.controler.js"

const router=Router()


router.route("/Register").post(RegisterUser)
router.route("/Login").post(LoginUser)
router.route("/Quiz").post(UserLoginCheck,GenerateQuiz)
router.route("/SaveQuiz").post(UserLoginCheck,SaveQuiz)
router.route("/ScoreBord").get(ScoreBord)
router.route("/Logout").get(UserLoginCheck,LogoutUser)
router.route("/History").get(UserLoginCheck,UserHistory)
router.route("/Feedback").post(UserLoginCheck,submitFeedback)
export default router

//   /User/Register

//   /User/ScoreBord
