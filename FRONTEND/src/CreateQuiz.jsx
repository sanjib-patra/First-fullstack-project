import axios from "axios";
import { useState } from "react";
import { TakeQuiz } from "./TakeQuize";
function CreateQuiz(){

    const [topic,settopic]=useState("")
    const [difficulty,setdifficulty]=useState("")
    const [qnumber,setqnumber]=useState("")
     const [quizResult, setQuizResult] = useState(null);
async function handlesubmit(event) {
     event.preventDefault();
     alert("⏳ Please wait a moment,and don't click Generate Quiz again  your quiz is generating...");

     try{
        const result=await axios.post("https://first-fullstack-project-pzek.onrender.com/User/Quiz",{
            topic,
            difficulty,
            qnumber
        },{ withCredentials: true } )
         setQuizResult(result.data.data);
         console.log(result.data)
         
        alert(result.data.message)
     }catch(error){
        alert(error.response.data.message)
        console.log(error)
     }
}

    return(<><div style={{display:"flex",border:"2px solid black"}}>
        
      <div style={{minHeight:"90vh",display:"flex",alignItems:"center",width:"40vw"}} >

    <div
  style={{
    border: "2px solid transparent",
    boxShadow: "0 0 8px red, 0 0 15px blue",
    transition: "all 0.3s ease-in-out",
    height: "70vh",
    width: "100%",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "black",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow = "0 0 15px red, 0 0 25px blue"; // brighter glow on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 0 8px red, 0 0 15px blue"; // reset to normal glow
  }}
>
            <form onSubmit={handlesubmit}style={{width:"100%",height:"90%",display:"flex",
                flexDirection:"column",justifyContent:"space-evenly"
            }}>


<textarea
id="topic"
  style={{
    width: "100%",
    height: "120px",
    padding: "10px",
    border:"2px solid black",
    boxSizing: "border-box",
    borderRadius:"10px",
    resize: "none", 
    overflowY: "auto", 
    whiteSpace: "pre-wrap", 
  }}
  value={topic}
  onChange={(e) => {settopic(e.target.value)}}
  placeholder="Enter Your Topic"
required
/>





<div style={{display:"flex",flexDirection:"column",columnGap:"5px",rowGap:"5px"}}>
<label style={{fontSize:"17px",marginTop:"5px"}} htmlFor="difficulty">Difficulty:</label>
<select style={{height:"40px",fontSize:"16px",border:"2px solid black",
    boxSizing: "border-box",
    borderRadius:"10px",}} id="difficulty" name="difficulty" value={difficulty} onChange={(e)=>{setdifficulty(e.target.value)}} required>
 <option value="" disabled>Select difficulty</option>
  <option value="easy">Easy</option>
  <option value="moderate">Moderate</option>
  <option value="hard">Hard</option>
</select>
<label style={{fontSize:"17px",marginTop:"15px",border:"2px solid black"}} htmlFor="qnumber">Question Number:</label>
<select style={{height:"40px",fontSize:"16px",border:"2px solid black",
    boxSizing: "border-box",
    borderRadius:"10px",}} id="qnumber" name="qnumber" value={qnumber} onChange={(e)=>{setqnumber(e.target.value)}} >
  <option value="" disabled>Select number of questions</option>

  {Array.from({ length: 100 }, (_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ))}
</select>

</div>

<br>
</br>
 <button 
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        background: "linear-gradient(to right, #8e44ad, #4d79ff)",
        color: "white",
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s ease, transform 0.3s ease"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#1557b0";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#1a73e8";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      Generate Quiz
    </button>
            </form>
  </div>


       </div>
        <div style={{height:"90vh",width:"60vw",border:"2px solid black",display:"flex",flexDirection:"column",padding: "10px",
    boxSizing: "border-box", esize: "none", 
    overflowY: "auto", 
    whiteSpace: "pre-wrap", rowGap:"15px", columnGap:"20px"}}>
           {quizResult?.questions?.length > 0  && <TakeQuiz quiz={quizResult} />}


        </div>





        </div></>)
}

export {CreateQuiz}