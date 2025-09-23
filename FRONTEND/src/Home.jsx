// import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router";

function Home(){


 let navigate=useNavigate()

const handlenavigate=(event)=>{
  
  navigate("/Register")
}



    return(<div>
        <div style={{display:"flex",flexDirection:"column",textAlign:"center",minHeight:"100vh",color:"white",backgroundColor:"black"}}>
  <h1 style={{fontSize:"45px",marginTop:"90px",width:"100vw",marginBottom:"10px"}}>Test Your Knowledge</h1>
  <div style={{width:"100vw",display:"flex",justifyContent:"center"}}><p style={{fontSize:"25px",width:"700px"}}>Create custom quizzes on any topic, challenge yourself with different difficulty levels, and track your progress over time.</p></div>
  <div>
<button
onClick={()=>{
  navigate("/CreateQuiz")
}}
  style={{
    fontSize:"20px",
    width: "230px",
    height: "50px",
    marginTop: "30px",
   background: "linear-gradient(to right, #0d1b4c, #132766, #1a3a80, #224099)",
    border: "none",  
    borderRadius: "10px",  
    color: "white",          
    cursor: "pointer",
  }}
>
  Start Your First Quiz
</button>

</div>
   



 <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "50px" }}> 
 
  <div
    style={{
      width: "250px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "black",
      border:"2px solid blue",
      boxShadow: "0 4px 8px rgba(239, 30, 30, 0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px)";
      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    }}
  >
    <h2 style={{ marginBottom: "10px" }}>📖 Custom Topics</h2>
    <p>Create quizzes on any subject you want to learn about</p>
  </div>

  {/* Card 2 */}
   <div
    style={{
      width: "250px",
      padding: "20px",
      backgroundColor:"black",
      borderRadius: "10px",
      border:"2px solid blue",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px)";
      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    }}
  >
    <h2 style={{ marginBottom: "10px" }}>🎯 Difficulty Levels</h2>
    <p>Choose from Easy, Medium, or Hard difficulty levels</p>
  </div> 

  {/* Card 3 */}
   <div
    style={{
      width: "250px",
      padding: "20px",
  
      border:"2px solid blue",
      borderRadius: "10px",
      backgroundColor: "black",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px)";
      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    }}
  >
    <h2 style={{ marginBottom: "10px" }}>🏆 Track Progress</h2>
    <p>Monitor your performance and improvement over time</p>
  </div>
</div>


<div style={{display:"flex",justifyContent:"center"}}>
<div
    style={{
      width: "400px",
      padding: "30px",
      borderRadius: "10px",
       backgroundColor: "black",
      border:"2px solid blue",
      // boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      marginTop:"20px",
      textAlign: "center",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",

    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-10px)";
      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    }}
  >
    <h2 style={{ marginBottom: "10px" }}>Ready to Get Started?</h2>
    <p style={{ marginBottom: "20px", color: "gray" }}>
      Sign up now and take your first quiz in under a minute!
    </p>
    <button onClick={handlenavigate}
      style={{
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#1a73e8",
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
      Create Account
    </button>
  </div>


</div>

<div id="footer" style={{display:"flex", border: "2px solid transparent",
      borderRadius: "10px",  boxShadow: "inset 0 5px 10px rgba(255,0,0,0.6), inset 0 5px 15px rgba(0,0,255,0.6)"
     ,  height:"300px",marginTop:"100px",minWidth:"100vw",flexDirection:"column"}}>

  <div><h1 style={{ marginTop: "25px", rowGap: "10px",color:"pink",fontFamily:"Pacifico, cursive", fontSize:"25px"  
    }}>Quiz Master</h1> </div>


<div style={{marginTop:"20px",minWidth:"100vw",display:"flex",justifyContent:"center"}}>
<div id="social media"style={{display:"flex",minWidth:"60%",justifyContent:"space-between"}}>


  <div style={{display:"flex",flexDirection:"column",gap:"15px"}}>
    <NavLink to="/" style={{color:"white",textDecoration:"none"}}>Home</NavLink>
  <NavLink to="/About" style={{color:"white",textDecoration:"none"}}>About</NavLink>
 
    </div >


    <div style={{display:"flex",flexDirection:"column",gap:"15px"}}>
    <h5 style={{fontSize:"15px"}}>Contact Us on :-8617543052</h5>
  <h5 style={{fontSize:"15px"}}>Email:-patrasanjib999@gmail.com</h5>
    </div>

<div style={{display:"flex",flexDirection:"column",gap:"15px"}}>
      <h5 style={{fontSize:"15px"}}><NavLink to="Services">Services</NavLink></h5>
  <h5 style={{fontSize:"15px"}}>
    <NavLink to="Feedback">Feedback</NavLink>
  </h5>
    </div >
  
</div>

</div>
{/* <hr style={{marginTop:"10px"}}></hr> */}


<div style={{marginTop:"50px",minWidth:"100vw",display:"flex",justifyContent:"center"}}>
<div id="social media"style={{display:"flex",minWidth:"40%",justifyContent:"space-around"}}>

<a href="https://www.facebook.com/profile.php?id=100028447748493"> <img
            style={{ height: "35px", display: "inline-block",filter: "brightness(0) invert(1)" }}
            src="/fb.png"
          ></img></a>


          <a href="https://www.instagram.com/sanjib6075/"> <img
            style={{ height: "35px", display: "inline-block",filter: "brightness(0) invert(1)" }}
            src="/insta.png"
          ></img></a>
  

<a href="https://www.linkedin.com/in/sanjib-patra-71b39530b/"> <img
            style={{ height: "35px", display: "inline-block",filter: "brightness(0) invert(1)" }}
            src="/link.png"
          ></img></a>

  
</div>

</div>





</div>



</div> 
    </div>)
}

export default Home