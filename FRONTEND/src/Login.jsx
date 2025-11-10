import  {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router";
function Login(){
  let navigate=useNavigate()

    const[name,setname]=useState("")
     const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const handlesubmit=async(event)=>{
        try{
        event.preventDefault();
const res=await axios.post("/User/Login",{UserName:name,email:email,password:password},{ withCredentials: true })
alert(res.data.message)
console.log(name,password,email)
navigate("/")
        }catch(error){
            alert(error.response.data.message)
        }
        

    } 




    return(<>
<div style={{display:"flex",minHeight:"100vh",justifyContent:"center",alignItems:"center",background:"black"}}> 
    

<form onSubmit={handlesubmit}>
    <div style={{  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  justifyContent:"center",
  height:"400px",
  width:"300px",
  gap:"30px",
  border: "2px solid transparent",
  borderRadius:"10px",
  padding: "20px",
    background: "black",
    color: "white",
 boxShadow: "0 0 8px red, 0 0 15px blue",
    transition: "box-shadow 0.3s ease-in-out",
  // background: "linear-gradient(to right, black, yellow,white)"

}}>     Login ✨
        <input style={{width: "250px",
            padding: "10px",
            border: "none",
            borderRadius: "8px",color:"black"}} value={name} placeholder="Enter your name" onChange={(e)=>{setname(e.target.value)}}></input>

        <input style={{ width: "250px",
            padding: "10px",
            border: "none",
            borderRadius: "8px",}} value={email} placeholder="Enter your Email" onChange={(e)=>{setemail(e.target.value)}}></input>

     <input style={{width: "250px",
            padding: "10px",
            border: "none",
            borderRadius: "8px",}} value={password} type="password" placeholder="Enter your Password" onChange={(e)=>{setpassword(e.target.value)}}></input>

        <button style={{
            width: "100px",
            padding: "12px",
           background: "linear-gradient(to right, #ff4d4d, #4d79ff)",
            border: "none",
            
            borderRadius: "8px",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s",
          }} >Submit</button>
    </div>
</form>
    
  </div>     </>)
}

export default Login