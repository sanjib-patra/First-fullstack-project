import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function ScoreBord() {
  const [Data, setData] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get("/User/ScoreBord",{ withCredentials: true });
      console.log(res)
      setData(res.data.data);
    } catch (err) {
      console.error("Error fetching quiz:", err);
    }
  };
  fetchData();
}, []);




  return (
    <>
      <div
        style={{
          display: "flex",
          minHeight: "90vh",
          justifyContent: "center",
          alignItems:"center"
        }}
      >
        <div
          style={{
        display:"flex",
        height:"230px",
        flexDirection:"column",
        border: "2px solid transparent",
  borderRadius:"10px",
    background: "black",
    color: "white",
 boxShadow: "0 0 8px red, 0 0 15px blue",
    transition: "box-shadow 0.3s ease-in-out",
          }}
        >
          <div
            style={{
              height: "120px",
              width:"360px",
              display: "flex",
              justifyContent: "space-between",
              border: "2px solid blacl",
            }}
          >
            <div>
              
              <img
                style={{ height: "80px", width: "150px",filter: "brightness(0) invert(1)" }}
                src="/logo.png"
                alt="Logo"
              />
            </div>
            <div style={{ height: "65px", border: "2px solid blacl", 
              paddingTop:"10px",width:"600px"
            }}>
              Wellcome To Our quiz platform I wish we can help you to learn
              things in depth : Here is Your Quiz result with id:-
              <p style={{color:"purple", display:"inline-block"}}>{Data?.id}</p>
            </div>
          </div>
          <div
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              border: "2px solid blue",
              alignItems:"center",
              fontSize:"25px",
              borderRadius:"10px"
            }}
          >
           You Scored {Data?.score}/{Data?.totalquestion}
          </div>
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
<div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
  <h4 style={{margin:"0px",marginTop:"20px"}}>4.4</h4>
  <h4 style={{margin:"0px"}}>Reviews</h4>
</div>
<div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}> <h4 style={{margin:"0px",marginTop:"20px"}}>4.2</h4>
  <h4 style={{margin:"0px"}}>Marketing</h4></div>
<div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
  <h4 style={{margin:"0px",marginTop:"20px"}}>4.2</h4>
  <h4 style={{margin:"0px"}}>Social</h4>
</div>
<div style={{display:"flex",flexDirection:"column",rowGap:"10px"}}>
  <h4 style={{margin:"0px",marginTop:"20px"}}>4.2</h4>
  <h4 style={{margin:"0px"}}>Technical</h4>
</div>
          </div>
        
        </div>
      </div>
    </>
  );
}
export { ScoreBord };
