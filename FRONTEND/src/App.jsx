
import {  Route, Routes } from "react-router"
import Login from "./Login"
// import Navbar from "./Navbar"
import Home from "./Home"
import Register from "./Register"
import { CreateQuiz } from "./CreateQuiz"
import { ScoreBord } from "./ScoreBord"
import { About } from "./About"
import Navbar1 from "./Navbar2"
import { History } from "./UserHistory"
import { Services } from "./Services"
import { Feedback } from "./Feedback"

export default function App() {

// style={{margin:"0px",padding:"0px"}}
  return (
    <>
   <div style={{
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "black",
        color: "white",
        fontFamily: "Arial, sans-serif",
        paddingLeft: "5px",
        paddingRight: "5px", // add space for shadows
        boxShadow:
          "inset 3px 0 5px rgba(255,0,0,0.4), inset -3px 0 5px rgba(0,0,255,0.4)"
      }}> 
      
<Navbar1/>
{/* <Navbar/> */}
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
         <Route path="/Register" element={<Register/>} />
      <Route path="/Logout" element={<Home/>} />
<Route path="/CreateQuiz" element={<CreateQuiz/>} />
  <Route path="/ScoreBord" element={<ScoreBord/>} />  
      <Route path="/About" element={<About/>} />  
     <Route path="/History" element={<History/>} />
      <Route path="/Services" element={<Services/>} />  
       <Route path="/Feedback" element={<Feedback/>} />  
    </Routes>
 
  </div>
    </>
  )
}



