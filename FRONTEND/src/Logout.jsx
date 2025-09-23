import axios from "axios";
import { NavLink } from "react-router";

function Logout(){
async function handleLogout(){
    console.log("Button was clicked")
try{
 const LogoutDetais=await axios.get("https://first-fullstack-project-pzek.onrender.com/User/Logout",{ withCredentials: true })
 console.log(LogoutDetais)
 alert(LogoutDetais.data.message)
}catch(error){
    console.log("User Logout Error",error)
}
}
    return(<>
    <NavLink style={{color:"blue",textDecoration:"none"}} to="/Logout" onClick={handleLogout}>Logout</NavLink>
    </>)
}
export {Logout}