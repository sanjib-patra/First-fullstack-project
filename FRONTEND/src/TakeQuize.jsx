import axios from "axios";
import { useState } from "react"

import { useNavigate } from "react-router";

function TakeQuiz({quiz}){
   let navigate=useNavigate()
   if (!quiz?._id) {
    console.error("Quiz is undefined!");
    return; // prevent crash
  }
   const [answers, setAnswers] = useState({});


     const handleChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

async function handlesubmit(event) {
    if (Object.keys(answers).length !== quiz.questions.length) {
    alert("Please answer all questions before submitting.");
    return;
  }
    try{
const sevedquiz=await axios.post("https://first-fullstack-project-pzek.onrender.com/User/SaveQuiz",{
  answers,
  quiz_id:quiz._id
},{ withCredentials: true })
console.log(sevedquiz)
navigate("/ScoreBord")

    }catch(error){
      if (error.response) {
    console.log(error.response.data.message); // backend error
  } else {
    console.log("Network or server error:", error.message);
  }
    }
}

    return(<>
       <div style={{display:"flex",justifyContent:"flex-end",fontSize:"20px"}}>
     
       </div>
   {quiz?.questions?.map((q, index) =>( 

<div key={index}
 
  style={{
    width: "98%",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "black",
    boxShadow: "0 0 4px rgba(255,0,0,0.6), 0 0 8px rgba(0,0,255,0.6)", // subtle glow
    transition: "all 0.3s ease-in-out",
    height: "700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: "15px",
    columnGap: "20px",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-10px)";
    e.currentTarget.style.boxShadow =
      "0 0 6px rgba(255,0,0,0.8), 0 0 12px rgba(0,0,255,0.8)"; // slightly brighter but still soft
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 0 4px rgba(255,0,0,0.6), 0 0 8px rgba(0,0,255,0.6)"; // reset to subtle
  }}
 >
 
    <h4 className="question-text">
            {index + 1}. {q.question}
          </h4>
          {q.options.map((opt, i) => (
            <label key={i} className="option-label" style={{display:"flex"}}>
              <input
                type="radio"
                name={`q-${index}`}
                value={opt}
                checked={answers[index] === opt}
                onChange={() => handleChange(index, opt)}
              />
              {opt}
            </label>
          ))}
  </div>

        ))}

    <button onClick={handlesubmit}   style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
      background: "linear-gradient(to right, #e63946, #457b9d)",
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
      }}>
        Submit Quiz
        </button>    


   </>)}


export {TakeQuiz}


